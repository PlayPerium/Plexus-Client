var fs = require('fs');
var path = require('path');
var config = require('electron-json-config');

var language = config.get("language");

var app = angular.module('plexus', ['pascalprecht.translate']);
    app.config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('currently', JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "..", "resources/app/locales/" + language + ".json"))));
     
      $translateProvider.preferredLanguage('currently');
      $translateProvider.useSanitizeValueStrategy(null);
    }]);
