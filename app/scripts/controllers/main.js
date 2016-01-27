'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')

.controller('MainCtrl', ['$scope', '$http', 'getProjectFields', 'queryString',function($scope, $http, getProjectFields, queryString) {

  // Grid data.
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

    // $scope.myData = [
    //   {
    //     "Id": _ProjectId[0],
    //   }
    // ];

  $scope.buttonInstance = {};
  $scope.settings =
  {
      width: 150,
      height: 30
  };

  // called when a button is clicked.
  $scope.onClick = function (event) {
      $scope.buttonData.text = "Clicked";
  };

  $scope.buttonData = {
      text: "Click me"
  };
  $scope.checked = true;

  $scope.fromFactory = getProjectFields.getProjectFields();

  $scope.fromFactory.map = function(obj){
    $scope._ProjectId.push(obj.ProjectId);
    $scope._ProjectFieldId.push(obj.ProjectFieldId);
    $scope._FieldTypeId.push(obj.FieldTypeId);
    $scope._SortValue.push(obj.SortValue);
    $scope._Access.push(obj.Access);
    $scope._Status.push(obj.Status);
    $scope._IsActive.push(obj.IsActive);
    $scope._OptionList.push(obj.OptionList);
    $scope._OptionListOrientation.push(obj.OptionListOrientation);
    $scope._ToolTip.push(obj.ToolTip);
    $scope._ToolTipPlacement.push(obj.ToolTipPlacement);
    $scope._ToolTipTrigger.push(obj.ToolTipTrigger);
    $scope._Label.push(obj.Label);
    $scope._PlaceHolder.push(obj.PlaceHolder);
    $scope._Answer.push(obj.Answer);
    $scope._VersionControl.push(obj.VersionControl);
    $scope._TemplateName.push(obj.TemplateName);
    $scope._GridConfig.push(obj.GridConfig);
  };

}]);
