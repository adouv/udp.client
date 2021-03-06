const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');


let win;
/**
 * 创建窗体
 */
function createWindow() {

  //创建浏览器窗口
  win = new BrowserWindow({
    useContentSize: true,
    width: 80,
    height: 400,
    maxWidth: 80,
    maxHeight: 400,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      webSecurity: false
    }
  });

  //然后加载应用的 index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //打开开发者工具
  win.webContents.openDevTools({
    mode: 'undocked' //将调试工具置身于窗口之外
  });

  //当window被关闭，这个事件会被触发
  win.on('closed', () => {
    //取消引用window对象，如果你的应用支持多窗口的话，
    //通常会把多个window对象存放在一个数组里面
    //于此同时，你应该删除响应的元素
    win = null;
  });
}
/** 
 * electron 会在初始化后并准备
 * 创建浏览器窗口时，调用这个函数
 * 部分API在ready事件触发后才能使用
 */
app.on('ready', createWindow);

/** 
 * 当全部窗口关闭时退出
 */
app.on('window-all-closed', () => {
  //在macOS上，除非用户用cmd+Q确定地退出
  //否则绝大部分应用及其菜单栏会保持激活
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  //在macOS上，当单机dock图标并且没有其他窗口打开时，
  //通常在应用程序中重新创建一个窗口
  if (win === null) {
    createWindow();
  }
});

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
