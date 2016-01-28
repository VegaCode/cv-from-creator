'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')

.controller('MainCtrl', ['$http', '$location', 'getProjectFields', 'queryString', function($http, $location, getProjectFields, queryString) {

  var self = this;
  // Grid data.
<<<<<<< HEAD
  self.ProjectId = [];
  self.ProjectFieldId = [];
  self.FieldTypeId = [];
  self.SortValue = [];
  self.Access = [];
  self.Status = [];
  self.IsActive = [];
  self.OptionList = [];
  self.OptionListOrientation = [];
  self.ToolTip = [];
  self.ToolTipPlacement = [];
  self.ToolTipTrigger = [];
  self.Label = [];
  self.PlaceHolder = [];
  self.Answer = [];
  self.VersionControl = [];
  self.TemplateName = [];
  self.GridConfig = [];
=======
  var id = queryString;
  $scope._ProjectId = [];
  $scope._ProjectFieldId = [];
  $scope._FieldTypeId = [];
  $scope._SortValue = [];
  $scope._Access = [];
  $scope._Status = [];
  $scope._IsActive = [];
  $scope._OptionList = [];
  $scope._OptionListOrientation = [];
  $scope._ToolTip = [];
  $scope._ToolTipPlacement = [];
  $scope._ToolTipTrigger = [];
  $scope._Label = [];
  $scope._PlaceHolder = [];
  $scope._Answer = [];
  $scope._VersionControl = [];
  $scope._TemplateName = [];
  $scope._GridConfig = [];
>>>>>>> cvega-development

  self.fromFactory = getProjectFields.getProjectFields();

  self.fromFactory.map(function(obj){
    self.ProjectId.push(obj.ProjectId);
    self.ProjectFieldId.push(obj.ProjectFieldId);
    self.FieldTypeId.push(obj.FieldTypeId);
    self.SortValue.push(obj.SortValue);
    self.Access.push(obj.Access);
    self.Status.push(obj.Status);
    self.IsActive.push(obj.IsActive);
    self.OptionList.push(obj.OptionList);
    self.OptionListOrientation.push(obj.OptionListOrientation);
    self.ToolTip.push(obj.ToolTip);
    self.ToolTipPlacement.push(obj.ToolTipPlacement);
    self.ToolTipTrigger.push(obj.ToolTipTrigger);
    self.Label.push(obj.Label);
    self.PlaceHolder.push(obj.PlaceHolder);
    self.Answer.push(obj.Answer);
    self.VersionControl.push(obj.VersionControl);
    self.TemplateName.push(obj.TemplateName);
    self.GridConfig.push(obj.GridConfig);
  });


    self.searchKey = '';
    self.goSearch = function() {
      if (self.searchKey !== '') {
        self.projects = self.fromFactory;
      }else{
        self.projects = [];
      }
    };
    self.search = function() {
      self.goSearch();
    };
    self.gotToProject = function(projectChosen) {

      for(var index = 0; index < self.ProjectId.length; index++){
        if (self.ProjectId[index] === projectChosen){
          $location.path('/template/' + projectChosen);
        }
      }
          // if (result.length > 0) {
          //     $location.path('/setProject/' + result[0].ProjectName + '/' + result[0].Description + '/' + result[0].TemplateId);
          // } else {
          //     $location.path('/chooseTemplate/' + projectChosen);
          // }
    };

}]);
