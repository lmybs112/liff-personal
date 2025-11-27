# LINE 優惠訊息發送失敗 - 調試指南

## 🔍 問題診斷步驟

當您點擊「取得最新優惠資訊」按鈕後看到「發送失敗」訊息時，請按照以下步驟診斷問題。

---

## 📱 步驟 1：開啟瀏覽器開發者工具

### 在 LINE App 中（推薦）

1. 在 LINE App 中開啟 LIFF 應用
2. iOS 用戶：
   - 在 Mac 上開啟 Safari → 開發 → [您的 iPhone] → 選擇頁面
3. Android 用戶：
   - 開啟 Chrome 開發者工具
   - 前往 `chrome://inspect`
   - 找到您的裝置並點擊 "Inspect"

### 在電腦瀏覽器中（測試用）

1. 按 **F12** 或 **Cmd+Option+I** (Mac)
2. 切換到 **Console** 面板

---

## 🔎 步驟 2：查看 Console 日誌

點擊按鈕後，Console 會顯示詳細的執行步驟：

```
🚀 開始發送優惠訊息...
1️⃣ 初始化 LIFF...
🔑 使用 LIFF ID: 2008576354-nwJ6w230
✅ LIFF 初始化成功
📱 LIFF SDK 版本: 2.x.x
🌐 執行環境: LINE App
🔐 登入狀態: 已登入
✅ 環境檢查通過
2️⃣ 檢查 LINE 環境...
✅ 環境檢查通過
3️⃣ 取得使用者資訊...
✅ 取得使用者 UID: U1234567890...
4️⃣ 取得優惠商品資料...
✅ 商品資料: [...]
5️⃣ 發送 Flex Message 到 Google Apps Script...
📡 API 端點: https://script.google.com/...
👤 User ID: U1234567890...
📦 請求內容: {...}
📨 回應狀態: 200 OK
📄 回應內容: {"success":true,...}
✅ Flex Message 發送成功
✅ 全部完成！
```

---

## ❌ 常見錯誤及解決方案

### 錯誤 1：LIFF 初始化失敗

**Console 顯示：**
```
❌ LIFF 初始化失敗: Error: Invalid LIFF ID
```

**可能原因：**
- LIFF ID 不正確或不存在
- LIFF App 未啟用

**解決方式：**

