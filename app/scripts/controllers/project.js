'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .controller('ProjectCtrl',[ 'getProjectData', '$routeParams', function (getProjectData,$routeParams) {
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

        var value = '[BI_PROJECT_DEVELOPMENT].[dbo].[pd_GetFields] ' + '10008';
        value = JSON.stringify(value);
        getProjectData.getFileds(value).then(function (results) {
           self.componentConfig = results;
        })

  }]);
