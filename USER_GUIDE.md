# LINE 優惠訊息功能 - 使用指南

## 🎯 功能說明

點擊「取得最新優惠資訊」按鈕，系統會自動發送包含優惠商品的 Flex Message 到您的 LINE。

---

## 📱 使用方法

### **超級簡單！只需 1 步：**

1. 在 LINE 中開啟 LIFF 應用
2. 點擊綠色按鈕「取得最新優惠資訊」
3. 等待 2-3 秒
4. 完成！檢查 LINE 是否收到訊息

**就這麼簡單！不需要任何額外步驟。**

---

## ⚙️ 首次使用設定（僅需一次）

### **步驟 1：設定 LIFF App Scopes**

首次部署時需要設定權限：

1. 前往 [LINE Developers Console](https://developers.line.biz/console/)
2. 選擇您的 Channel → 點擊 **「LIFF」**
3. 編輯 LIFF App，勾選以下 Scopes：
   ```
   ✅ profile
   ✅ openid
   ```
4. 點擊 **「Update」** 儲存

### **步驟 2：部署 Google Apps Script**

1. 確認 Google Apps Script 已正確部署為 Web App
2. 執行身份：**我**
3. 存取權限：**所有人**
4. 複製 Web App URL

### **步驟 3：更新 LINE Channel Access Token**

在 Google Apps Script 中設定有效的 Channel Access Token（參考 `google-apps-script-send-flex-message.js`）

**完成！現在可以正常使用了。**

---

## ❌ 常見問題排除

### **問題 1：點擊按鈕後顯示「網路連線失敗」**

**可能原因**：
- 網路不穩定
- Google Apps Script API 無法訪問
- API 部署有問題

**解決方式**：

#### **A. 測試網路連線**
在瀏覽器中訪問：
```
https://script.google.com/macros/s/AKfycbyO2HmHaQu_vcRiemSbWlJ0ZvH2OnLizJoMu3lhTRyrcTasvuMAj1w5cd0ucL2RLyDSFw/exec
```

應該看到 API 狀態頁面（不是錯誤頁面）。

#### **B. 檢查 Google Apps Script 部署**
1. 前往 [Google Apps Script](https://script.google.com/)
2. 開啟專案 → 「部署」→「管理部署」
3. 確認有「Web 應用程式」部署
4. 如果沒有或有錯誤，點擊「新增部署」重新部署

#### **C. 檢查網路設定**
- 確認裝置有網路連線
- 嘗試切換 WiFi/4G
- 關閉 VPN（如有）

---

### **問題 2：顯示「權限不足」或「permission not in scope」**

**原因**：LIFF App 缺少必要的權限

**解決方式**：

1. 前往 LINE Developers Console
2. LIFF → 編輯您的 LIFF App
3. 確認 Scopes 包含：
   - ✅ `profile`
   - ✅ `openid`
4. 點擊「Update」儲存
5. 在 LINE 中：設定 → 隱私設定 → 已授權的應用程式 → 移除您的 LIFF App
6. 重新開啟 LIFF App 並同意授權

---

### **問題 3：按鈕顯示「發送中...」但一直沒反應**

**原因**：API 請求超時（超過 15 秒）

**解決方式**：
- 檢查網路速度
- 確認 Google Apps Script 是否正常運作
- 嘗試重新部署 Google Apps Script

---

### **問題 4：LINE 沒有收到訊息，但沒有顯示錯誤**

**可能原因**：
- LINE Channel Access Token 無效
- User ID 不正確
- Flex Message 格式錯誤

**解決方式**：

#### **A. 更新 Channel Access Token**
1. 前往 LINE Developers Console
2. Messaging API → 重新簽發 Channel Access Token
3. 更新到 Google Apps Script（第 13 行）
4. 重新部署 Google Apps Script

#### **B. 檢查 Google Apps Script 日誌**
1. 開啟 Google Apps Script 專案
2. 點擊左側「執行」查看日誌
3. 查看是否有錯誤訊息

---

### **問題 5：顯示「LIFF 初始化失敗」**

**原因**：LIFF ID 不正確或 LIFF App 未啟用

**解決方式**：
1. 檢查 HTML 中的 LIFF ID（第 6646 行）
2. 確認與 LINE Developers Console 中的 LIFF ID 一致
3. 確認 LIFF App 狀態為「已發布」

---

## 🔍 如何在 LINE 中查看錯誤訊息

### **方法 1：使用遠端調試（iOS）**

1. iPhone 連接到 Mac
2. iPhone 上開啟 LIFF App（在 LINE 中）
3. Mac 上開啟 Safari → 開發 → [您的 iPhone] → 選擇頁面
4. 可以看到 Console 日誌

### **方法 2：使用遠端調試（Android）**

1. Android 裝置開啟開發者選項和 USB 調試
2. 連接到電腦
3. 電腦上開啟 Chrome → 前往 `chrome://inspect`
4. 找到您的裝置和頁面
5. 點擊「Inspect」查看 Console

### **方法 3：查看彈窗訊息（最簡單）**

系統會在錯誤時顯示彈窗訊息，包含：
- 錯誤類型
- 可能原因
- 建議解決方式

---

## 📊 按鈕狀態說明

### **正常狀態**
```
[ 取得最新優惠資訊 ]
```
綠色按鈕，可點擊

### **發送中**
```
[ 發送中... ]
```
按鈕變暗，顯示載入動畫，無法點擊

### **發送成功**
```
✅ 訊息已發送！

請查看您的 LINE 聊天室
```
顯示成功訊息，按鈕恢復正常

### **發送失敗**
```
❌ [錯誤類型]

[詳細說明和解決建議]
```
顯示錯誤訊息，按鈕恢復正常，可以重試

---

## ✅ 成功標誌

功能正常運作時，您會看到：

1. ✅ 點擊按鈕
2. ✅ 按鈕變成「發送中...」（2-3 秒）
3. ✅ 顯示「✅ 訊息已發送！」
4. ✅ LINE 收到包含商品圖片、價格的精美訊息
5. ✅ 按鈕恢復成「取得最新優惠資訊」

---

## 🛠️ 技術支援檢查清單

如果以上方法都無法解決，請提供以下資訊：

### **基本資訊**
- [ ] 使用的裝置（iPhone/Android/電腦）
- [ ] 瀏覽器（LINE App/Safari/Chrome）
- [ ] 錯誤訊息完整內容（截圖）

### **設定狀態**
- [ ] LIFF ID: `2008576354-nwJ6w230`
- [ ] LIFF Scopes 是否包含 `profile` 和 `openid`
- [ ] Google Apps Script 是否已部署
- [ ] API 端點訪問測試結果

### **測試結果**
- [ ] 直接訪問 API URL 的結果
- [ ] 是否在 LINE 環境中測試
- [ ] 第一次點擊還是多次點擊
- [ ] 有無看到任何彈窗訊息

---

## 📚 相關文件

- **API_USAGE.md** - Google Apps Script API 使用說明
- **LIFF_SCOPE_FIX.md** - 權限問題修復指南
- **DEBUG_GUIDE.md** - 詳細調試步驟
- **BUTTON_FIX_SUMMARY.md** - 按鈕顯示問題修復

---

## 🎓 開發者資源

- [LINE LIFF 文檔](https://developers.line.biz/en/docs/liff/)
- [Flex Message Simulator](https://developers.line.biz/flex-simulator/)
- [LINE Developers Console](https://developers.line.biz/console/)
- [Google Apps Script 文檔](https://developers.google.com/apps-script)

---

**最後更新**：2025-11-27  
**版本**：2.0.0  
**狀態**：✅ 已簡化，一鍵發送

