'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:templateBuilderCtrl
 * @description
 * # templateBuilderCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .controller('templateBuilderCtrl', ['getProjectData', '$routeParams', '$http', '$compile', '$scope',
  function(getProjectData, $routeParams, $http, $compile, $scope) {
    var self = this;
    var apiCall = 'api/BiFormCreator/';
    var webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
    self.toggleEditClass = 'glyphicon glyphicon-save ';
    self.btnColorClass = 'btn btn-success';
    self.textFieldFocus = true;
    self.isReadOnly = true;
    self.btnToolTip = 'Save';
    self.someFocusVariable = true;

    self.component = [];
    // BUTTOMS LIST TO ADD DIRECTIVES
    $http.post(webBaseUrl + apiCall, JSON.stringify('[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFieldtype]')).
    success(function(results) {
      self.components = results;
    });

    self.createComponent = function(directive) {
      var ele = angular.element($('#testElement'));
        ele.empty().after($compile(directive)($scope));
    };


    self.projectName = $routeParams.project;
    self.template = $routeParams.template;
    self.projectLogoImagePath = 'images/Samsung-Logo.jpg';
    self.inputControlItemsService = {};
    self.goHome = function() {
      $location.path('/chooseProject');
    };
    self.goEditTemplate = function() {
      $location.path('/projectTemplate/' + self.ProjectIdForTemplate);
    };

    var value = '[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFields] ' + 10008;
    value = JSON.stringify(value);
    getProjectData.getFileds(value).then(function (results) {
       self.componentConfig = results;
    })
  }]);
