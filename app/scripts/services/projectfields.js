'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
var webBaseUrl;
webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
webBaseUrl = 'http://localhost:64378/';
angular.module('biprojectDevelopmentApp')
  .factory('bidocsGetProject', [
    '$http', '$q',
    function($http, $q) {
      var apiCall, deferred, factory, _getProject;
      factory = {};
      deferred = $q.defer();
      apiCall = 'api/BIDOCS_GetProject/?projectName=';
      _getProject = function(projectName) {
        $http.get(webBaseUrl + apiCall + projectName).success(function(results) {
          deferred.resolve(results);
        }).error(function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      };
      factory.getProject = _getProject;
      return factory;
    }
  ])
  .factory('bidocsGetNRDGTemplates', [
    '$http', '$q',
    function($http, $q) {
      var apiCall, deferred, factory, _getTemplates;
      factory = {};
      deferred = $q.defer();
      apiCall = 'api/BIDOCS_ProjectPreSearch/';
      _getTemplates = function() {
        $http.get(webBaseUrl + apiCall).success(function(results) {
          deferred.resolve(results);
        }).error(function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      };
      factory.getTemplates = _getTemplates;
      return factory;
    }
  ])
  .factory('globalVariables', [
    function() {
      var factory, _projectName = [],
        _templateName = [],
        _setVariables, _getVariables;
      factory = {};
      _setVariables = function(projectVariable, templateVariable) {
        _projectName.push(projectVariable);
        _templateName.push(templateVariable);
      };
      _getVariables = function() {
        var str = _projectName[0] + _templateName[0];
        return str;
      };
      factory.setVariable = _setVariables;
      factory.getVariable = _getVariables;
      return factory;
    }
  ])
  .factory('getProjectData', function($http, $q) {
      var apiCall, deferred, factory, _getFileds,_getRegularGrid,_getMobileGrid,_getHeaders;
      factory = {};
      deferred = $q.defer();
      apiCall = 'api/BiFormCreator/';

      _getFileds = function(data){
        $http.post(webBaseUrl + apiCall, data).success(function(results) {
          deferred.resolve(results);
        }).error(function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      };
      // _getRegularGrid = function(data){
      //   $http.post(webBaseUrl + apiCall, data).success(function(results) {
      //     deferred.resolve(results);
      //   }).error(function(err) {
      //     deferred.reject(err);
      //   });
      //   return deferred.promise;
      // };
      // _getMobileGrid = function(data){
      //   $http.post(webBaseUrl + apiCall, data).success(function(results) {
      //     deferred.resolve(results);
      //   }).error(function(err) {
      //     deferred.reject(err);
      //   });
      //   return deferred.promise;
      // };
      // _getHeaders = function(data){
      //   $http.post(webBaseUrl + apiCall, data).success(function(results) {
      //     deferred.resolve(results);
      //   }).error(function(err) {
      //     deferred.reject(err);
      //   });
      //   return deferred.promise;
      // };

          {
            "ProjectId": "8",
            "ProjecName": "8",
            "ProjectFieldId": "128",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "1",
            "OptionList": "one,two,three,four",
            "OptionListOrientation": "inline",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Dropdown Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-dropdown>dropdown Directive</bi-dropdown>"
          },
          {
            "ProjectId": "9",
            "ProjectName": "9",
            "ProjectFieldId": "129",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "1",
            "OptionList": "One,Two,Three,Four,Five",
            "OptionListOrientation": "",
            "ToolTip": "Logo of the Companyhello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Typeahead Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-typeahead>typeahead Directive</bi-typeahead>"
          }
        ];
      }
    };
  });
