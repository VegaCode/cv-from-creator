// spec.js
var indexPage = require('./indexPage2');
var growl;

describe('Protractor Demo App', function() {
  var page = new indexPage();

  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.AppUrl('https://tools.brandinstitute.com/nw_development/#/main/a2');


});
