/**
 * Google Apps Script - 發送 LINE Flex Message
 * 
 * 設定步驟：
 * 1. 在 Google Drive 建立新的 Google Apps Script 專案
 * 2. 將此代碼貼上
 * 3. 設定 LINE Channel Access Token（在 doPost 函數中）
 * 4. 部署為 Web App（執行身份：我，存取權限：所有人）
 * 5. 複製 Web App URL 並更新到 HTML 中的 apiEndpoint
 */

// LINE Channel Access Token（從 LINE Developers Console 取得）
const LINE_CHANNEL_ACCESS_TOKEN = 'Ap+xcQlxxawtxp8hE8kSNMH0gQKIkfESInlPjHgKTBLzbcXzdrcF5jzqtBkdEUeZD/F7RrkasjnX/4mBfmgmp5ke1pnRkMZ9BgqDlOrBOzqUw6oL42l25ujcHxvVMYdoHZOvY+JCOafMoLiXBm955gdB04t89/1O/w1cDnyilFU=';

/**
 * 處理 GET 請求 - 顯示 API 狀態頁面
 * @param {Object} e - 事件物件
 * @return {Object} HTML 輸出
 */
function doGet(e) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LINE Flex Message API</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 16px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .header__icon {
            font-size: 48px;
            margin-bottom: 10px;
          }
          .header__title {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
          }
          .header__status {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
          }
          .section {
            margin-bottom: 30px;
          }
          .section__title {
            font-size: 18px;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
            display: flex;
            align-items: center;
          }
          .section__title-icon {
            margin-right: 8px;
          }
          .section__content {
            background: #f9fafb;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #667eea;
          }
          .info-item {
            margin-bottom: 12px;
          }
          .info-item:last-child {
            margin-bottom: 0;
          }
          .info-item__label {
            font-weight: 600;
            color: #666;
            font-size: 14px;
            margin-bottom: 4px;
          }
          .info-item__value {
            color: #333;
            font-size: 14px;
            line-height: 1.6;
          }
          .code {
            background: #1f2937;
            color: #10b981;
            padding: 15px;
            border-radius: 6px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 13px;
            overflow-x: auto;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
          }
          @media (max-width: 640px) {
            .container {
              padding: 30px 20px;
            }
            .header__title {
              font-size: 24px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header__icon">🚀</div>
            <h1 class="header__title">LINE Flex Message API</h1>
            <span class="header__status">✓ 運行中</span>
          </div>

          <div class="section">
            <h2 class="section__title">
              <span class="section__title-icon">📋</span>
              API 資訊
            </h2>
            <div class="section__content">
              <div class="info-item">
                <div class="info-item__label">端點 (Endpoint)</div>
                <div class="info-item__value">POST 請求到此 URL</div>
              </div>
              <div class="info-item">
                <div class="info-item__label">功能</div>
                <div class="info-item__value">發送 LINE Flex Message 到指定使用者</div>
              </div>
              <div class="info-item">
                <div class="info-item__label">內容類型</div>
                <div class="info-item__value">application/json</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section__title">
              <span class="section__title-icon">📝</span>
              請求格式
            </h2>
            <div class="section__content">
              <div class="info-item__label">請求主體 (Request Body)</div>
              <div class="code">{
  "userId": "LINE_USER_ID",
  "messages": [
    {
      "type": "flex",
      "altText": "優惠券訊息",
      "contents": { ... }
    }
  ]
}</div>
            </div>
          </div>

          <div class="section">
            <h2 class="section__title">
              <span class="section__title-icon">✅</span>
              回應格式
            </h2>
            <div class="section__content">
              <div class="info-item">
                <div class="info-item__label">成功回應</div>
                <div class="code">{ "success": true, "result": { ... } }</div>
              </div>
              <div class="info-item" style="margin-top: 15px;">
                <div class="info-item__label">錯誤回應</div>
                <div class="code">{ "success": false, "error": "錯誤訊息" }</div>
              </div>
            </div>
          </div>

          <div class="footer">
            <p>🔒 此 API 已啟用並準備接收請求</p>
            <p style="margin-top: 8px; font-size: 12px; color: #999;">
              部署時間: ${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html)
    .setTitle('LINE Flex Message API')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 處理 POST 請求
 * @param {Object} e - 事件物件
 * @return {Object} 回應物件
 */
function doPost(e) {
  try {
    // 解析請求內容
    const requestData = JSON.parse(e.postData.contents);
    const userId = requestData.userId;
    const messages = requestData.messages;

    // 驗證必要參數
    if (!userId || !messages || !Array.isArray(messages)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: '缺少必要參數：userId 或 messages'
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 發送訊息到 LINE
    const result = sendPushMessage(userId, messages);

    // 返回成功回應
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        result: result
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 錯誤處理
    Logger.log('錯誤: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 發送 Push Message 到指定使用者
 * @param {string} userId - LINE 使用者 ID
 * @param {Array} messages - 訊息陣列
 * @return {Object} API 回應
 */
function sendPushMessage(userId, messages) {
  const url = 'https://api.line.me/v2/bot/message/push';

  const payload = {
    to: userId,
    messages: messages
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
    },
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    if (responseCode === 200) {
      Logger.log('訊息發送成功');
      return JSON.parse(responseText);
    } else {
      Logger.log('訊息發送失敗: ' + responseCode + ' - ' + responseText);
      throw new Error('LINE API 錯誤: ' + responseCode + ' - ' + responseText);
    }
  } catch (error) {
    Logger.log('發送訊息時發生錯誤: ' + error.toString());
    throw error;
  }
}

/**
 * 測試函數（可選，用於測試）
 */
function testSendMessage() {
  const testUserId = 'YOUR_TEST_USER_ID';
  const testMessage = {
    type: 'text',
    text: '這是一則測試訊息'
  };

  try {
    const result = sendPushMessage(testUserId, [testMessage]);
    Logger.log('測試成功: ' + JSON.stringify(result));
  } catch (error) {
    Logger.log('測試失敗: ' + error.toString());
  }
}

