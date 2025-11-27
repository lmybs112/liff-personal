# API 測試指南

## 🎯 目的

在 LIFF 應用中測試之前，先用 REST Client 確認 Google Apps Script API 是否正常運作。

---

## 📋 準備工作

### 1. 安裝 VS Code 擴充套件

在 VS Code 中安裝 **REST Client** 擴充套件：

1. 按 `Cmd+Shift+X` (Mac) 或 `Ctrl+Shift+X` (Windows)
2. 搜尋 "REST Client"
3. 安裝 **Huachao Mao** 開發的 REST Client

### 2. 取得您的 LINE User ID

#### **方法 A：使用 LIFF 應用（推薦）**

1. 在 LINE 中開啟您的 LIFF 應用
2. 點擊綠色按鈕「取得最新優惠資訊」
3. 如果看到錯誤訊息，裡面會包含您的 User ID
4. 或者在電腦瀏覽器中開啟 LIFF URL，按 F12 開啟 Console，執行：

```javascript
liff.init({ liffId: '2008576354-nwJ6w230' })
  .then(() => liff.getProfile())
  .then(profile => {
    console.log('User ID:', profile.userId)
    console.log('名稱:', profile.displayName)
  })
```

5. 複製顯示的 User ID（格式：`U1234567890abcdef...`）

#### **方法 B：使用 LINE Developers Console**

