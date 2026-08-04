/**
 * InfFITS 身材／推薦尺寸同步 — iframe 端
 * 用法（各品牌 indexwebiframe_*.html，放在 inf_main 之前）：
 *
 *   <script src="https://liff-personal.vercel.app/inffits-body-sync-iframe.js"></script>
 *   <script src="https://inffits.com/webDesign/HTML/js/iframe/inf_main_CAXX.min.js"></script>
 *
 * 協定：
 *   - URL hash/query: #inffits_body=<base64url>
 *   - parent → iframe: { MsgHeader: 'inffits-body-apply', data }
 *   - parent → iframe: { MsgHeader: 'inffits-body-export-request' }
 *   - iframe → parent: { MsgHeader: 'inffits-body-export-response', data }
 *   - BroadcastChannel: 'inffits-sizeai-body-sync'
 */
(function () {
  if (window.__INFFITS_BODY_SYNC_IFRAME__) return;
  window.__INFFITS_BODY_SYNC_IFRAME__ = true;

  var CHANNEL = 'inffits-sizeai-body-sync';
  var KEYS = [
    'BodyID', 'BodyID_color', 'BodyID_size', 'BodyMID_size',
    'Pattern_Prefers', 'SizeAIFast_switch', 'TID',
    'BodyID0', 'BodyID1', 'BodyID2', 'BodyID3', 'BodyID4', 'BodyID5',
    'CLOTHLIST', 'tb_cloth'
  ];
  var applying = false;
  var publishTimer = null;
  var bc = null;

  function snapshot() {
    var data = {};
    for (var i = 0; i < KEYS.length; i++) {
      var k = KEYS[i];
      try {
        var v = localStorage.getItem(k);
        if (v != null) data[k] = v;
      } catch (e) {}
    }
    return data;
  }

  function apply(data) {
    if (!data || typeof data !== 'object') return;
    applying = true;
    try {
      Object.keys(data).forEach(function (k) {
        if (KEYS.indexOf(k) === -1) return;
        try { localStorage.setItem(k, data[k]); } catch (e) {}
      });
    } finally {
      applying = false;
    }
  }

  function decodeBodyPayload(raw) {
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

  function applyFromLocation() {
    try {
      var hash = location.hash || '';
      var m = hash.match(/inffits_body=([^&]*)/);
      if (m) {
        var fromHash = decodeBodyPayload(decodeURIComponent(m[1]));
        if (fromHash) apply(fromHash);
      }
      var q = new URLSearchParams(location.search).get('inffits_body');
      if (q) {
        var fromQuery = decodeBodyPayload(q);
        if (fromQuery) apply(fromQuery);
      }
    } catch (e) {}
  }

  applyFromLocation();

  window.addEventListener('message', function (e) {
    var d = e && e.data;
    if (!d) return;
    if (d.MsgHeader === 'inffits-body-apply' && d.data) {
      apply(d.data);
      return;
    }
    if (d.MsgHeader === 'inffits-body-export-request' && e.source) {
      try {
        e.source.postMessage({
          MsgHeader: 'inffits-body-export-response',
          data: snapshot(),
          ts: Date.now()
        }, '*');
      } catch (err) {}
      return;
    }
    var header = d.MsgHeader || d.header;
    if (header === 'SizeAI_Fast' || header === 'FML_Done' || header === 'bid' || header === 'IDRxGet') {
      if (typeof schedulePublish === 'function') schedulePublish(header);
    }
  });

  if (typeof BroadcastChannel === 'undefined') return;
  try { bc = new BroadcastChannel(CHANNEL); } catch (e) { return; }

  function publish(reason) {
    if (applying || !bc) return;
    var data = snapshot();
    if (!data.BodyID && !data.BodyID_size && !data.BodyID_color) return;
    try {
      bc.postMessage({ type: 'inffits-body-sync', reason: reason || 'update', data: data, ts: Date.now() });
    } catch (e) {}
  }

  function schedulePublish(reason) {
    if (applying) return;
    clearTimeout(publishTimer);
    publishTimer = setTimeout(function () { publish(reason); }, 200);
  }

  bc.onmessage = function (ev) {
    var msg = ev && ev.data;
    if (!msg || msg.type !== 'inffits-body-sync') return;
    if (msg.request) {
      publish('response');
      return;
    }
    if (msg.data) apply(msg.data);
  };

  try { bc.postMessage({ type: 'inffits-body-sync', request: true, ts: Date.now() }); } catch (e) {}

  try {
    var _setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      _setItem.call(this, k, v);
      if (this === localStorage && KEYS.indexOf(String(k)) !== -1) schedulePublish('setItem:' + k);
    };
  } catch (e) {}
})();
