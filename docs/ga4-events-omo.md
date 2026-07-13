# personalizedpage-omo / omo-v2 GA4 事件補齊說明

日期：2026-07-13  
來源對照：`personalizedpage-omo_MDMR.html`  
目標檔案：
- `personalizedpage-omo.html`
- `personalizedpage-omo-v2.html`

## 改動目的

將 MDMR 版個人化頁已具備的 GA4（Google Analytics 4）行為追蹤，同步補到一般 OMO 頁與 OMO v2 頁，讓進站、曝光、導購、留資、LINE 推播等漏斗可在同一套事件命名下觀測。

## 與改動前的差異

| 項目 | 改動前（omo / omo-v2） | 改動後 |
|------|------------------------|--------|
| GA4 載入條件 | 僅在 URL 有 `?ga4key=` 時載入 | 有 `MDMR` 或 `?ga4key=` 才載入 |
| 預設評估 ID `G-H9V8PTN2X4` | 無 | URL 含 `MDMR` **且沒有** `ga4key` 時才使用 |
| 事件輔助函式 | 無 | 有 `window.infTrack()` |
| 互動事件 | 無 | 對齊 MDMR 全套互動事件 |
| 行為追蹤模組 | 無 | 進站／區塊曝光／商品清單／捲動／停留 |

## 初始化行為（重要）

與 MDMR 相同的關鍵條件：

```js
var DEFAULT_GA4_ID = ''
if (window.location.search.includes('MDMR')) {
  DEFAULT_GA4_ID = 'G-H9V8PTN2X4'
}
```

| 情境 | 結果 |
|------|------|
| URL **不含** `MDMR`，也無 `ga4key` | 不載入 gtag.js；`INF_GA4_ID === ''`；`infTrack` 仍存在但不進報表 |
| URL **含** `MDMR`（無 ga4key） | 只用 `G-H9V8PTN2X4` |
| 有 `?ga4key=G-XXXX`（不論有無 MDMR） | **只用** `ga4key`，**不會**帶入 `G-H9V8PTN2X4` |

全域變數：
- `window.INF_GA4_ID`：有 `ga4key` 用 `ga4key`；否則才是 MDMR 預設（都沒有則為空字串）
- `window.INF_GA4_IDS`：實際會 config 的 ID 清單（最多一個）
- `window.infTrack(eventName, params)`：統一送事件

### `infTrack` 自動附帶的情境參數

每次呼叫都會合併以下頁面情境（可被事件自訂參數覆寫）：

| 參數 | 說明 |
|------|------|
| `inf_brand` | URL `brand`，缺省為 `JERSCY` |
| `inf_page_type` | URL `type`，缺省 `pd` |
| `inf_random_gen` | 是否隨機產生推薦（無 brand 時為 `true`） |
| `inf_has_ai_tags` | session 是否有 AI 標籤 |
| `inf_ai_tag_count` | AI 標籤數量 |
| `inf_tryon_param` | URL `tryon` |
| `inf_entry` | 進站來源：`liff` 或 `web` |

## 互動事件清單

| 事件名稱 | 觸發時機 | 主要參數 |
|----------|----------|----------|
| `infcdp_tryon_product_click` | 試衣間導購連結點擊（CTA / QR / 品名 / 外連） | `inf_link_type`, `inf_item_id`, `inf_product_sku`, `inf_product_name` |
| `infcdp_tryon_carousel_nav` | 試穿輪播上一張／下一張 | `inf_direction` = `prev` \| `next` |
| `infcdp_tryon_image_fullscreen` | 開啟試穿圖全螢幕檢視 | `inf_image_count`, `inf_start_index` |
| `infcdp_view_tryon_gallery` | 開啟「查看全部穿搭」彈窗 | `inf_image_count` |
| `infcdp_email_lead_submit` | Email 通過驗證並送出 | `inf_email_domain` |
| `infcdp_email_lead` | Email 訂閱 API 成功 | `inf_email_domain`, `inf_product_count` |
| `infcdp_email_lead_failed` | Email 訂閱 API 失敗 | `inf_reason` |
| `infcdp_copy_coupon` | 折扣碼複製成功 | `inf_coupon_code`, `inf_device` |
| `infcdp_view_recommendations` | 英雄區「查看結果」CTA | `inf_source` = `hero_cta` |
| `infcdp_restart_recommendation` | 重新嘗試／回頂 | `inf_mode` = `scroll_top` \| `back_to_form` |
| `infcdp_liff_promo_click` | 點擊「取得最新優惠資訊」 | — |
| `infcdp_liff_login_start` | 觸發 LINE 登入 | — |
| `infcdp_liff_promo_sent` | LINE 推播成功 | `inf_product_count` |
| `infcdp_liff_promo_failed` | LINE 推播失敗 | `inf_reason` |

