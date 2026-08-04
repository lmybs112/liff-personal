# 身材／推薦尺寸同步：各檔案新增程式碼明細

> **多品牌請優先看：** [size-sync-shared-scripts.md](./size-sync-shared-scripts.md)  
> 同步核心已抽成 `inffits-body-sync-iframe.js` / `inffits-body-sync-gtm.js`，各品牌用 `<script src>` 引入。

本文件依檔案分類，列出這次為「試衣頁 → 商品頁 SizeAI」同步所**新增或改動**的確切程式。  
不含既有業務邏輯的完整原文，只標示與同步相關的插入點與內容。


同步 payload keys（各檔共用）：

```text
BodyID, BodyID_color, BodyID_size, BodyMID_size,
Pattern_Prefers, SizeAIFast_switch, TID,
BodyID0–BodyID5, CLOTHLIST, tb_cloth
```

訊息協定：

| 方向 | 內容 |
|------|------|
| URL | `#inffits_body=<base64url(JSON)>` |
| GTM → iframe | `{ MsgHeader: 'inffits-body-apply', data }` |
| omo → iframe | `{ MsgHeader: 'inffits-body-export-request' }` |
| iframe → omo | `{ MsgHeader: 'inffits-body-export-response', data }` |
| GTM → omo (opener) | `{ type: 'inffits-body-sync-request' }` |
| omo → GTM | `{ type: 'inffits-body-sync-response', data }` |
| BroadcastChannel | channel: `inffits-sizeai-body-sync`，`type: 'inffits-body-sync'` |

---

## 1. `personalizedpage-omo.html`

### 1.1 新增整段同步基礎建設（約在 `const type = ...` 之後）

新增常數／函式／事件：

- `PRODUCT_LINK_SELECTOR`
- `BODY_SYNC_KEYS`
- `pendingBodySyncReplies`
- `encodeBodyPayload()` — JSON → base64url
- `cacheBodySnapshot()` — 寫入 `sessionStorage['inffits_body_sync']`
- `requestTryonBodyExport()` — 對 `#inffits_ctryon_window` 送 `inffits-body-export-request`
- `snapshotTryonBody()` — 先試 iframe `localStorage`（同源），失敗則讀 sessionStorage；空則觸發 export
- `appendBodyHashToUrl(url)` — 在既有商品 URL 後加 `#inffits_body=...`（**不改商品 base URL**）
- `replyBodySync()` — 回覆 opener 的 sync-request
- **click capture**：商品／試衣 CTA 點擊時 `appendBodyHashToUrl` + `rel="opener"` + `target="_blank"`
- **message listener**：
  - 收 `inffits-body-export-response` → cache，並回覆排隊中的 opener
  - 收 `SizeAI_Fast` / `FML_Done` / `bid` / `IDRxGet` / `IDRxReady` → 延遲 export
  - 收 `inffits-body-sync-request` → 回 snapshot；若尚無資料則排隊並 export

### 1.2 既有 HTML／JS 小改

| 位置 | 改動 |
|------|------|
| 試衣 CTA：`#tryonProductExternalLink` / `#tryonQrLink` / `#tryonProductName` / `#tryonProductLink` | `rel="noopener noreferrer"` → `rel="opener"` |
| `buildTryonProductHref()` | 回傳值再經 `appendBodyHashToUrl(href)` |
| 設定試衣連結 `element.href = resolvedProductHref` 時 | 另設 `target="_blank"`、`rel="opener"` |
| `generateProductHtml` 的 `.embeddedItem` | 加上 `rel="opener"` |

**未改：** iframe `src`（仍 `https://inffits.com/.../indexwebiframe_CAX_tw_*.html`）、商品連結目的地。

---

## 2. `personalizedpage-omo-v2.html`

與 `personalizedpage-omo.html` **同一套同步區塊與小改**（函式名、協定、行為一致）。

另外：

| 位置 | 改動 |
|------|------|
| PID fallback CTA `ctaLink.rel` | `'noopener noreferrer'` → `'opener'` |

**未改：** iframe URL、商品 URL。

---

## 3. `personalizedpage-omo-demo.html`（Demo 專用，行為較強）

### 3.1 寫死 Demo 常數

```js
const KEEPBODYINFO_URL = 'https://infshop.shoplineapp.com/products/keepbodyinfo'
const FIXED_MODEMARIE_PRODUCT_URL = 'https://brashop.modemarie.com.tw/SalePage/Index/6538644'
const MDMR_IFRAME_BASE = 'https://liff-personal.vercel.app/indexwebiframe_CAX_tw_mdmr.html'
let Brand = 'MDMR'
const randomGen = 'false'
```

