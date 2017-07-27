var electron = require('electron');
var shell = require('electron').shell;
var {app, BrowserWindow, Menu} = electron;

var languageManager = require('../language_manager');

var mainForm;

class WindowManager {

    createForm() {
        mainForm = new BrowserWindow({
            width: 1500,
            height: 870,
            minWidth: 1500,
            minHeight: 870,
            center: true,
            title: languageManager.translate().FORMS.MAINFORM.TITLE
            })

            mainForm.loadURL(`file://${__dirname}/main.html`);
            mainForm.maximize();
    }

    setFormMenu() {
        var formMenu = [
            {
                label: languageManager.translate().GENERALLY.PLEXUS,
                submenu: [
                    {
                        label: languageManager.translate().GENERALLY.SETTINGS,
                        click() {openSettinsWindow();}
                    },
                    {
                        label: languageManager.translate().GENERALLY.CLOSE,
                        click() {app.quit();}
                    }
                ]
            },
            {
                label: languageManager.translate().GENERALLY.HELP,
                submenu: [
                    {
                        label: languageManager.translate().GENERALLY.LICENSE,
                        click() {shell.openExternal('https://github.com/PlayPerium/PlayPerium-Plexus/blob/master/LICENSE');}
                    },
                    {
                        label: languageManager.translate().GENERALLY.ABOUT_PLEXUS,
                        click() {openAboutWindow();}
                    }
                ]
            }, 
        ];

        Menu.setApplicationMenu(Menu.buildFromTemplate(formMenu));
    }
}

function openAboutWindow() {
    var aboutWindow = new BrowserWindow({
        width: 800,
        height: 330,
        parent: mainForm,
        modal: true,
        resizable: false,
        maximizable: false,
        minimizable: false,
        center: true,
        title: languageManager.translate().FORMS.ABOUTFORM.TITLE
        })

    aboutWindow.setMenu(null);

    aboutWindow.loadURL(`file://${__dirname}/about.html`);

    aboutWindow.once('ready-to-show', () => {
    aboutWindow.show()
    })
}

function openSettinsWindow() {
    var settingsWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 700, 
        minHeight: 400,
        maximizable: false,
        center: true,
        title: languageManager.translate().FORMS.SETTINGSFORM.TITLE
        })

    settingsWindow.setMenu(null);

    settingsWindow.loadURL(`file://${__dirname}/settings.html`);

    settingsWindow.once('ready-to-show', () => {
    settingsWindow.show()
    })
}

module.exports = new WindowManager();