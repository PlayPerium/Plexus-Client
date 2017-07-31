var electron = require('electron');
var fs = require('fs');
var path = require('path');
var {app, BrowserWindow, Menu} = electron;

// app.on('will-finish-launching', () => {
app.on('ready', () => {
    checkConfig();
    require('./app/plexus').start();
})

app.once('window-all-closed', app.quit);

function checkConfig() {

    if(!fs.existsSync(app.getPath('userData'))) {
        fs.mkdirSync(app.getPath('userData'));
        fs.writeFileSync(path.join(app.getPath('userData'), "config.json"), "{}");
    }
}