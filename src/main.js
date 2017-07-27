var electron = require('electron');
var {app, BrowserWindow, Menu} = electron;

var windowManager = require('./app/ui/window_manager');
var languageManager = require('./app/language_manager');

app.on('ready', () => {
    languageManager.setLanguage();

    windowManager.createForm();
    windowManager.setFormMenu();
})

app.once('window-all-closed', app.quit);