### 3.2 同步＋強制導向 keepbodyinfo

- `encodeBodyPayload` / `snapshotTryonBody` / `buildKeepbodyinfoUrlWithBody`
- `forceKeepbodyinfoLinks()` — 把商品卡／試衣 CTA 的 `href` 全改 keepbodyinfo + `#inffits_body=`，`rel="opener"`
- click 時再刷新 hash；`MutationObserver` 持續改寫動態注入的連結
- message：回覆 `inffits-body-sync-request`
- 試衣 iframe：`iframeUrl = MDMR_IFRAME_BASE + '?' + Gender_ClothID + '&_v=cdn2'`
- `buildTryonProductHref` → `buildKeepbodyinfoUrlWithBody()`
- 商品卡／QR／CTA 一律 keepbodyinfo + `rel="opener"`

（早期曾用 `preventDefault` + `window.open`，後改為原生 `<a>`，避免被擋彈窗。）

---

## 4. `brashop.modemarie.com.tw/www.inffits.com/gtm/gtm_MDMR_min.js`

### 4.1 在 `Trigger_infFITS()` 開頭整段新增（約 L45–133）

```js
    // 試衣頁 → 商品頁：第三方 iframe storage 隔離，靠 hash / opener 帶身材進 SizeAI
    var PENDING_BODY_SYNC = null;
    var OPENER_ORIGINS = [
        "https://liff-personal.vercel.app",
        "https://inffits.com",
        "https://www.inffits.com"
    ];

    function decodeInfBodyPayload(raw) {
        if (!raw) return null;
        try {
            var s = String(raw).replace(/-/g, "+").replace(/_/g, "/");
            while (s.length % 4) s += "=";
            return JSON.parse(decodeURIComponent(escape(atob(s))));
        } catch (e1) {
            try {
                return JSON.parse(decodeURIComponent(String(raw)));
            } catch (e2) {
                return null;
            }
        }
    }

    function encodeInfBodyPayload(obj) {
        try {
            var json = JSON.stringify(obj);
            return btoa(unescape(encodeURIComponent(json))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
        } catch (e) {
            return "";
        }
    }

    function readBodyFromLocation() {
        try {
            var hash = location.hash || "";
            var m = hash.match(/inffits_body=([^&]*)/);
            if (m) {
                var fromHash = decodeInfBodyPayload(decodeURIComponent(m[1]));
                if (fromHash) return fromHash;
            }
            var q = new URLSearchParams(location.search).get("inffits_body");
            if (q) return decodeInfBodyPayload(q);
        } catch (e) {}
        return null;
    }

    function pushBodyToIframe() {
        if (!PENDING_BODY_SYNC) return;
        var iframe = document.getElementById("inffits_ctryon_window");
        if (!iframe || !iframe.contentWindow) return;
        try {
            iframe.contentWindow.postMessage({
                MsgHeader: "inffits-body-apply",
                data: PENDING_BODY_SYNC
            }, "*");
        } catch (e) {}
    }

    function bodySyncHashSuffix() {
        if (!PENDING_BODY_SYNC) return "";
        var payload = encodeInfBodyPayload(PENDING_BODY_SYNC);
        if (!payload || payload.length > 3500) return "";
        return "#inffits_body=" + payload;
    }

    PENDING_BODY_SYNC = readBodyFromLocation();
    if (window.opener && !window.opener.closed) {
        window.addEventListener("message", function (e) {
            var msg = e && e.data;
            if (!msg || msg.type !== "inffits-body-sync-response" || !msg.data) return;
            PENDING_BODY_SYNC = msg.data;
            pushBodyToIframe();
        });
        try {
            window.opener.postMessage({
                type: "inffits-body-sync-request",
                ts: Date.now()
            }, "*");
        } catch (e) {}
        for (var oi = 0; oi < OPENER_ORIGINS.length; oi++) {
            try {
                window.opener.postMessage({
                    type: "inffits-body-sync-request",
                    ts: Date.now()
                }, OPENER_ORIGINS[oi]);
            } catch (e) {}
        }
    }
```

### 4.2 既有邏輯插入點（小改）

**A. origin 白名單 `b()`**

```js
// 原：
["inffits.com", "www.inffits.com", "brashop.modemarie.tw"]
// 改：
["inffits.com", "www.inffits.com", "brashop.modemarie.tw", "brashop.modemarie.com.tw", "liff-personal.vercel.app"]
```

**B. iframe `src`（URL 本體不變，只附加 hash）**

```js
// 原：
src="https://inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CAX_tw_mdmr.html?' + o + '"
// 改：
src="https://inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CAX_tw_mdmr.html?' + o + bodySyncHashSuffix() + '"
```