1. 前往 [LINE Developers Console](https://developers.line.biz/console/)
2. 選擇您的 Channel
3. 前往 **Messaging API** 頁面
4. 找到 **Your user ID** 區塊
5. 複製顯示的 User ID

---

## 🧪 開始測試

### 步驟 1：開啟測試檔案

在 VS Code 中開啟 `test-line-api.rest`

### 步驟 2：替換 User ID

在檔案中搜尋 `YOUR_LINE_USER_ID`，全部替換為您的實際 User ID。

快捷鍵：
- Mac: `Cmd+F` → 輸入 `YOUR_LINE_USER_ID` → 全部替換
- Windows: `Ctrl+F` → 輸入 `YOUR_LINE_USER_ID` → 全部替換

### 步驟 3：執行測試

#### **測試 1：檢查 API 狀態（必做）**

找到第一個測試：
```http
### 測試 1：檢查 API 狀態（GET 請求）
GET https://script.google.com/...
```

點擊上方出現的 **「Send Request」** 連結。

**預期結果**：
```
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
  <head>
    <title>LINE Flex Message API</title>
    ...
```

✅ **成功**：看到 HTML 頁面內容，包含 "LINE Flex Message API"
❌ **失敗**：看到錯誤訊息，表示 Google Apps Script 部署有問題

---

#### **測試 2：發送簡單文字訊息（必做）**

找到第二個測試：
```http
### 測試 2：發送簡單文字訊息
POST https://script.google.com/...
```

**確認已替換 User ID**，然後點擊 **「Send Request」**。

**預期結果**：
```json
HTTP/1.1 200 OK

{
  "success": true,
  "result": {}
}
```

✅ **成功**：
- 回應顯示 `"success": true`
- **您的 LINE 收到測試訊息**

❌ **失敗**：
- 回應顯示 `"success": false`
- 查看 `error` 欄位了解原因

---

#### **測試 3：發送 Flex Message**

如果測試 2 成功，繼續測試 3：
```http
### 測試 3：發送簡單的 Flex Message
POST https://script.google.com/...
```

點擊 **「Send Request」**。

**預期結果**：
- LINE 收到一張精美的商品卡片
- 包含圖片、商品名稱、價格和按鈕

---

## ✅ 測試結果判讀

### 情況 A：所有測試都成功 ✅

**表示**：API 完全正常，問題在 LIFF 應用本身

**下一步**：
1. 檢查 LIFF Scopes 設定（需包含 `profile` 和 `openid`）
2. 在 LINE 中清除授權並重新授權
3. 重新測試 LIFF 應用

---

### 情況 B：測試 1 失敗 ❌

**表示**：Google Apps Script 部署有問題

**錯誤範例**：
```
HTTP/1.1 404 Not Found
或
Script function not found: doGet
```

**解決方式**：

1. 前往 [Google Apps Script](https://script.google.com/)
2. 開啟您的專案
3. 確認代碼包含 `doGet` 和 `doPost` 函數
4. 點擊「部署」→「管理部署」
5. 編輯現有部署 → 選擇「新版本」→ 部署
6. 確認設定：
   - 執行身份：**我**
   - 存取權限：**所有人**
7. 重新測試

---

### 情況 C：測試 1 成功，測試 2 失敗（缺少參數）❌

**錯誤訊息**：
```json
{
  "success": false,
  "error": "缺少必要參數：userId 或 messages"
}
```

**原因**：沒有替換 `YOUR_LINE_USER_ID`

**解決方式**：
1. 確認已將所有 `YOUR_LINE_USER_ID` 替換為實際 User ID
2. User ID 格式應為：`U` 開頭 + 32 個字元（例如：`U1234567890abcdef1234567890abcdef`）
3. 重新測試

---

### 情況 D：測試 1 成功，測試 2 失敗（LINE API 錯誤）❌

**錯誤訊息**：
```json
{
  "success": false,
  "error": "LINE API 錯誤: 401 - {\"message\":\"Authentication failed\"}"
}
```

**原因**：LINE Channel Access Token 無效或過期

**解決方式**：

1. 前往 [LINE Developers Console](https://developers.line.biz/console/)
2. 選擇您的 Messaging API Channel
3. 前往 **Messaging API** 頁面
4. 找到 **Channel access token** 區塊
5. 點擊 **「Reissue」** 重新簽發 Token
6. 複製新的 Token
7. 開啟 `google-apps-script-send-flex-message.js`
8. 更新第 13 行：
   ```javascript
   const LINE_CHANNEL_ACCESS_TOKEN = '您的新Token'
   ```
9. 在 Google Apps Script 中貼上更新的代碼
10. 重新部署（新版本）
11. 重新測試

---

### 情況 E：測試 1 成功，測試 2 失敗（無效的 User ID）❌

**錯誤訊息**：
```json
{
  "success": false,
  "error": "LINE API 錯誤: 400 - Invalid user ID"
}
```

**原因**：User ID 格式錯誤或不存在

**解決方式**：
1. 確認 User ID 格式正確（`U` 開頭 + 32 個字元）
2. 確認這個 User ID 有加您的 LINE Bot 為好友
3. 嘗試使用不同方法取得 User ID（參考上方「取得 LINE User ID」）

---

## 📊 測試檢查清單

測試前確認：

- [ ] 已安裝 REST Client 擴充套件
- [ ] 已取得 LINE User ID
- [ ] 已在 `test-line-api.rest` 中替換所有 `YOUR_LINE_USER_ID`
- [ ] Google Apps Script 已正確部署
- [ ] LINE Channel Access Token 有效

測試步驟：

- [ ] ✅ 測試 1：GET 請求返回 HTML 頁面
- [ ] ✅ 測試 2：文字訊息發送成功，LINE 收到訊息
- [ ] ✅ 測試 3：Flex Message 發送成功，LINE 收到卡片
- [ ] ✅ 測試 4：輪播訊息發送成功，LINE 收到多張卡片
- [ ] ❌ 測試 5：正確返回錯誤（缺少 userId）
- [ ] ❌ 測試 6：正確返回錯誤（無效 userId）

---

## 🎉 全部測試通過後

如果所有測試都成功，但 LIFF 應用仍然失敗，問題在於：

### **LIFF 設定問題**

1. **檢查 LIFF Scopes**
   - 前往 LINE Developers Console → LIFF
   - 確認 Scopes 包含：`profile`, `openid`
   - 點擊「Update」儲存

2. **清除舊授權**
   - LINE App → 設定 → 隱私設定 → 已授權的應用程式
   - 移除您的 LIFF App
   - 重新開啟並授權

3. **測試 LIFF**
   - 在 LINE 中重新開啟 LIFF 應用
   - 點擊「取得最新優惠資訊」
   - 應該成功了！

---

## 💡 快速診斷流程圖

```
開始測試
  │
  ├─ 測試 1 (GET) 成功？
  │   ├─ ❌ → 重新部署 Google Apps Script
  │   └─ ✅ → 繼續
  │
  ├─ 測試 2 (文字) 成功？
  │   ├─ ❌ → 檢查錯誤訊息
  │   │         ├─ 缺少參數 → 替換 User ID
  │   │         ├─ 401 錯誤 → 更新 Channel Access Token
  │   │         └─ 400 錯誤 → 檢查 User ID 格式
  │   └─ ✅ → 繼續
  │
  ├─ 測試 3 (Flex) 成功？
  │   ├─ ❌ → 檢查 Flex Message JSON 格式
  │   └─ ✅ → API 完全正常！
  │
  └─ 如果 API 正常但 LIFF 失敗
      └─ 檢查 LIFF Scopes 和授權狀態
```

---

## 📞 需要協助？

如果測試失敗，請提供：

1. **哪個測試失敗了？**（測試 1, 2, 3...）
2. **完整的錯誤訊息**（包含 HTTP 狀態碼和回應內容）
3. **您的 User ID 格式**（前幾個字元即可，如 `U12345...`）
4. **Google Apps Script 部署狀態**（截圖）

---

**祝測試順利！** 🚀

