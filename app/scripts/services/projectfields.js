'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
var webBaseUrl;
webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
angular.module('biprojectDevelopmentApp')
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
  .factory('getProjectFields', function() {
    return {
      getProjectFields: function() {
        return [
          {
            "ProjectId": "10",
            "ProjectName": "10",
            "ProjectFieldId": "130",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "1",
            "OptionList": "1,2,3,4, 5, 6,7,8,9",
            "OptionListOrientation": " ",
            "ToolTip": "Logo of the Companyhello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Radio List Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-radio-list>radio-list Directive</bi-radio-list>"
          },
           {
              "ProjectId": "10",
              "ProjectName": "10",
              "ProjectFieldId": "130",
              "FieldTypeId": '101',
              "SortValue": "2",
              "Access": 'true',
              "Status": "",
              "IsActive": "1",
              "OptionList": "ONEONEO,TwoOne,ThreeOne,Four,FiveOneOne,Six, OneOne,TwoOne,ThreeOne,Four,FiveOneOne,Six",
              "OptionListOrientation": " ",
              "ToolTip": "Logo of the Companyhello tooltip",
              "ToolTipPlacement": "top",
              "ToolTipTrigger": "mouseenter",
              "Label": "Radio List Directive",
              "PlaceHolder": "Text Place holder",
              "Answer": "",
              "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
              "TemplateName": "RX",
              "width": "100%",
              "ImageUrl": "",
              "directive": "<bi-radio-list>radio-list Directive</bi-radio-list>"
            },
            {
            "ProjectId": "11",
            "ProjectName": "11",
            "ProjectFieldId": "130",
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "0",
            "OptionList": "ONEONEONE,TwoOne,ThreeOne,Four,FiveOneOne,Six,OneOne,TwoOne,ThreeOne,Four,FiveOneOne,Six",
            "OptionListOrientation": "inline",
            "ToolTip": "Logo of the Companyhello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Check List Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-check-list>check-list Directive</bi-check-list>"
          },
          {
            "ProjectId": "6",
            "ProjecName": "6",
            "ProjectFieldId": "126",
            "FieldTypeId": 'Title',
            "SortValues": "2",
            "Access": 'true',
            "Status": "In Progress",
            "IsActive": "1",
            "OptionList": "Start, Complete",
            "OptionListOrientation": "",
            "ToolTip": '<bi-version-control src="datasrc"></bi-version-control>',
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "BI Forms",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-title>title Directive</bi-title>"
          }, {
            "ProjectId": "0",
            "ProjectName": "0",
            "ProjectFieldId": "1210",
            "FieldTypeId": 'Text',
            "SortValue": "2",
            "Access": 'false',
            "Status": "In Progress",
            "IsActive": "1",
            "OptionList": "",
            "OptionListOrientation": "",
            "ToolTip": "<h1>hello world</h1>",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "General Information questions labelGeneral Information Text Directive questions labelGeneral Information Text Directive questions label",
            "PlaceHolder": "Text Place holder",
            "Answer": "I'm an answer",
            "VersionControl": '[{"oldValue":"cesar oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-text>Text Directive</bi-text>"
          }, {
            "ProjectId": "3",
            "ProjecName": "3",
            "ProjectFieldId": "123",
            "FieldTypeId": 'Grid',
            "SortValues": "2",
            "Access": 'true',
            "Status": "Done",
            "IsActive": "1",
            "OptionList": "1,2,3,4",
            "OptionListOrientation": "inline",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Grid Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "1",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-grid>grid Directive</bi-grid>"
          }, {
            "ProjectId": "6",
            "ProjecName": "6",
            "ProjectFieldId": "126",
            "FieldTypeId": 'Title',
            "SortValues": "2",
            "Access": 'true',
            "Status": "In Progress",
            "IsActive": "1",
            "OptionList": "Start, Complete",
            "OptionListOrientation": "",
            "ToolTip": '<bi-version-control src="datasrc"></bi-version-control>',
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Super Grid :)",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-title>title Directive</bi-title>"
          }, {
            "ProjectId": "3",
            "ProjecName": "3",
            "ProjectFieldId": "122",
            "FieldTypeId": 'Grid',
            "SortValues": "2",
            "Access": 'true',
            "Status": "Done",
            "IsActive": "1",
            "OptionList": "1,2,3,4",
            "OptionListOrientation": "inline",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Grid Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "1",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-grid>grid Directive</bi-grid>"
          }, {
            "ProjectId": "0",
            "ProjectName": "0",
            "ProjectFieldId": "1210",
            "FieldTypeId": 'Text',
            "SortValue": "2",
            "Access": 'true',
            "Status": "In Progress",
            "IsActive": "0",
            "OptionList": "",
            "OptionListOrientation": "",
            "ToolTip": "<h1>hello world</h1>",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "General Information questions labelGeneral Information Text Directive questions labelGeneral Information Text Directive questions label",
            "PlaceHolder": "Text Place holder",
            "Answer": "I'm an answer",
            "VersionControl": '[{"oldValue":"cesar oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-text>Text Directive</bi-text>"
          }, {
            "ProjectId": "2",
            "ProjectName": "2",
            "ProjectFieldId": "122",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "Done",
            "IsActive": "1",
            "OptionList": "",
            "OptionListOrientation": "",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Text Area Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "Hello World!",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-text-area>Text area directive</bi-text-area>"
          },

          {
            "ProjectId": "4",
            "ProjecName": "4",
            "ProjectFieldId": "124",
            "FieldTypeId": 'Label',
            "SortValue": "2",
            "Access": 'true',
            "Status": "Not Started",
            "IsActive": "1Not Started",
            "OptionList": "1,2,3,4",
            "OptionListOrientation": "inline",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "INSERT IMAGES",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-label>label Directive</bi-label>"
          }, {
            "ProjectId": "5",
            "ProjecName": "5",
            "ProjectFieldId": "125",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "1",
            "OptionList": "",
            "OptionListOrientation": "",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Label Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrjr_RxTZY1x30vZ-FYOWrCwJm4JwJK_QBuj0nExUGpJk98y1Pjw",
            "directive": "<bi-image>image Directive</bi-image>"
          },

          {
            "ProjectId": "8",
            "ProjecName": "8",
            "ProjectFieldId": "128",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "1",
            "OptionList": "one,two,three,four",
            "OptionListOrientation": "inline",
            "ToolTip": "hello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Dropdown Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-dropdown>dropdown Directive</bi-dropdown>"
          }, {
            "ProjectId": "9",
            "ProjectName": "9",
            "ProjectFieldId": "129",
            "FieldTypeId": '101',
            "SortValue": "2",
            "Access": 'true',
            "Status": "",
            "IsActive": "1",
            "OptionList": "One,Two,Three,Four,Five",
            "OptionListOrientation": "",
            "ToolTip": "Logo of the Companyhello tooltip",
            "ToolTipPlacement": "top",
            "ToolTipTrigger": "mouseenter",
            "Label": "Typeahead Directive",
            "PlaceHolder": "Text Place holder",
            "Answer": "",
            "VersionControl": '[{"oldValue":"Old record 1","datetime":"Jun /  29 / 2015 : 04:09:01 PM","adminUser":"cacev"},{"oldValue":"Other record 2","datetime":"Jun /  22 / 2015 : 04:09:01 PM","adminUser":"cacev"}]',
            "TemplateName": "RX",
            "width": "100%",
            "ImageUrl": "",
            "directive": "<bi-typeahead>typeahead Directive</bi-typeahead>"
          }
        ];
      }
    };
  });
