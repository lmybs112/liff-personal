# LINE 優惠按鈕顯示問題修復總結

## 🐛 問題描述

按鈕 `#liffPromoBtn`（取得最新優惠資訊）在部署到 Vercel 後消失，無法顯示。

---

## 🔍 問題根源分析

經過詳細檢查，發現以下 CSS 問題導致按鈕不可見：

### 1. 容器高度限制問題

**位置**：`personalizedpage-omo.html` 第 1796 行

**原始代碼**：
```css
.mail-section__container {
  width: 100%;
  height: 100%;  /* ❌ 問題：限制容器高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  gap: 36px 0;
}
```

**問題**：`height: 100%` 導致容器高度受限於父元素，當內容超出時，按鈕被推到容器外部。

---

### 2. 父容器高度設定問題

**位置**：`personalizedpage-omo.html` 第 1780 行

**原始代碼**：
```css
.mail-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;  /* ❌ 問題：高度可能不足 */
  padding: 100px 24px;
}
```

**問題**：`height: 100%` 在某些情況下可能無法正確計算高度，導致內容被裁切。

---

### 3. 桌面版 overflow 隱藏問題

**位置**：`personalizedpage-omo.html` 第 1942 行

**原始代碼**：
```css
@media screen and (min-width: 1240px) {
  .mail-section {
    overflow: hidden;  /* ❌ 問題：隱藏超出內容 */
    padding: 155px 80px 140px 80px;
    background: rgba(0, 0, 0, 0.95);
  }
}
```

**問題**：`overflow: hidden` 會裁切超出容器的內容，包括按鈕。

---

### 4. 按鈕缺少保護性樣式

**位置**：`personalizedpage-omo.html` 第 1999 行

**原始代碼**：
```css
.liff-promo-btn {
  border: none;
  display: flex;  /* ⚠️ 缺少 !important */
  padding: 12px 24px;
  /* ... 其他樣式 ... */
  /* ❌ 缺少 z-index, visibility, opacity 保護 */
}
```

**問題**：缺少強制顯示的保護性樣式，可能被其他規則覆蓋。

---

## ✅ 修復方案

### 修復 1：移除容器高度限制

```css
.mail-section__container {
  width: 100%;
  /* height: 100%;  ✅ 已移除 */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  gap: 36px 0;
}
```

**效果**：容器高度自動適應內容，按鈕不會被推出容器。

---

### 修復 2：改用 min-height

```css
.mail-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;  /* ✅ 改為 min-height */
  padding: 100px 24px;
}
```

**效果**：確保區域至少佔滿視窗高度，同時允許內容超出時自動擴展。

---

### 修復 3：改為 overflow: visible

```css
@media screen and (min-width: 1240px) {
  .mail-section {
    overflow: visible;  /* ✅ 改為 visible */
    padding: 155px 80px 140px 80px;
    background: rgba(0, 0, 0, 0.95);
  }
}
```

**效果**：桌面版不再裁切超出內容，按鈕完整顯示。

---

### 修復 4：添加保護性樣式

```css
.liff-promo-btn {
  border: none;
  display: flex !important;  /* ✅ 強制顯示 */
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #00C300;
  color: #fff;
  font-family: 'Noto Sans TC', Arial, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.34px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  margin-top: 20px;
  position: relative;        /* ✅ 新增 */
  z-index: 10;              /* ✅ 新增 - 確保在其他元素之上 */
  visibility: visible !important;  /* ✅ 新增 - 強制可見 */
  opacity: 1 !important;    /* ✅ 新增 - 強制不透明 */
}
```

**效果**：
- 強制按鈕顯示，不被其他規則覆蓋
- 確保按鈕在 z 軸上位於其他元素之上
- 防止被 JavaScript 或其他 CSS 隱藏

---

## 🧪 測試方法

### 本地測試

1. 開啟 `test-button-visibility.html` 進行本地測試
2. 確認綠色按鈕「取得最新優惠資訊」正常顯示
3. 點擊按鈕確認功能正常

### Vercel 部署測試

1. **提交更新**：
   ```bash
   git add personalizedpage-omo.html
   git commit -m "修復 LINE 優惠按鈕顯示問題"
   git push
   ```

2. **等待部署**：
   - Vercel 自動觸發部署（約 1-2 分鐘）
   - 在 Vercel Dashboard 查看部署狀態

