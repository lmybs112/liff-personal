/**
 * InfFITS 身材／推薦尺寸同步 — 試衣頁（omo parent）端
 * 用法：
 *   <script src="https://liff-personal.vercel.app/inffits-body-sync-omo.js"></script>
 *   <script>
 *     InfFITSBodySyncOmo.init({
 *       productLinkSelector: 'a.embeddedItem, #tryonProductLink, ...',
 *       // 可選：改寫最終 href（demo 可強制 keepbodyinfo）
 *       rewriteUrl: function (urlWithHash) { return urlWithHash; }
 *     });
 *   </script>
 *
 * 依賴試衣 iframe 已載入 inffits-body-sync-iframe.js（支援 export-request）。
 */
(function (global) {
  if (global.InfFITSBodySyncOmo) return;

  var KEYS = [
    'BodyID', 'BodyID_color', 'BodyID_size', 'BodyMID_size',
    'Pattern_Prefers', 'SizeAIFast_switch', 'TID',
    'BodyID0', 'BodyID1', 'BodyID2', 'BodyID3', 'BodyID4', 'BodyID5',
    'CLOTHLIST', 'tb_cloth'
  ];
  var pendingReplies = [];
  var iframeId = 'inffits_ctryon_window';
  var productLinkSelector =
    'a.embeddedItem, #tryonProductLink, #tryonQrLink, #tryonProductExternalLink, a#tryonProductName';
  var rewriteUrl = null;
  var inited = false;

  function encodeBodyPayload(obj) {
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

  function cacheBodySnapshot(data) {
    if (!data || (!data.BodyID && !data.BodyID_size && !data.BodyID_color)) return null;
    try {
      sessionStorage.setItem('inffits_body_sync', JSON.stringify(data));
    } catch (e) {}
    return data;
  }

  function requestTryonBodyExport() {
    var iframe = document.getElementById(iframeId);
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage({ MsgHeader: 'inffits-body-export-request' }, '*');
    } catch (e) {}
  }

  function snapshotTryonBody() {
    var data = {};
    var iframe = document.getElementById(iframeId);
    try {
      var ls = iframe && iframe.contentWindow && iframe.contentWindow.localStorage;
      if (ls) {
        KEYS.forEach(function (k) {
          var v = ls.getItem(k);
          if (v != null) data[k] = v;
        });
      }
    } catch (e) {}
    if (!data.BodyID && !data.BodyID_size && !data.BodyID_color) {
      try {
        var cached = sessionStorage.getItem('inffits_body_sync');
        if (cached) data = JSON.parse(cached) || data;
      } catch (e2) {}
    }
    if (data.BodyID || data.BodyID_size || data.BodyID_color) {
      return cacheBodySnapshot(data);
    }
    requestTryonBodyExport();
    return null;
  }

  function appendBodyHashToUrl(url) {
    if (!url || url === '#') return url;
    var data = snapshotTryonBody();
    if (!data) return url;
    var payload = encodeBodyPayload(data);
    if (!payload || payload.length > 3500) return url;
    var withHash = String(url).split('#')[0] + '#inffits_body=' + payload;
    return typeof rewriteUrl === 'function' ? rewriteUrl(withHash, data) : withHash;
  }

  function replyBodySync(source, origin, data) {
    if (!source || !data) return;
    try {
      source.postMessage(
        { type: 'inffits-body-sync-response', data: data, ts: Date.now() },
        origin && origin !== 'null' ? origin : '*'
      );
    } catch (err) {}
  }

  function onClickCapture(e) {
    var a = e.target && e.target.closest && e.target.closest(productLinkSelector);
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href === '#') return;
    requestTryonBodyExport();
    a.setAttribute('href', appendBodyHashToUrl(href));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'opener');
  }

  function onMessage(e) {
    var msg = e && e.data;
    if (!msg) return;
    if (msg.MsgHeader === 'inffits-body-export-response' && msg.data) {
      var cached = cacheBodySnapshot(msg.data);
      if (cached && pendingReplies.length) {
        pendingReplies.splice(0).forEach(function (item) {
          replyBodySync(item.source, item.origin, cached);
        });
      }
      return;
    }
    var header = msg.MsgHeader || msg.header;
    if (header === 'SizeAI_Fast' || header === 'FML_Done' || header === 'bid' || header === 'IDRxGet' || header === 'IDRxReady') {
      setTimeout(requestTryonBodyExport, 100);
      setTimeout(requestTryonBodyExport, 800);
      return;
    }
    if (msg.type !== 'inffits-body-sync-request') return;
    var data = snapshotTryonBody();
    if (data) {
      replyBodySync(e.source, e.origin, data);
      return;
    }
    if (e.source) {
      pendingReplies.push({ source: e.source, origin: e.origin });
      requestTryonBodyExport();
    }
  }

  function init(options) {
    options = options || {};
    if (options.iframeId) iframeId = options.iframeId;
    if (options.productLinkSelector) productLinkSelector = options.productLinkSelector;
    if (typeof options.rewriteUrl === 'function') rewriteUrl = options.rewriteUrl;
    if (inited) return api;
    document.addEventListener('click', onClickCapture, true);
    global.addEventListener('message', onMessage);
    inited = true;
    return api;
  }

  var api = {
    init: init,
    snapshotTryonBody: snapshotTryonBody,
    appendBodyHashToUrl: appendBodyHashToUrl,
    encodeBodyPayload: encodeBodyPayload,
    requestTryonBodyExport: requestTryonBodyExport,
    cacheBodySnapshot: cacheBodySnapshot
  };

  global.InfFITSBodySyncOmo = api;
})(typeof window !== 'undefined' ? window : this);
