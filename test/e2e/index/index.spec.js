 'use strict';
// spec.js
var indexPage = require('./indexPage2');

describe('Protractor Demo App', function() {
  var page = new indexPage();

  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.AppUrl('http://localhost:9000/#/');

  it("should obtain the title of the website", function(){
    expect(page.AppTitle()).toBe("BIProjectDevelopment");
  });
});
