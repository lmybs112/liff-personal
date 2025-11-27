# Google Apps Script 設定指南

## 📋 設定步驟

### 1. 建立 Google Apps Script 專案

1. 前往 [Google Apps Script](https://script.google.com/)
2. 點擊「新增專案」
3. 將專案命名為「LINE Flex Message Sender」或您喜歡的名稱

### 2. 貼上代碼

1. 打開 `google-apps-script-send-flex-message.js` 檔案
2. 複製所有代碼
3. 貼到 Google Apps Script 編輯器中
4. 刪除預設的 `myFunction` 函數

### 3. 設定 LINE Channel Access Token

1. 前往 [LINE Developers Console](https://developers.line.biz/console/)
2. 選擇您的 Provider 和 Channel
3. 進入「Messaging API」頁籤
4. 找到「Channel access token」
5. 點擊「Issue」或「Reissue」取得 Token
6. 複製 Token
7. 在 Google Apps Script 中，將 `LINE_CHANNEL_ACCESS_TOKEN` 變數的值替換為您的 Token：

```javascript
const LINE_CHANNEL_ACCESS_TOKEN = '您的_CHANNEL_ACCESS_TOKEN';
```

### 4. 部署為 Web App

1. 在 Google Apps Script 編輯器中，點擊右上角的「部署」→「新增部署作業」
2. 點擊「選取類型」旁邊的齒輪圖示，選擇「Web 應用程式」
3. 設定以下選項：
   - **說明**：LINE Flex Message Sender（可選）
   - **執行身份**：我
   - **具有存取權的使用者**：所有人
4. 點擊「部署」
5. 複製「Web 應用程式 URL」
6. 將此 URL 更新到 `personalizedpage-omo.html` 中的 `apiEndpoint` 變數

### 5. 更新 HTML 中的 API 端點

在 `personalizedpage-omo.html` 中找到以下代碼：

```javascript
const apiEndpoint = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
```

將 `YOUR_SCRIPT_ID` 替換為您從步驟 4 複製的完整 URL。

## 🔒 安全性注意事項

### 保護 Channel Access Token

- **不要**將 Token 直接寫在 HTML 檔案中
- Google Apps Script 會保護您的代碼，但建議定期更新 Token
- 如果 Token 洩露，請立即在 LINE Developers Console 中重新發行

### 限制存取（進階）

如果您想限制只有特定網域可以呼叫此 API，可以在 `doPost` 函數開頭添加：

```javascript
function doPost(e) {
  // 檢查來源（可選）
  const origin = e.parameter.origin || '';
  const allowedOrigins = ['https://yourdomain.com', 'https://www.yourdomain.com'];
  
  // 注意：Google Apps Script 的 doPost 無法直接取得 Origin header
  // 如需更嚴格的驗證，建議使用其他後端服務
  
  // ... 其餘代碼
}
```

## 🧪 測試

### 方法 1：使用測試函數

1. 在 Google Apps Script 編輯器中，找到 `testSendMessage` 函數
2. 將 `YOUR_TEST_USER_ID` 替換為您的 LINE 使用者 ID（可從 LIFF 取得）
3. 點擊「執行」按鈕
4. 首次執行需要授權，點擊「檢閱權限」並允許

### 方法 2：直接從網頁測試

1. 確保已設定好 LIFF App ID
2. 在 LINE 中打開您的 LIFF 應用程式
3. 點擊「取得最新優惠資訊」按鈕
4. 檢查 Google Apps Script 的「執行記錄」查看是否有錯誤

## 📝 日誌查看

1. 在 Google Apps Script 編輯器中，點擊左側的「執行記錄」
2. 查看每次 API 呼叫的日誌
3. 如有錯誤，日誌會顯示詳細資訊

## 🔧 疑難排解

### 錯誤：401 Unauthorized
- 檢查 Channel Access Token 是否正確
- 確認 Token 是否過期（需要重新發行）

### 錯誤：400 Bad Request
- 檢查 Flex Message JSON 格式是否正確
- 確認 userId 是否有效

### 錯誤：403 Forbidden
- 確認 Web App 的存取權限設為「所有人」
- 檢查部署設定是否正確

### 無法接收訊息
- 確認使用者已加入您的 LINE 官方帳號
- 檢查 Messaging API 是否已啟用
- 確認 Channel 的設定是否正確

## 📚 參考資源

- [LINE Messaging API 文件](https://developers.line.biz/en/docs/messaging-api/)
- [LINE Flex Message 文件](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
- [Google Apps Script 文件](https://developers.google.com/apps-script)

