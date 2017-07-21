var fs = require('fs');

class LanguageManager {

    getFiles() {
        // Temporary. Later for language settings.
        console.log(fs.readdirSync("resources/app/locales/"));
    }
}

module.exports = new LanguageManager();