**C. iframe 插入後＋開啟 SizeAI 前**

```js
(function(){
  var f=document.getElementById("inffits_ctryon_window");
  if(f){
    f.addEventListener("load",function(){ pushBodyToIframe(); });
    setTimeout(pushBodyToIframe,500);
    setTimeout(pushBodyToIframe,1500);
  }
})(),
document.getElementById("SizeAItag").addEventListener("click", function() {
  pushBodyToIframe(),
  jQuery("#infFITS_findSize").parent().fadeIn(),
  // ...原有 FindinfFITS_SizeAItag postMessage
}),
document.getElementById("infFITS_sizefast").addEventListener("click", function() {
  pushBodyToIframe();
  // ...原有 FindinfFITS_toggle / APPHeader
})
```

---

## 5. `brashop.modemarie.com.tw/inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CAX_tw_mdmr.html`

在 `inf_main_CAXX.min.js` **之前**整段新增（約 L978–1115）：

```html
    <script>
        // BroadcastChannel + hash/postMessage：同步身材資料
        // 注意：試衣頁（第一方）↔ 商品頁（第三方 iframe）storage 會被隔離，
        // 需靠 URL hash / parent postMessage / opener 傳資料，不能只靠 BC。
        (function () {
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
    </script>
```

**未改：** 相對路徑 CSS／圖（此檔給正式 inffits 路徑用）。

---

## 6. `indexwebiframe_CAX_tw_mdmr.html`（repo 根目錄／Vercel）

與 brashop 鏡像**相同的同步 IIFE**（含 apply／export／BC）。

另外為 Vercel 根路徑部署另有：

- `<base href="https://inffits.com/webDesign/HTML/js/iframe/">`
- CSS／部分 img 改絕對 CDN URL
- `CDN_ROOT` + `toCdn`：patch `fetch`／`img.src`／`setAttribute('src')`，把 `../../img|css`、`../components` 轉到 inffits CDN

---

## 7. `ts_gtm.js`（Shopline keepbodyinfo Demo）

與 `gtm_MDMR_min.js` 同類同步邏輯，差異：

- `IFRAME_SRC_BASE` 固定（可覆寫）為  
  `https://liff-personal.vercel.app/indexwebiframe_CAX_tw_mdmr.html`
- 商品對應寫死 Modemarie `6538644` / `MDMR`
- 同樣：`PENDING_BODY_SYNC`、hash／opener、`pushBodyToIframe`、`bodySyncHashSuffix` 掛在 iframe `src` 與 SizeAI 開啟前

---

## 8. `.gitignore`

```gitignore
/brashop.modemarie.com.tw/**
!/brashop.modemarie.com.tw/www.inffits.com/
!/brashop.modemarie.com.tw/www.inffits.com/gtm/
!/brashop.modemarie.com.tw/www.inffits.com/gtm/gtm_MDMR_min.js
!/brashop.modemarie.com.tw/inffits.com/
!/brashop.modemarie.com.tw/inffits.com/webDesign/
!/brashop.modemarie.com.tw/inffits.com/webDesign/HTML/
!/brashop.modemarie.com.tw/inffits.com/webDesign/HTML/js/
!/brashop.modemarie.com.tw/inffits.com/webDesign/HTML/js/iframe/
!/brashop.modemarie.com.tw/inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CAX_tw_mdmr.html
```

效果：整個 `brashop.modemarie.com.tw` 忽略，只追蹤上述 **GTM** 與 **iframe** 兩檔（及其中間目錄）。

---

## 9. 文件（非執行碼）

| 檔案 | 內容 |
|------|------|
| `docs/size-sync-broadcastchannel.md` | 實作指南（為何 BC 不夠、三層方案、驗收） |
| `docs/size-sync-code-changes-by-file.md` | 本文件（依檔案列出新增程式） |

---

## 對照：誰負責哪一段

```text
omo / omo-v2 / omo-demo
  ├─ 收集身材（LS 或 export → sessionStorage）
  ├─ 商品連結 rel=opener + #inffits_body=
  └─ 回應 opener sync-request

gtm_MDMR_min.js / ts_gtm.js
  ├─ 讀 hash／向 opener 要資料
  ├─ iframe src 附加 #inffits_body=
  └─ postMessage inffits-body-apply

indexwebiframe_CAX_tw_mdmr.html（根目錄 + brashop 鏡像）
  ├─ 開機 apply hash/query
  ├─ 收 apply／回應 export
  └─ BroadcastChannel 同 partition 同步
```

部署提醒：正式站必須更新 **inffits.com 上的 iframe HTML** 與 **實際載入的 GTM JS**，本機／repo 改動才會在商品頁生效。
