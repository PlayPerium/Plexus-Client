var fs = require('fs');
var config = require('electron-json-config');

var language = config.get("language");

var app = angular.module('plexus', ['pascalprecht.translate']);
    app.config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('currently', JSON.parse(fs.readFileSync("resources/app/locales/" + language + ".json")));
     
      $translateProvider.preferredLanguage('currently');
      $translateProvider.useSanitizeValueStrategy(null);
    }]);
