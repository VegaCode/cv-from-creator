'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .controller('TemplateCtrl', ['$routeParams', 'bidocsGetNRDGTemplates', '$location', function ($routeParams, bidocsGetNRDGTemplates, $location) {
    var self =this;
    self.projectName = $routeParams.projectChosen;
    self.iconFill = 'fill: #ff0000';
    self.templateTextClassFill = 'danger';
    self.templateName = 'NO TEMPLATE';
    self.goButtonEnable = true;
    self.icon = 'lock_outline';
    self.tooltip = 'Please select a template before continue';
    var templateid ='';
    bidocsGetNRDGTemplates.getTemplates().then(function(result) {
      self.items = result;
    });

    self.selectedTemplate = function(eve) {
      self.templateName = eve.currentTarget.innerHTML;
      self.iconFill = 'fill: #5CB85C';
      self.templateTextClassFill = 'success';
      self.goButtonEnable = false;
      self.icon = 'play_circle_fill';
      self.tooltip = 'GO!';
      templateid = eve.target.dataset.templateid;
    };

    self.goToLayout = function() {
      if (self.templateName !== 'NO TEMPLATE') {
          var template = self.templateName;
          var project = self.projectName;
            $location.path('/setProject/' + project + '/' + template + '/' + templateid);
      }
    };
  }]);
