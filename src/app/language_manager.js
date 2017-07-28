var fs = require('fs');
var path = require('path');
var config = require('electron-json-config');

var language;
var file;

class LanguageManager {

    getFiles() {
        // Temporary. Later for language settings.
        console.log(fs.readdirSync("resources/app/locales/"));
    }

    setLanguage() {
        if (config.has("language")) {
            language = config.get("language");
            file = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "resources/app/locales/" + language + ".json")));
        } else {
            // Temporary. Later for Welcome screen.
            config.set("language", "deutsch");

            language = config.get("language");
            file = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "resources/app/locales/" + language + ".json")));
        }
    }

    translate() {
        return file;
    }
}

module.exports = new LanguageManager();