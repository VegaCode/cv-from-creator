// conf.js
var request = require('request');
var  webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
var   simpleStringify = function(object){
      var simpleObject = {};
      for (var prop in object ){
          if (!object.hasOwnProperty(prop)){
              continue;
          }
          if (typeof(object[prop]) == 'object'){
              continue;
          }
          if (typeof(object[prop]) == 'function'){
              continue;
          }
          simpleObject[prop] = object[prop];
      }
      return JSON.stringify(simpleObject); // returns cleaned up JSON
  };

exports.config = {
  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites:{
    basicTest: ['./e2e/**/index.spec.js'],
    // longerTest: ['./e2e/**/index2.spec.js'],
  },


   capabilities: {
    browserName: 'chrome'
  }
};
