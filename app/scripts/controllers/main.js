'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
.controller('MainCtrl', ['$scope', '$http', 'testFactory', function($scope, $http, testFactory) {
  // Grid data.
  var _Id = [];
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
  var _InputType = [];
  var _InputTypeId = [];
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


    $scope.myData = [
      {
        "Id": _Id[0],
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
        "InputType": _InputType[0],
        "InputTypeId": _InputTypeId[0],
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

  $scope.componentModel = [
    {
      "ProjectId": Id,
      "ProjetFieldId": FieldId,
      "Type": Type,
      "Access": Access,
      "Status": Status,
      "Answer": Answer,
      "OptionList": OptionList,
      "OptionListOrientation": OptionListOrientation,
      "ToolTip": ToolTip,
      "ToolTipPlacement": ToolTipPlacement,
      "ToolTipTrigger": ToolTipTrigger,
      "PlaceHolder": PlaceHolder,
      "Label": Label,
      "Name": Name,
      "GirdConfiguration": GridConfiguration,
      "GridValue": GridValue
    }
  ];

  $scope.fromFactory = testFactory.test();

}]);
