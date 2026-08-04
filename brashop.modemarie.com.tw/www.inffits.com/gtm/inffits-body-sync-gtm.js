/**
 * InfFITS 身材／推薦尺寸同步 — GTM／商品頁端
 * 用法：
 * 1) GTM 先載入本檔（放在各品牌 gtm_XXX 之前）：
 *    <script src="https://liff-personal.vercel.app/inffits-body-sync-gtm.js"></script>
 *    或 https://liff-personal.vercel.app/inffits-body-sync-gtm.js
 *
 * 2) 品牌 GTM 內呼叫：
 *    var S = window.InfFITSBodySync;
 *    S.init(); // 可選，載入時已 auto-init
 *    // 建立 iframe src 時：
 *    src = IFRAME_BASE + '?' + genderClothId + S.hashSuffix();
 *    // iframe 插入後 / 開 SizeAI 前：
 *    S.bindIframeLoad();
 *    S.pushToIframe();
 *
 * 協定見 inffits-body-sync-iframe.js 註解。
 */
(function (global) {
  if (global.InfFITSBodySync) return;

  var pending = null;
  var openerOrigins = [
    'https://liff-personal.vercel.app',
    'https://inffits.com',
    'https://www.inffits.com'
  ];
  var iframeId = 'inffits_ctryon_window';
  var inited = false;

  function decodePayload(raw) {
    if (!raw) return null;
    try {
      var s = String(raw).replace(/-/g, '+').replace(/_/g, '/');
      while (s.length % 4) s += '=';
      return JSON.parse(decodeURIComponent(escape(atob(s))));
    } catch (e1) {
      try {
        return JSON.parse(decodeURIComponent(String(raw)));
      } catch (e2) {
        return null;
      }
    }
  }

  function encodePayload(obj) {
    try {
      var json = JSON.stringify(obj);
      return btoa(unescape(encodeURIComponent(json)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
    } catch (e) {
      return '';
    }
  }

  function readFromLocation() {
    try {
      var hash = location.hash || '';
      var m = hash.match(/inffits_body=([^&]*)/);
      if (m) {
        var fromHash = decodePayload(decodeURIComponent(m[1]));
        if (fromHash) return fromHash;
      }
      var q = new URLSearchParams(location.search).get('inffits_body');
      if (q) return decodePayload(q);
    } catch (e) {}
    return null;
  }

  function pushToIframe() {
    if (!pending) return;
    var iframe = document.getElementById(iframeId);
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage({
        MsgHeader: 'inffits-body-apply',
        data: pending
      }, '*');
    } catch (e) {}
  }

  function hashSuffix() {
    if (!pending) return '';
    var payload = encodePayload(pending);
    if (!payload || payload.length > 3500) return '';
    return '#inffits_body=' + payload;
  }

  function requestFromOpener() {
    if (!global.opener || global.opener.closed) return;
    global.addEventListener('message', function (e) {
      var msg = e && e.data;
      if (!msg || msg.type !== 'inffits-body-sync-response' || !msg.data) return;
      pending = msg.data;
      pushToIframe();
    });
    try {
      global.opener.postMessage({ type: 'inffits-body-sync-request', ts: Date.now() }, '*');
    } catch (e) {}
    for (var i = 0; i < openerOrigins.length; i++) {
      try {
        global.opener.postMessage({ type: 'inffits-body-sync-request', ts: Date.now() }, openerOrigins[i]);
      } catch (e2) {}
    }
  }

  function bindIframeLoad() {
    var f = document.getElementById(iframeId);
    if (!f) return;
    f.addEventListener('load', function () { pushToIframe(); });
    setTimeout(pushToIframe, 500);
    setTimeout(pushToIframe, 1500);
  }

  function init(options) {
    options = options || {};
    if (options.openerOrigins && options.openerOrigins.length) {
      openerOrigins = options.openerOrigins.slice();
    }
    if (options.iframeId) iframeId = options.iframeId;
    if (options.extraOpenerOrigins) {
      openerOrigins = openerOrigins.concat(options.extraOpenerOrigins);
    }
    if (!inited) {
      pending = readFromLocation();
      requestFromOpener();
      inited = true;
    } else if (options.forceReread) {
      var again = readFromLocation();
      if (again) pending = again;
    }
    return api;
  }

  var api = {
    init: init,
    getPending: function () { return pending; },
    setPending: function (data) { pending = data; },
    readFromLocation: readFromLocation,
    pushToIframe: pushToIframe,
    /** @deprecated alias */
    pushBodyToIframe: pushToIframe,
    hashSuffix: hashSuffix,
    /** @deprecated alias */
    bodySyncHashSuffix: hashSuffix,
    bindIframeLoad: bindIframeLoad,
    encodePayload: encodePayload,
    decodePayload: decodePayload
  };

  global.InfFITSBodySync = api;
  // 自動 init，品牌腳本載入時即可用
  init();
})(typeof window !== 'undefined' ? window : this);
