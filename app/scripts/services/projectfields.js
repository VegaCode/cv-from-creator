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
.factory('bidocsGetProject', [
    '$http','$q',
    function($http, $q) {
        var apiCall, deferred, factory,  _getProject;
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
    "FieldTypeId":"Text",
    "SortValue":"2",
    "Access":"YES",
    "Status": "In Progress",
    "IsActive": "1In Progress",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"<h1>hello world</h1>",
    "ToolTipPlacement":"top",
    "ToolTipTrigger": "mouseenter",
    "Label":"General Information Text Directive questions label",
    "PlaceHolder":"Text Place holder",
    "Answer":"I'm an answer",
    "VersionControl": '[{"oldValue":"cesar oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"},{"oldValue":"oldValueoldValueoldValueoldValueoldValueoldValue oldValueOld record 1Old record 1Old record 1Old record 1Old record 1Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
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
    "Label":"Text Area Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"Hello World!",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-text-area>Text area directive</bi-text-area>"
  },

    {"ProjectId":"3",
    "ProjectFieldId":"123",
    "FieldTypeId":"Grid",
    "SortValues":"2",
    "Access":"No",
    "Status": "Done",
    "IsActive": "1Done",
    "OptionList":"1,2,3,4",
    "OptionListOrientation":"inline",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Grid Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"1",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-grid>grid Directive</bi-grid>"
  },

    {"ProjectId":"4",
    "ProjectFieldId":"124",
    "FieldTypeId":"Label",
    "SortValue":"2",
    "Access":"YES",
    "Status": "Not Started",
    "IsActive": "1Not Started",
    "OptionList":"1,2,3,4",
    "OptionListOrientation":"inline",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Label Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-label>label Directive</bi-label>"
  },
  {"ProjectId":"5",
    "ProjectFieldId":"125",
    "FieldTypeId":"Label",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Label Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrjr_RxTZY1x30vZ-FYOWrCwJm4JwJK_QBuj0nExUGpJk98y1Pjw",
    "directive":"<bi-image>image Directive</bi-image>"
    },

    {"ProjectId":"6",
    "ProjectFieldId":"126",
    "FieldTypeId":"Title",
    "SortValues":"2",
    "Access":"No",
    "Status": "In Progress",
    "IsActive": "1In Progress",
    "OptionList":"Start, Complete",
    "OptionListOrientation":"",
    "ToolTip":'<bi-version-control src="datasrc"></bi-version-control>',
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Title of Project",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-title>title Directive</bi-title>"
  },

{
    "ProjectId":"7",
    "ProjectFieldId":"127",
    "FieldTypeId":"Subtitle",
    "SortValue":"2",
    "Access":"Yes",
    "Status": "",
    "IsActive": "1",
    "OptionList":"",
    "OptionListOrientation":"",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Subitle of Project",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-sub-title>sub-title Directive</bi-sub-title>"
  },

    {"ProjectId":"8",
    "ProjectFieldId":"128",
    "FieldTypeId":"dropdown",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"one,two,three,four",
    "OptionListOrientation":"inline",
    "ToolTip":"hello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Dropdown Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-dropdown>dropdown Directive</bi-dropdown>"
  },
    {
    "ProjectId":"9",
    "ProjectFieldId":"129",
    "FieldTypeId":"Typeahead",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"One,Two,Three,Four,Five",
    "OptionListOrientation":"",
    "ToolTip":"Logo of the Companyhello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Typeahead Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-typeahead>typeahead Directive</bi-typeahead>"
  },
    {
    "ProjectId":"10",
    "ProjectFieldId":"130",
    "FieldTypeId":"radio-list",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"OneOne,TwoOne,ThreeOne,Four,FiveOneOne,Six",
    "OptionListOrientation":"radio-inline",
    "ToolTip":"Logo of the Companyhello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Radio List Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-radio-list>radio-list Directive</bi-radio-list>"
  },
    {
    "ProjectId":"11",
    "ProjectFieldId":"130",
    "FieldTypeId":"check-list",
    "SortValue":"2",
    "Access":"YES",
    "Status": "",
    "IsActive": "1",
    "OptionList":"OneOne,TwoOne,ThreeOne,Four,FiveOneOne,Six",
    "OptionListOrientation":"checkbox-inline",
    "ToolTip":"Logo of the Companyhello tooltip",
    "ToolTipPlacement":"right",
    "ToolTipTrigger": "mouseenter",
    "Label":"Check List Directive",
    "PlaceHolder":"Text Place holder",
    "Answer":"",
    "VersionControl": '[{"oldValue":"Old record 1","datetime":": June /  29 / 2015 Time:  04:09:01 PM","adminUser":"cvega"},{"oldValue":"Other record 2","datetime":": July /  22 / 2015 Time:  04:09:01 PM","adminUser":"cacev"}]',
    "TemplateName":"RX",
    "GridConfig":"",
    "width": "100%",
    "ImageUrl":"",
    "directive":"<bi-check-list>check-list Directive</bi-check-list>"
  }
];
    }
  };
});
