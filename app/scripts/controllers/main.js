'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')

.controller('MainCtrl', ['$http', '$location', 'getProjectFields','bidocsGetProject',
  function($http, $location, getProjectFields,bidocsGetProject) {
  var self = this;
        var webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
        var apiCall = 'api/BIDOCS_ProjectPreSearch/';
        self.searchKey = '';

        self.search = function() {
            if (self.searchKey !== '') {
                $http.get(webBaseUrl + apiCall + self.searchKey).success(function(results) {
                    self.projects = results;
                    self.fromFactory = results;
                });
            }
        };
        self.gotToProject = function(projectChosen) {
          var apiCall = 'api/BIDOCS_GetProject/?projectName=';
          $http.get(webBaseUrl + apiCall + projectChosen).then(function(result) {
              return result.data;
          }).then(function(result) {
              if (result.length > 0) {
                  $location.path('/setProject/' + result[0].ProjectName + '/' + result[0].Description + '/' + result[0].TemplateId);
              } else {
                  $location.path('/chooseTemplate/' + projectChosen);
              }
          });
        };
}]);
