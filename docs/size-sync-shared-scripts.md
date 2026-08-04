## Demo 用 Vercel 測外部引入

`personalizedpage-omo-demo.html` 已改為外部腳本：

| 端 | 腳本 |
|----|------|
| omo demo | `https://liff-personal.vercel.app/inffits-body-sync-omo.js` |
| 試衣 iframe | `indexwebiframe_CAX_tw_mdmr.html` → `.../inffits-body-sync-iframe.js`（vercel） |
| keepbodyinfo `ts_gtm.js` | 動態載入 `.../inffits-body-sync-gtm.js`（vercel） |

測試前請先 **push／部署** 這三支 JS 與更新後的 demo／iframe／ts_gtm 到 Vercel。

測法：
1. 開 demo（`?type=size&tryon=true&brand=MDMR`）
2. DevTools → Network 確認有載入 `inffits-body-sync-omo.js`、iframe 內有 `inffits-body-sync-iframe.js`
3. 完成身材 → 點商品 → keepbodyinfo URL 含 `#inffits_body=`
4. keepbodyinfo 需載入 vercel 的 `ts_gtm.js`（或本機覆寫）才會吃到 gtm sync

---

## 試衣頁（omo）引入

三份頁面皆已改外部腳本：

```html
<script src="https://liff-personal.vercel.app/inffits-body-sync-omo.js"></script>
```

| 頁面 | 差異 |
|------|------|
| `personalizedpage-omo.html` | `InfFITSBodySyncOmo.init({ productLinkSelector })`，**保留原商品 URL** |
| `personalizedpage-omo-v2.html` | 同上 |
| `personalizedpage-omo-demo.html` | 同上 + `rewriteUrl` 強制 keepbodyinfo |

頁內只留薄包裝：`appendBodyHashToUrl()` 轉呼叫 `BodySyncOmo.appendBodyHashToUrl`（給 `buildTryonProductHref` 用）。

---

# 身材同步共用腳本（多品牌引入）



把同步邏輯抽成兩支檔，各品牌 **GTM**／**iframe HTML** 用 `<script src>` 引入即可，不必每支品牌複製一大段。

## 檔案位置

| 角色 | Repo 路徑 | 目前預設 URL（Vercel，可測） | 之後正式 CDN（可選） |
|------|-----------|------------------------------|----------------------|
| iframe 端 | `.../js/iframe/inffits-body-sync-iframe.js` | `https://liff-personal.vercel.app/inffits-body-sync-iframe.js` | `https://liff-personal.vercel.app/inffits-body-sync-iframe.js` |
| GTM 端 | `.../gtm/inffits-body-sync-gtm.js` | `https://liff-personal.vercel.app/inffits-body-sync-gtm.js` | `https://liff-personal.vercel.app/inffits-body-sync-gtm.js` |
| omo 端 | `inffits-body-sync-omo.js` | `https://liff-personal.vercel.app/inffits-body-sync-omo.js` | 同上可改掛 inffits |

腳本**不必同源**；目前先統一掛 Vercel，是因為檔案已在那邊、inffits CDN 還沒上傳。正式上傳後把 `src` 改成 inffits 即可。

---

## 品牌 iframe HTML（必要）

在 `inf_main_*.min.js` **之前**加一行：

```html
<script src="https://liff-personal.vercel.app/inffits-body-sync-iframe.js"></script>
<script src="https://inffits.com/webDesign/HTML/js/iframe/inf_main_CAXX.min.js"></script>
```

適用所有 `indexwebiframe_CAX_tw_*.html`（MDMR、JERSCY…）。

---

## 品牌 GTM JS（必要）

### 方式 A：GTM 容器先載入（建議）

Custom HTML / 額外 tag，**先於**品牌 `gtm_XXX_min.js`：

```html
<script src="https://liff-personal.vercel.app/inffits-body-sync-gtm.js"></script>
```

品牌腳本內只要：

```js
var BodySync = window.InfFITSBodySync;
if (BodySync) BodySync.init();

// 建立 SizeAI iframe src 時（原有 URL + Gender_ClothID 不變）：
src = IFRAME_BASE + "?" + genderClothId + (BodySync ? BodySync.hashSuffix() : "");

// iframe 插入 DOM 後：
if (BodySync) BodySync.bindIframeLoad();

// 點「AI 找尺寸」／SizeAItag 前：
if (BodySync) BodySync.pushToIframe();
```

### 方式 B：品牌 GTM 自己動態載入（MDMR 已採此法）

`Condition_Loaded` 開頭若尚無 `InfFITSBodySync`，先 insert script 再進 `Trigger_infFITS`。  
可覆寫來源：

```js
window.INFFITS_BODY_SYNC_GTM_SRC = "https://liff-personal.vercel.app/inffits-body-sync-gtm.js";
```

---

## `InfFITSBodySync` API（GTM 端）

| 方法 | 說明 |
|------|------|
| `init(options?)` | 讀 hash、向 opener 要資料；可傳 `openerOrigins` / `extraOpenerOrigins` / `iframeId` |
| `hashSuffix()` | 回 `"#inffits_body=..."` 或 `""`（接在 iframe src 後） |
| `pushToIframe()` | `postMessage({ MsgHeader: 'inffits-body-apply', data })` |
| `bindIframeLoad()` | iframe `load` + 延遲 retry 再 push |
| `getPending()` / `setPending(data)` | 目前 pending payload |

載入後會 **auto-init**。

---

## 其他品牌改動 checklist

1. 上傳／更新 CDN 上的兩支共用 JS  
2. 該品牌 **iframe HTML** 加 `inffits-body-sync-iframe.js`  
3. 該品牌 **GTM**：先載入 gtm sync，或照 MDMR 動態載入；`src` 加 `hashSuffix()`；開 SizeAI 前 `pushToIframe()`  
4. 試衣頁（omo）維持 `rel="opener"` + `#inffits_body=` / export（與品牌無關的共用邏輯）  
5. origin 白名單若有檢查 iframe message，可加上試衣頁 hostname（如 vercel）

---

## MDMR 現況

- `gtm_MDMR_min.js`：已改為動態載入 + 呼叫 `InfFITSBodySync`（內嵌大段已移除）  
- `indexwebiframe_CAX_tw_mdmr.html`：已改為 `<script src=".../inffits-body-sync-iframe.js">`
