'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .controller('ProjectCtrl',[ 'getProjectFields', '$routeParams','$http', function (getProjectFields,$routeParams, $http) {
    var self = this;
        self.toggleEditClass = 'glyphicon glyphicon-save ';
        self.btnColorClass = 'btn btn-success';
        self.textFieldFocus = true;
        self.isReadOnly = true;
        self.btnToolTip = 'Save';
        self.someFocusVariable = true;

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


     this.componentConfig = getProjectFields.getProjectFields();
  }]);
