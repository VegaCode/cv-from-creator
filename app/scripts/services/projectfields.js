'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
 var  webBaseUrl;
 webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';

angular.module('biprojectDevelopmentApp')
.factory('bidocsGetNRDGTemplates', [
    '$http','$q',
    function($http, $q) {
        var apiCall, deferred, factory,  _getTemplates;
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
.factory('getProjectFields', function(){
  return {

    getProjectFields: function(){
      return [{
    "ProjectId":"0",
    "ProjectFieldId":"1210",
    "FieldTypeId":"101",
    "SortValue":"2",
    "Access":"YES",
    "Status": "In Progress",
    "IsActive": "1In Progress",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"top",
    "ToolTipTrigger": "mouseenter",
    "Label":"General Information Text Directive questions label",
    "PlaceHolder":"Text Place holder",
    "Answer":"I'm an answer",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-text>Text Directive</bi-text>"
  },
    {
    "ProjectId":"2",
    "ProjectFieldId":"122",
    "FieldTypeId":"TextArea",
    "SortValue":"2",
    "Access":"YES",
    "Status": "Done",
    "IsActive": "1Done",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Gretting",
    "PlaceHolder":"Text Place holder",
    "Answer":"Hello World!",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-text-area>Text area directive</bi-text-area>"
  },

    {"ProjectId":"3",
    "ProjectFieldId":"123",
    "FieldTypeId":"CheckList",
    "SortValues":"2",
    "Access":"No",
    "Status": "Done",
    "IsActive": "1Done",
    "OptionList":"1,2,3,4",
    "OptionListOrientation":"inline",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"General List",
    "PlaceHolder":"Text Place holder",
    "Answer":"1",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-grid>grid Directive</bi-grid>"
  },

    {"ProjectId":"4",
    "ProjectFieldId":"124",
    "FieldTypeId":"RadioList",
    "SortValue":"2",
    "Access":"YES",
    "Status": "Not Started",
    "IsActive": "1Not Started",
    "OptionList":"1,2,3,4",
    "OptionListOrientation":"inline",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"General Radio List",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-label>label Directive</bi-label>"
  },
  {"ProjectId":"5",
    "ProjectFieldId":"125",
    "FieldTypeId":"Grid",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"General Grid",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-label>label Directive</bi-label>"
    },

    {"ProjectId":"6",
    "ProjectFieldId":"126",
    "FieldTypeId":"DropDown",
    "SortValues":"2",
    "Access":"No",
    "Status": "In Progress",
    "IsActive": "1In Progress",
    "OptionList":"Start, Complete",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"General DropDown",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-title>title Directive</bi-title>"
  },

{
    "ProjectId":"7",
    "ProjectFieldId":"127",
    "FieldTypeId":"Title",
    "SortValue":"2",
    "Access":"Yes",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Title of Project",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-sub-title>sub-title Directive</bi-sub-title>"
  },

    {"ProjectId":"8",
    "ProjectFieldId":"128",
    "FieldTypeId":"Subtitle",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Subtitle of Project",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-dropdown>dropdown Directive</bi-dropdown>"
  },
    {
    "ProjectId":"9",
    "ProjectFieldId":"129",
    "FieldTypeId":"Picture",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"Logo of the Companyhello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Picture/ Logo of Company",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-typeahead>typeahead Directive</bi-typeahead>"
  },
    {
    "ProjectId":"10",
    "ProjectFieldId":"130",
    "FieldTypeId":"Picture",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"Logo of the Companyhello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Picture/ Logo of Company",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-radio-list>radio-list Directive</bi-radio-list>"
  },
    {
    "ProjectId":"11",
    "ProjectFieldId":"130",
    "FieldTypeId":"Picture",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"Logo of the Companyhello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Picture/ Logo of Company",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"",
    "directive":"<bi-check-list>check-list Directive</bi-check-list>"
  }
];
    }
  };
});