3. **清除緩存**：
   - Windows/Linux: `Ctrl + Shift + R`
   - macOS: `Cmd + Shift + R`

4. **驗證顯示**：
   - 訪問 Vercel 部署的網址
   - 滾動到 mail-section 區域
   - 確認綠色按鈕顯示在「送出」按鈕下方

---

## 🔧 開發者工具檢查

如果按鈕仍然不可見，請使用瀏覽器開發者工具檢查：

### 1. 檢查按鈕元素是否存在

```javascript
// 在 Console 中執行
const btn = document.getElementById('liffPromoBtn')
console.log('按鈕元素:', btn)
console.log('按鈕是否存在:', !!btn)
```

### 2. 檢查計算後的樣式

```javascript
// 在 Console 中執行
const btn = document.getElementById('liffPromoBtn')
const styles = window.getComputedStyle(btn)
console.log('display:', styles.display)
console.log('visibility:', styles.visibility)
console.log('opacity:', styles.opacity)
console.log('z-index:', styles.zIndex)
console.log('position:', styles.position)
```

### 3. 檢查父容器

```javascript
// 在 Console 中執行
const btn = document.getElementById('liffPromoBtn')
const container = btn.parentElement
console.log('父容器:', container)
console.log('父容器樣式:', window.getComputedStyle(container))
```

---

## 📊 修復前後對比

| 項目 | 修復前 | 修復後 |
|------|--------|--------|
| `.mail-section` 高度 | `height: 100%` | `min-height: 100vh` |
| `.mail-section__container` 高度 | `height: 100%` | 已移除 |
| 桌面版 overflow | `overflow: hidden` | `overflow: visible` |
| 按鈕 display | `display: flex` | `display: flex !important` |
| 按鈕 z-index | 無 | `z-index: 10` |
| 按鈕 visibility | 無 | `visibility: visible !important` |
| 按鈕 opacity | 無 | `opacity: 1 !important` |

---

## 🎯 預期結果

修復後，按鈕應該：

✅ 在所有螢幕尺寸下可見（手機、平板、桌面）  
✅ 顯示在「送出」按鈕下方，與其他元素對齊  
✅ 綠色背景（#00C300），白色文字  
✅ Hover 時有互動效果（變深綠、上移、陰影）  
✅ 點擊時正常觸發 `sendLiffPromoMessage()` 函數  

---

## 📝 相關檔案

- `personalizedpage-omo.html` - 主頁面（已修復）
- `test-button-visibility.html` - 測試頁面
- `API_USAGE.md` - API 使用文檔
- `google-apps-script-send-flex-message.js` - Google Apps Script 源代碼

---

## 🆘 故障排除

### 問題 1：Vercel 部署後仍然看不到按鈕

**可能原因**：
- 瀏覽器緩存舊版本
- Vercel 部署的不是最新版本

**解決方式**：
1. 清除瀏覽器緩存（Ctrl+Shift+Delete）
2. 使用無痕模式測試
3. 在 Vercel Dashboard 確認部署版本
4. 檢查 Git commit 是否包含最新修改

### 問題 2：本地可見，Vercel 不可見

**可能原因**：
- 檔案未正確提交到 Git
- Vercel 部署配置問題

**解決方式**：
```bash
# 確認檔案狀態
git status

# 確認修改內容
git diff personalizedpage-omo.html

# 重新提交
git add personalizedpage-omo.html
git commit -m "修復按鈕顯示問題"
git push origin main
```

### 問題 3：按鈕位置錯誤

**可能原因**：
- CSS 衝突
- Flexbox 布局問題

**解決方式**：
- 檢查 `.mail-section__container` 的 `gap` 設定
- 確認按鈕的 `margin-top: 20px` 生效
- 使用開發者工具檢查 Flexbox 布局

---

## 📞 技術支援

如果問題仍然存在，請提供以下資訊：

1. 瀏覽器版本和作業系統
2. Vercel 部署 URL
3. 開發者工具 Console 的錯誤訊息（如有）
4. 開發者工具 Elements 面板的截圖（選中按鈕元素）
5. 計算後的樣式截圖（Computed 面板）

---

**修復日期**：2025-11-27  
**修復版本**：v1.0.0  
**測試狀態**：✅ 本地測試通過

