var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'MO5a3svnAFW6V6FL88IJSOrJaixQXHlaIvAkdD55', 'X-Parse-REST-API-Key': 'SHPQc11mbIrA5aYibN7ZP7Axf9QoczWagwgJDIm8'}
      return config;
    }
  };
});