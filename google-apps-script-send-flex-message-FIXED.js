/**
 * Google Apps Script - 發送 LINE Flex Message (修正 CORS 版本)
 * 
 * 修正內容：
 * - ✅ 添加 CORS 支援
 * - ✅ 處理 OPTIONS preflight 請求
 * - ✅ 在所有回應中添加 CORS headers
 * 
 * 設定步驟：
 * 1. 複製此代碼到您的 Google Apps Script 專案（替換舊代碼）
 * 2. 更新 LINE_CHANNEL_ACCESS_TOKEN
 * 3. 重新部署為 Web App（選擇「新版本」）
 * 4. 測試
 */

// LINE Channel Access Token（從 LINE Developers Console 取得）
const LINE_CHANNEL_ACCESS_TOKEN = 'YOUR_CHANNEL_ACCESS_TOKEN_HERE';

/**
 * 處理 OPTIONS 請求 (CORS Preflight)
 * 這是修正 CORS 問題的關鍵！
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

/**
 * 處理 GET 請求 - 顯示 API 狀態頁面
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
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          .header { text-align: center; margin-bottom: 30px; }
          .status { background: #10b981; color: white; padding: 6px 16px; border-radius: 20px; display: inline-block; }
          .success { color: #10b981; font-weight: bold; }
          .code {
            background: #1f2937;
            color: #10b981;
            padding: 15px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 13px;
            overflow-x: auto;
            margin: 10px 0;
          }
          .section { margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 LINE Flex Message API</h1>
            <div class="status">✓ 運行中</div>
          </div>
          
          <div class="section">
            <h3>✅ CORS 已啟用</h3>
            <p>此 API 支援跨域請求，可從任何網域調用。</p>
          </div>

          <div class="section">
            <h3>📋 API 資訊</h3>
            <p><strong>端點：</strong> POST 請求到此 URL</p>
            <p><strong>功能：</strong> 發送 LINE Flex Message</p>
            <p><strong>CORS：</strong> <span class="success">✓ 已啟用</span></p>
          </div>

          <div class="section">
            <h3>📝 請求格式</h3>
            <div class="code">{
  "userId": "LINE_USER_ID",
  "messages": [{
    "type": "flex",
    "altText": "訊息",
    "contents": {...}
  }]
}</div>
          </div>

          <div class="section">
            <h3>✅ 回應格式</h3>
            <p>成功：<span class="code">{"success": true, "result": {...}}</span></p>
            <p>失敗：<span class="code">{"success": false, "error": "..."}</span></p>
          </div>

          <p style="text-align: center; color: #666; margin-top: 30px;">
            部署時間：${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
          </p>
        </div>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html)
    .setTitle('LINE Flex Message API')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 處理 POST 請求 (已修正 CORS)
 */
function doPost(e) {
  try {
    // 記錄請求
    Logger.log('收到 POST 請求');
    Logger.log('請求來源: ' + (e.parameter.source || '未知'));
    
    // 解析請求內容
    const requestData = JSON.parse(e.postData.contents);
    const userId = requestData.userId;
    const messages = requestData.messages;

    Logger.log('User ID: ' + userId);
    Logger.log('訊息數量: ' + (messages ? messages.length : 0));

    // 驗證必要參數
    if (!userId || !messages || !Array.isArray(messages)) {
      Logger.log('錯誤：缺少必要參數');
      return createCorsResponse({
        success: false,
        error: '缺少必要參數：userId 或 messages'
      });
    }

    // 發送訊息到 LINE
    const result = sendPushMessage(userId, messages);

    Logger.log('發送成功');
    
    // 返回成功回應 (包含 CORS headers)
    return createCorsResponse({
      success: true,
      result: result
    });

  } catch (error) {
    // 錯誤處理
    Logger.log('錯誤: ' + error.toString());
    return createCorsResponse({
      success: false,
      error: error.toString()
    });
  }
}

/**
 * 創建包含 CORS headers 的回應
 * 這是修正 CORS 問題的關鍵函數！
 */
function createCorsResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

/**
 * 發送 Push Message 到指定使用者
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
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    Logger.log('LINE API 回應碼: ' + responseCode);
    Logger.log('LINE API 回應: ' + responseText);

    if (responseCode === 200) {
      Logger.log('訊息發送成功');
      return { status: 'success', code: responseCode };
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
 * 測試函數（可選）
 */
function testSendMessage() {
  const testUserId = 'YOUR_TEST_USER_ID';
  const testMessage = {
    type: 'text',
    text: '這是一則測試訊息 - ' + new Date().toLocaleString('zh-TW')
  };

  try {
    const result = sendPushMessage(testUserId, [testMessage]);
    Logger.log('測試成功: ' + JSON.stringify(result));
  } catch (error) {
    Logger.log('測試失敗: ' + error.toString());
  }
}

