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
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "hover",
    "Label":"General Information",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"Gretting",
    "PlaceHolder":"Text Place holder",
    "Answer":"Hello World!",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"General List",
    "PlaceHolder":"Text Place holder",
    "Answer":"1",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"General Radio List",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"General Grid",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":"C"
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
    "ToolTipTrigger": "hover",
    "Label":"General DropDown",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"Title of Project",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"Subtitle of Project",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
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
    "ToolTipTrigger": "hover",
    "Label":"Picture/ Logo of Company",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": "<span>hello version</span>",
    "TemplateName":"RX",
    "GridConfig":""
  }];
    }
  };
});