1. 前往 [LINE Developers Console](https://developers.line.biz/)
2. 選擇您的 Channel
3. 前往 **LIFF** 頁面
4. 確認 LIFF ID 為：`2008576354-nwJ6w230`
5. 確認 LIFF App 狀態為「已發布」

如果 LIFF ID 不正確，請更新 HTML 第 6646 行：

```javascript
let liffId = 'YOUR_CORRECT_LIFF_ID' // 替換為正確的 LIFF ID
```

---

### 錯誤 2：無法取得使用者資訊

**Console 顯示：**
```
❌ 發送優惠訊息失敗: Error: User profile not found
```

**可能原因：**
- 使用者未登入 LINE
- LIFF App 權限設定不正確

**解決方式：**

1. 確認在 LINE App 中開啟應用
2. 檢查 LIFF App 設定：
   - 前往 LINE Developers Console → LIFF
   - 確認 **Scopes** 包含：
     - ✅ `profile`（必須）
     - ✅ `openid`（必須）

---

### 錯誤 3：API 回應格式錯誤

**Console 顯示：**
```
❌ JSON 解析失敗
❌ API 回應格式錯誤: <!DOCTYPE html>...
```

**可能原因：**
- Google Apps Script 未正確部署
- API 端點 URL 錯誤
- Google Apps Script 返回 HTML 錯誤頁面

**解決方式：**

1. **測試 API 端點**：
   
   在瀏覽器中訪問：
   ```
   https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec
   ```
   
   應該看到 API 狀態頁面，而不是錯誤頁面。

2. **檢查 Google Apps Script 部署**：
   
   - 前往 [Google Apps Script](https://script.google.com/)
   - 開啟您的專案
   - 點擊「部署」→「管理部署」
   - 確認有一個「Web 應用程式」部署
   - 確認設定：
     - ✅ 執行身份：我
     - ✅ 存取權限：所有人

3. **重新部署**：
   
   - 點擊現有部署旁的「編輯」
   - 選擇「新版本」
   - 點擊「部署」
   - 複製新的 Web App URL（應該與舊的相同）

---

### 錯誤 4：LINE API 錯誤 400/401

**Console 顯示：**
```
❌ LINE API 錯誤: 400 - Bad Request
或
❌ LINE API 錯誤: 401 - Unauthorized
```

**可能原因：**
- LINE Channel Access Token 無效或過期
- Flex Message JSON 格式錯誤

**解決方式：**

1. **更新 Channel Access Token**：

   - 前往 [LINE Developers Console](https://developers.line.biz/)
   - 選擇您的 Messaging API Channel
   - 前往 **Messaging API** 頁面
   - 在「Channel access token」區塊點擊「Issue」或「Reissue」
   - 複製新的 Token

2. **更新 Google Apps Script**：

   開啟 `google-apps-script-send-flex-message.js`，更新第 13 行：
   
   ```javascript
   const LINE_CHANNEL_ACCESS_TOKEN = 'YOUR_NEW_TOKEN_HERE'
   ```

3. **重新部署** Google Apps Script（參考錯誤 3 的步驟）

---

### 錯誤 5：網路連線失敗

**Console 顯示：**
```
❌ 網路連線失敗，無法連接到 Google Apps Script API
❌ Failed to fetch
```

**可能原因：**
- 網路連線問題
- CORS 設定問題
- Google Apps Script 服務暫時無法使用

**解決方式：**

1. **檢查網路連線**：
   - 確認裝置有網路連線
   - 嘗試開啟其他網站測試

2. **測試 API 可用性**：
   
   在 Console 中執行：
   ```javascript
   fetch('https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec')
     .then(r => console.log('✅ API 可連接:', r.status))
     .catch(e => console.error('❌ API 無法連接:', e))
   ```

3. **檢查 CORS**：
   
   確認 Google Apps Script 的 `doGet` 函數包含正確的 CORS 設定：
   ```javascript
   return HtmlService.createHtmlOutput(html)
     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
   ```

---

## 🧪 手動測試 API

### 使用 REST Client（推薦）

開啟 `ts.rest` 檔案，找到 LINE Flex Message API 測試區塊：

```http
### 發送簡單文字訊息
POST https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec
Content-Type: application/json

{
  "userId": "YOUR_LINE_USER_ID",
  "messages": [
    {
      "type": "text",
      "text": "測試訊息：API 運作正常！"
    }
  ]
}
```

**步驟：**
1. 將 `YOUR_LINE_USER_ID` 替換為您的 LINE User ID
2. 點擊「Send Request」
3. 查看回應

**如何取得 LINE User ID？**

在 Console 中執行（需在 LIFF 環境中）：
```javascript
liff.init({ liffId: '2008576354-nwJ6w230' })
  .then(() => liff.getProfile())
  .then(profile => console.log('User ID:', profile.userId))
```

---

## 🔧 進階診斷

### 檢查完整的請求/回應

在 Console 中執行以下代碼，手動測試完整流程：

```javascript
// 1. 測試 LIFF 初始化
liff.init({ liffId: '2008576354-nwJ6w230' })
  .then(() => {
    console.log('✅ LIFF 初始化成功')
    return liff.getProfile()
  })
  .then(profile => {
    console.log('✅ 使用者資訊:', profile)
    
    // 2. 測試 API 請求
    const apiEndpoint = 'https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec'
    
    return fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: profile.userId,
        messages: [{
          type: 'text',
          text: '測試訊息'
        }]
      })
    })
  })
  .then(response => {
    console.log('✅ API 回應狀態:', response.status)
    return response.text()
  })
  .then(text => {
    console.log('✅ API 回應內容:', text)
    const result = JSON.parse(text)
    if (result.success) {
      console.log('🎉 測試成功！')
    } else {
      console.error('❌ API 回應失敗:', result.error)
    }
  })
  .catch(error => {
    console.error('❌ 測試失敗:', error)
  })
```

---

## 📞 仍然無法解決？

如果以上步驟都無法解決問題，請提供以下資訊：

### 需要的資訊清單

1. **完整的 Console 日誌**
   - 從點擊按鈕開始，到錯誤發生的完整日誌
   - 截圖或複製文字

2. **環境資訊**
   - 裝置：iOS/Android/電腦
   - 瀏覽器：LINE App/Safari/Chrome
   - 是否在 LINE App 中開啟

3. **API 測試結果**
   - 直接訪問 API 端點的結果（截圖）
   - 手動測試 API 的回應

4. **LIFF 設定**
   - LIFF ID
   - LIFF App 設定截圖（Scopes、Endpoint URL 等）

5. **Google Apps Script 設定**
   - 部署設定截圖
   - 執行日誌（如有錯誤）

---

## 💡 快速檢查清單

在開始調試前，請確認以下項目：

- [ ] LIFF ID 正確：`2008576354-nwJ6w230`
- [ ] LIFF App 已啟用並發布
- [ ] LIFF Scopes 包含 `profile` 和 `openid`
- [ ] Google Apps Script 已正確部署
- [ ] Google Apps Script URL 正確
- [ ] LINE Channel Access Token 有效
- [ ] 在 LINE App 中開啟應用（或外部瀏覽器測試）
- [ ] 網路連線正常
- [ ] 開啟開發者工具查看 Console

---

**最後更新**：2025-11-27  
**版本**：1.0.0

