'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
var webBaseUrl;
webBaseUrl = 'http://localhost:64378/';
webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
angular.module('biprojectDevelopmentApp')

  .factory("general", function generalFactory($resource){
    return $resource ( webBaseUrl + 'api/BIFCWebApi', {}, {});
  })
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
  .factory('getProjectFields', function($http, $q) {
      var apiCall, deferred, factory, _getFileds;
      factory = {};
      deferred = $q.defer();
      apiCall = 'api/BiFormCreator/';
      _getFileds = function(data) {
        $http.post(webBaseUrl + apiCall, data).success(function(results) {
          deferred.resolve(results);
        }).error(function(err) {
          deferred.reject(err);
        });
        return deferred.promise;
      };
      factory.getFileds = _getFileds;
      return factory;
  });
