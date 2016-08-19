const {ipcRenderer} = require('electron');
window.onload = () => {
	const execute = document.getElementById('execute');
	const sendSync = document.getElementById('send_sync');
	const showdialog = document.getElementById('showdialog');
	const baseUrl = document.getElementById('base_url');

	execute.addEventListener('click', () => {
		url = baseUrl.value;
		//ipcRenderer.send('async-message', 'hello async');
		ipcRenderer.send('execute-message', url);
	});

	ipcRenderer.on('execute-result', (event, arg) => {
		var message = document.querySelector('#message');
		message.innerHTML = arg;
	});
};


/*
app.controller('FooController', function() {
	this.test = "foobar";
	this.send = function() {
		ipcRenderer.send('asynchronous-message', this.test);
	};
	this.sendsync = function() {
		console.log(ipcRenderer.sendSync('synchronous-message', this.test));
	};
	this.showdialog = function() {
		dialog.showMessageBox({
			type: "info",
			title: "Info",
			message: "hello from renderer proc",
			buttons: ["OK"]
		});
	};
});
*/
