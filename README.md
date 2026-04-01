<<<<<<< HEAD
地圖應用程式
=======
# 多路線道路規劃地圖

## 快速開始

### 方法 1：線上使用（推薦 ✨）

```
Python 3:
python -m http.server 8000

Python 2:
python -m SimpleHTTPServer 8000

Node.js:
npm install -g http-server
http-server
```

然後打開瀏覽器訪問 `http://localhost:8000/download.html`

### 方法 2：直接打開網頁版
在 `www/index.html` 上右鍵 → 用瀏覽器打開

### 方法 3：安裝成手機 APP（PWA）

#### iOS（iPhone / iPad）
1. 用 Safari 打開網頁版
2. 點底部菜單按鈕
3. 選「加到主屏幕」
4. 完成！

#### Android（安卓）
1. 用 Chrome 打開網頁版
2. 點右上角菜單（⋮）
3. 選「安裝應用」
4. 完成！

## 快速分享連結

如果你想生成可分享的連結，可以使用以下免費服務：

### 方案 A：GitHub Pages（推薦）
1. 創建 [GitHub](https://github.com) 帳號
2. 創建新倉庫 `map-app`
3. 將 `www/` 文件夾上傳
4. 在 Settings → Pages 開啟 GitHub Pages
5. 分享連結：`https://你的用戶名.github.io/map-app/`

### 方案 B：Vercel（最簡單）
1. 訪問 [vercel.com](https://vercel.com)
2. 用 GitHub 登錄
3. Import Project 選擇你的倉庫
4. 自動部署完成
5. 獲得免費的 HTTPS 連結

### 方案 C：Netlify
1. 訪問 [netlify.com](https://netlify.com)
2. 直接拖放 `www` 文件夾
3. 立即獲得免費連結

## 文件結構

```
map-app/
├── www/                      # 網頁應用文件
│   ├── index.html           # 主應用
│   ├── manifest.json        # PWA 配置
│   └── sw.js                # Service Worker (離線支援)
├── android/                 # Android 項目（Capacitor）
├── download.html            # 下載頁面
├── capacitor.config.json    # Capacitor 配置
└── package.json             # npm 配置
```

## 功能說明

### 路線規劃
- 直接點地圖加入「起點」「經過點」「終點」
- 支援開車、步行、自行車三種模式
- 自動計算距離和時間（使用 OpenStreetMap）

### 路線管理
- 保存多條路線，用不同顏色區分
- 路線數據存在本地瀏覽器（100% 隱私）
- 可隨時載入、修改、刪除已儲存路線

### 深色主題
- 點右下角月亮/太陽按鈕切換
- 設置自動保存

## 離線使用

APP 安裝後支援完全離線運行（首次訪問後）：
- 所有 UI 和邏輯在本地執行
- 路線規劃需網路（調用 OSRM 路由服務）
- 地圖瓦片快取到本地

## 技術細節

- **地圖引擎**：Leaflet + OpenStreetMap
- **路由服務**：Project OSRM（免費、開源）
- **框架**：原生 HTML5 + JavaScript（無依賴）
- **打包方式**：Capacitor（一套代碼，多平台應用）
- **存儲**：LocalStorage（瀏覽器本地存儲）

## 常見問題

**Q: 路線數據會被上傳嗎？**
A: 不會。所有數據都保存在你的設備上。

**Q: 沒網路能用嗎？**
A: 可以！安裝後可離線查看已保存路線，但規劃新路線需要網路。

**Q: 可以在電腦上用嗎？**
A: 完全可以。任何瀏覽器都支援。

**Q: iOS 版本怎麼配置？**
A: 執行 `npx cap add ios`（需要 Mac + Xcode）

## APK 建置（Android APP）

### 準備環境
```bash
# 安裝 Java JDK 11+
# 安裝 Android SDK
# 設置 JAVA_HOME 環境變量
```

### 編譯
```bash
cd android
gradlew.bat assembleDebug
```

### 生成位置
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### 安裝到手機
```bash
adb install app-debug.apk
```

## 許可證
MIT License

## 聯繫方式
有任何問題或建議，歡迎提交 Issue！
>>>>>>> 9aeb82b (Initial commit)
