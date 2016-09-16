// electronモジュールを読み込み
//const electron = require('electron');
//const app = electron.app;
const {app, BrowserWindow, ipcMain} = require('electron');
const fs = require('fs');
const Pageres = require('pageres');
const phantom = require('phantom');
const EventEmitter = require('events');
//const {app, BrowserWindow, ipcMain, webContents} = require('electron');
//const BrowserWindow = electron.BrowserWindow;
//const {ipcMain} = require('electron')

// 新しいウィンドウ(Webページ)を生成
let mainWindow;
let contents;
function createWindow () {
	// BrowserWindowインスタンスを生成
	mainWindow = new BrowserWindow({width: 800, height: 600, show: false});
//	mainWindow = new BrowserWindow({width: 800, height: 600});
	// index.htmlを表示
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	// デバッグするためのDevToolsを表示
	contents = mainWindow.webContents;
	// contents.openDevTools();
	//mainWindow.webContents.openDevTools();
	// ウィンドウを閉じたら参照を破棄
	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

}


// アプリの準備が整ったらウィンドウを表示
app.on('ready', createWindow);

// 全てのウィンドウを閉じたらアプリを終了
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

const emitter = new EventEmitter();

let capCon;
ipcMain.on('execute-message', (event, arg) => {
/*
		const pageres = new Pageres({delay: 2})
		.src('https://www.npmjs.com/package/screenshot-stream', ['480x320', '1024x768', 'iphone 5s', '1280x1024', '1920x1080'], {crop: false})
		.dest(__dirname)
		.run()
		.then(() => {

			event.sender.send('execute-result', 'done:' + arg);
		    console.log('done');
		});

*/

	phantom.create()
		.then();





	// let capWin = new BrowserWindow({width: 1000, height: 2000});
	// capCon = capWin.webContents;
	// capCon.loadURL(arg);
	// contents.downloadURL(arg);
	// capCon.on('did-finish-load', () => {
		/*
		let contentBounds = capWin.getContentBounds();
		let bounds = capWin.getBounds();
		let size = capWin.getSize();
		let contentSize = capWin.getContentSize();
		console.log(contentBounds.width);
		console.log(contentBounds.height);
		console.log(bounds.width);
		console.log(bounds.height);
		console.log(size[0]);
		console.log(size[1]);
		console.log(contentSize[0]);
		console.log(contentSize[1]);

		capCon.capturePage({x:0, y:0, width:1000, height:2000}, (buffer) => {
			// fs.writeFile('./abc.png', buffer, 'base64', (err) => {
			fs.writeFile('./abc.png', buffer.toPng(), (err) => {
				console.log("xxxx", err);
				capWin.close();
			});
		});
		*/
		console.log('arg:' + arg);


	// });
	// event.sender.send('execute-result', arg);
	console.log('execute: ' + arg);
});

emitter.on('crawl', (url, level) => {
	console.log('url:' + url);
	console.log('level:' + level);

});

ipcMain.on('synchronous-message', (event, arg) => {
	console.log('synchronous msg: ' + arg);
	event.returnValue = 'returned from send sync';
});
