var fs = require('fs');
var path = require('path');
var app = require('electron').app;

var windowManager = require('./ui/window_manager');
var languageManager = require('./language_manager');

class Plexus {

    start() {
        languageManager.setLanguage();

        windowManager.createForm();
        windowManager.setFormMenu();
    }
}

module.exports = new Plexus();