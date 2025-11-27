# LINE Flex Message API 使用說明

## 📍 API 端點

```
https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec
```

## 🔍 查看 API 狀態

在瀏覽器中訪問上述 URL，可以看到 API 狀態頁面和使用說明。

---

## 📤 發送 Flex Message

### 請求方式

**POST** 請求到 API 端點

### 請求標頭 (Headers)

```http
Content-Type: application/json
```

### 請求主體 (Request Body)

```json
{
  "userId": "LINE_USER_ID",
  "messages": [
    {
      "type": "flex",
      "altText": "優惠券訊息",
      "contents": {
        // Flex Message JSON 內容
      }
    }
  ]
}
```

### 參數說明

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `userId` | String | ✅ | LINE 使用者 ID |
| `messages` | Array | ✅ | 訊息陣列（支援多則訊息） |

---

## 📥 回應格式

### 成功回應

```json
{
  "success": true,
  "result": {
    // LINE API 回應內容
  }
}
```

### 錯誤回應

```json
{
  "success": false,
  "error": "錯誤訊息描述"
}
```

---

## 🧪 測試範例

### 使用 JavaScript (Fetch API)

```javascript
// 發送 Flex Message
async function sendFlexMessage(userId, flexMessageContent) {
  const apiEndpoint = 'https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec'
  
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        messages: [
          {
            type: 'flex',
            altText: '優惠券訊息',
            contents: flexMessageContent
          }
        ]
      })
    })

    const responseText = await response.text()
    const result = JSON.parse(responseText)

    if (result.success) {
      console.log('✅ 發送成功:', result)
      return result
    } else {
      console.error('❌ 發送失敗:', result.error)
      throw new Error(result.error)
    }
  } catch (error) {
    console.error('❌ 發生錯誤:', error)
    throw error
  }
}

// 使用範例
const userId = 'U1234567890abcdef'  // 替換為實際的 LINE User ID
const flexContent = {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '測試訊息',
        weight: 'bold',
        size: 'xl'
      }
    ]
  }
}

sendFlexMessage(userId, flexContent)
```

### 使用 cURL 測試

```bash
curl -X POST \
  'https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "U1234567890abcdef",
    "messages": [
      {
        "type": "text",
        "text": "測試訊息"
      }
    ]
  }'
```

### 使用 REST Client 測試

參考 `ts.rest` 檔案中的測試範例。

---

## 🔧 在 HTML 中使用

您的專案已經整合了此 API，在 `personalizedpage-omo.html` 中的 `sendFlexMessage()` 函數會自動調用此 API。

### 使用方式

```javascript
// 在您的 LIFF 應用中
const userId = liff.getContext().userId
const products = [
  {
    name: '商品名稱',
    image: 'https://example.com/image.jpg',
    url: 'https://example.com/product'
  }
]

// 發送 Flex Message
await sendFlexMessage(userId, products)
```

---

## ⚠️ 注意事項

1. **LINE User ID 格式**：必須是有效的 LINE User ID（以 `U` 開頭）
2. **Flex Message 格式**：必須符合 [LINE Flex Message 規範](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
3. **訊息數量限制**：單次請求最多可發送 5 則訊息
4. **API 配額**：Google Apps Script 有每日執行次數限制（免費帳號約 20,000 次/天）
5. **CORS 限制**：此 API 支援跨域請求（CORS），可從任何網域調用

---

## 🐛 常見錯誤處理

### 錯誤：`缺少必要參數：userId 或 messages`

**原因**：請求主體缺少 `userId` 或 `messages` 欄位

**解決方式**：確保請求包含完整的參數

### 錯誤：`LINE API 錯誤: 400 - Bad Request`

**原因**：Flex Message JSON 格式錯誤

**解決方式**：使用 [LINE Flex Message Simulator](https://developers.line.biz/flex-simulator/) 驗證您的 JSON 格式

### 錯誤：`LINE API 錯誤: 401 - Unauthorized`

**原因**：LINE Channel Access Token 無效或過期

**解決方式**：在 Google Apps Script 中更新 `LINE_CHANNEL_ACCESS_TOKEN`

### 錯誤：`回應格式錯誤`

**原因**：Google Apps Script 返回的不是 JSON 格式

**解決方式**：檢查 Google Apps Script 的部署狀態，確保已正確部署

---

## 📊 監控與日誌

### 查看執行日誌

1. 開啟 [Google Apps Script 專案](https://script.google.com/)
2. 點擊左側選單的「執行」
3. 查看執行記錄和錯誤訊息

### 查看配額使用情況

1. 在 Google Apps Script 中點擊左側選單的「專案設定」
2. 查看「配額」區塊，監控每日執行次數

---

## 🔐 安全性建議

1. **保護 Channel Access Token**：不要在前端代碼中暴露 Token（已在 Google Apps Script 中安全存儲）
2. **驗證使用者身份**：建議在發送前驗證 LIFF 登入狀態
3. **限制請求頻率**：考慮添加請求節流（throttling）機制，避免濫用
4. **監控異常請求**：定期檢查 Google Apps Script 執行日誌

---

## 📚 相關文件

- [LINE Messaging API 文檔](https://developers.line.biz/en/docs/messaging-api/)
- [Flex Message 設計指南](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
- [Google Apps Script 文檔](https://developers.google.com/apps-script)
- [LIFF 文檔](https://developers.line.biz/en/docs/liff/)

---

## 🆘 支援

如遇到問題，請檢查：

1. ✅ API 狀態頁面是否正常顯示
2. ✅ Google Apps Script 執行日誌中的錯誤訊息
3. ✅ 瀏覽器開發者工具的 Network 面板
4. ✅ LINE Developers Console 中的 Channel Access Token 是否有效

---

**最後更新**：2025-11-27  
**API 版本**：1.0.0

