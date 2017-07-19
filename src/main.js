var electron = require('electron');
var {app, BrowserWindow, Menu} = electron;

var windowManager = require('./app/ui/window_manager');


app.on('ready', () => {
    windowManager.createForm();
    windowManager.setFormMenu();
})

app.once('window-all-closed', app.quit);