## 行為追蹤模組事件

頁尾 `infBehaviorTracking` IIFE，於 `DOMContentLoaded` 後啟動：

| 事件名稱 | 觸發時機 | 主要參數 |
|----------|----------|----------|
| `infcdp_personalized_page_view` | 進站 | `inf_viewport` = `mobile` \| `desktop` |
| `infcdp_view_section` | 區塊首次曝光（40% 可見） | `inf_section_name` |
| `infcdp_view_item_list` | 推薦清單首次注入商品 | `inf_item_list_name`, `inf_item_count` |
| `infcdp_select_item` | 點擊推薦商品卡 | `inf_item_list_name`, `inf_item_id`, `inf_item_name`, `inf_item_index` |
| `infcdp_tryon_collapse_toggle` | 試衣間收合切換 | — |
| `infcdp_scroll_depth` | 捲動達 25 / 50 / 75 / 90% | `inf_percent` |
| `infcdp_page_engagement` | 離開或隱藏頁面時送一次 | `inf_engagement_seconds`, `inf_max_scroll_percent` |

### 區塊名稱對照（`inf_section_name`）

| DOM 選擇器 | 名稱 |
|------------|------|
| `.cta-section, .mobile-cta-section` | `coupon` |
| `.tryon_section` | `tryon` |
| `.personalized_hero_section` | `hero` |
| `#jump-recom` | `personalized_recommendations` |
| `#jump-more` | `more_recommendations` |
| `.mail-section` | `mail_subscribe` |
| `#restartContainer` | `restart` |

## GA4 自訂維度建議對照

| 維度名稱（自取） | 事件參數（照打） |
|------------------|------------------|
| 商品ID | `inf_item_id` |
| 商品名稱 | `inf_item_name` |
| 商品位置 | `inf_item_index` |
| 推薦清單 | `inf_item_list_name` |
| 試衣間款式編號 | `inf_product_sku` |
| 試衣間商品名稱 | `inf_product_name` |
| 連結類型 | `inf_link_type` |
| 品牌 | `inf_brand` |
| 是否帶AI標籤 | `inf_has_ai_tags` |

## 驗證建議

1. **無 MDMR、無 ga4key**：Network 不應出現 `gtag/js?id=G-H9V8PTN2X4`；`INF_GA4_ID === ''`
2. **URL 含 `MDMR`（無 ga4key）**：Network 應載入 `gtag/js?id=G-H9V8PTN2X4`；`INF_GA4_ID === 'G-H9V8PTN2X4'`
3. **有 `?ga4key=品牌ID`（含同時有 MDMR）**：只載入品牌 ID；`INF_GA4_IDS` 只有該 ID，**不可**出現 `G-H9V8PTN2X4`
4. console 確認：
   ```js
   typeof window.infTrack === 'function'
   window.INF_GA4_ID
   window.INF_GA4_IDS
   location.search.includes('MDMR')
   ```
5. 操作試衣間導購、輪播、複製折扣碼、Email、LINE CTA，在 GA4 DebugView 或 `dataLayer` 確認事件

## 涉及檔案

- `personalizedpage-omo.html`：GA4 初始化（MDMR 條件）、互動事件、行為追蹤模組
- `personalizedpage-omo-v2.html`：同上
- `docs/ga4-events-omo.md`：本說明文件
