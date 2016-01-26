'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
.controller('MainCtrl', ['$scope', '$http','queryString', function($scope, $http, queryString) {
  // Grid data.
  var _ProjectId = [];
  var _Class = [];
  var _Color = [];
  var _Created = [];
  var _CreatedBy = [];
  var _DataSourceUrl = [];
  var _DataType = [];
  var _DefaultValue = [];
  var _GridConfig = [];
  var _Group = [];
  var _Input = [];
  var _InputControlStatus = [];
  var _FieldTypeId = [];
  var _ProjectFieldId = [];
  var _IsActive = [];
  var _Label = [];
  var _ListOrientation = [];
  var _Name = [];
  var _Option = [];
  var _PlaceHolder = [];
  var _Question = [];
  var _SortValue = [];
  var _TemplateId = [];
  var _TemplateItemId = [];
  var _TemplateName = [];
  var _ToolTip = [];
  var _ToolTipPlacement = [];
  var _Updated = [];
  var _UpdatedBy = [];
  // var _PopOverPlacement = [];
  // var _PopOverTitle = [];
  // webBaseUrl = 'http://localhost:9000/#/';
  // webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';

  $http.get('https://tools.brandinstitute.com/BIWebServices/api/TemplateItems').success(function(result){

    _ProjectId.push(queryString);
    _Class.push(result[0].Class);
    _Color.push(result[0].Color);
    _Created.push(result[0].Created);
    _CreatedBy.push(result[0].CreatedBy);
    _DataSourceUrl.push(result[0].DataSourceUrl);
    _DataType.push(result[0].DataType);
    _DefaultValue.push(result[0].DefaultValue);
    _GridConfig.push(result[0].GridConfig);
    _Group.push(result[0].Group);
    _Input.push(result[0].Input);
    _InputControlStatus.push(result[0].InputControlStatus);
    _FieldTypeId.push(result[0].FieldTypeId);
    _ProjectFieldId.push(result[0].ProjectFieldId);
    _IsActive.push(result[0].IsActive);
    _Label.push(result[0].Label);
    _ListOrientation.push(result[0].ListOrientation);
    _Name.push(result[0].Name);
    _Option.push(result[0].Option);
    _PlaceHolder.push(result[0].PlaceHolder);
    _Question.push(result[0].Question);
    _SortValue.push(result[0].SortValue);
    _TemplateId.push(result[0].TemplateId);
    _TemplateItemId.push(result[0].TemplateItemId);
    _TemplateName.push(result[0].TemplateName);
    _ToolTip.push(result[0].ToolTip);
    _ToolTipPlacement.push(result[0].ToolTipPlacement);
    _Updated.push(result[0].Updated);
    _UpdatedBy.push(result[0].UpdatedBy);

    $scope.myData = [
      {
        "Id": _ProjectId[0],
        "Class": _Class[0],
        "Color": _Color[0],
        "Created": _Created[0],
        "CreatedBy": _CreatedBy[0],
        "DataSourceUrl": _DataSourceUrl[0],
        "DataType": _DataType[0],
        "DefaultValue": _DefaultValue[0],
        "GridConfig": _GridConfig[0],
        "Group": _Group[0],
        "Input": _Input[0],
        "InputControlStatus": _InputControlStatus[0],
        "FieldTypeId": _FieldTypeId[0],
        "ProjectFieldId": _ProjectFieldId[0],
        "IsActive": _IsActive[0],
        "Label": _Label[0],
        "ListOrientation": _ListOrientation[0],
        "Name": _Name[0],
        "PlaceHolder": _PlaceHolder[0],
        "Question": _Question[0],
        "SortValue": _SortValue[0],
        "TemplateId": _TemplateId[0],
        "TemplateItemId": _TemplateItemId[0],
        "TemplateName": _TemplateName[0],
        "ToolTip": _ToolTip[0],
        "ToolTipPlacement": _ToolTipPlacement[0],
        "Updated": _Updated[0],
        "UpdatedBy": _UpdatedBy[0]
      }
    ];
  });

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

}]);
