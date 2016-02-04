'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.directive:biFormCreator
 * @description
 * # Directives
 * Directives of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .directive('biFormCreator', function ($compile) {
    return {
      restrict: "EA",
      scope: {datasrc : '='},
      link : function (scope, element) {
        element.append($compile(scope.datasrc.directive)(scope));
      }
    };
  })
  .directive('toolBarMenu', function ($compile) {
    return {
    restrict: "EA",
    templateUrl:'views/components/tool-bar-menu.html'
    };
  })
  .directive('biVersionControl', function ($compile) {
    return {
      restrict: "EA",
        scope: {src : '='},
              link : function (scope, element) {
                  var template='';
                  var createVersionControl = function (versionControlArrray) {
                    versionControlArrray.forEach(function (obj) {
                    template += "<span class='text-left' style= 'max-width:400px;float:left;word-wrap:break-word;'>" +
                      obj.oldValue +"</span><i><span style='color:#666; font-size-adjust:0.5; float:right;'>" +
                      obj.adminUser + " " + obj.datetime + "</span></i></br><hr>";
                    });
                  };
                  createVersionControl(JSON.parse(scope.src.VersionControl));
                element.append($compile(template)(scope));
              }
          };
  })
  .directive('biText', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-text.html',
               controller:function ($scope) {
                var self = this;
                self.IsActive=true;
              }
           };
  })
  .directive('biDropdown', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-dropdown.html',
               controller:function () {
                var self = this;
                self.IsActive = true;
               }
           };
  })
  .directive('biTextArea', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-text-area.html',
               controller:function ($scope) {
                 var self = this;
                 self.IsActive=true;
               }
           };
  })
  .directive('biLabel', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-label.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
               }
           };
  })
  .directive('biTitle', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-title.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
               }
           };
  })
  .directive('biSubTitle', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-sub-title.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
               }
           };
  })
  .directive('biTypeahead', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-typeahead.html',
               controller:function () {
                var self = this;
                self.IsActive=true;

               }
           };
  })
  .directive('biImage', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-image.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
               }
           };
  })
  .directive('biCheckList', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-check-list.html',
               controller:function ($scope) {
                var self = this;
                self.IsActive=true;
                 self.arraysOfOptions = $scope.datasrc.OptionList.split(',');
                 self.optionsArrayToDisplay = [];
                 while (self.arraysOfOptions.length > 0){
                   self.optionsArrayToDisplay.push(self.arraysOfOptions.splice(0,6));
                 }
               },
               controllerAs: 'CheckListCtrl'
           };
  })
  .directive('biRadioList', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-radio-list.html',
               controller:function ($scope) {
                var self = this;
                self.IsActive=true;
                 self.arraysOfOptions = $scope.datasrc.OptionList.split(',');
                 self.optionsArrayToDisplay = [];
                 while (self.arraysOfOptions.length > 0){
                   self.optionsArrayToDisplay.push(self.arraysOfOptions.splice(0,6));
                 }
                 $('input[type="radio"]').each(function( ) {
                   $(this).blur();
                 });
               },
               controllerAs: 'RadioListCtrl'
           };
  })
  .directive('pinkMe', function blurElemDirective() {
 return {
   restrict: 'A',
   link: function (scope, element) {
     element.bind('click', function () {
       var color = element.css('color');
       if(color === 'rgb(255, 255, 255)'||color === '#ffffff' ||
       color === 'hsl(0, 100%, 100%)'|| color === 'rgb(255, 255, 255)'||
       color === 'hsl(360, 100%, 100%)'||color === '#ffffff'){//test if color is black or white

         element.css('color', '#F65489');
       }else{
         element.css('color', '#ffffff');
       }
     });
   }
 };
})
.directive('biGrid', function () {
      return {
             restrict: "EA",
             templateUrl:'views/components/bi-grid.html',
             controller:function ($scope) {
               $scope.myData = {
                "id": [
                  1,
                  2,
                  3,
                  4
                ],
                "appropriately": [
                  "Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No",
                  "Not Applicable",
                  "",
                  ""
                ],
                "dosage": [
                  "Dosage Form/Route of Administration",
                  "None",
                  "",
                  ""
                ],
                "dosing": [
                  "Interval",
                  "None",
                  "",
                  ""
                ],
                "number": [
                  "0",
                  "1",
                  "2",
                  "3"
                ],
                "product": [
                  "Product Name/Medical Term/Prescription Abbreviation",
                  "None",
                  "",
                  ""
                ],
                "testNames": [
                  "Instructions ->",
                  "ANSLARA",
                  "ANZYLARA",
                  "LARTRANA"
                ],
                "projectId": [
                  "10023",
                  "10023",
                  "10023",
                  "10023"
                ],
                "projectInputControlId": [
                  "10643",
                  "10643",
                  "10643",
                  "10643"
                ],
                "rowId": [
                  "1437499370066",
                  "1437499432516",
                  "1437499437886",
                  "1440188008566"
                ],
                "header":[
                  "id",
                  "appropriately",
                  "dosage",
                  "dosing",
                  "number",
                  "product",
                  "testNames",
                  "projectId",
                  "projectInputControlId",
                  "rowId"
                  ]
              };

               $scope.gridOptions = {
                 headerTemplate: 'views/components/header-template.html',
                 data: [
                   {
                     id: '1',
                     appropriately: 'Name appropriately includes or suggests   composition of the drug product (if applicable) Yes/No',
                     dosage: 'Dosage Form/Route of Administration',
                     dosing: 'Interval',
                     number: '0',
                     product: 'Product Name/Medical Term/Prescription Abbreviation',
                     testNames: 'Instructions ->',
                     projectId: '10023',
                     projectInputControlId: '10643',
                     rowId: '1437499370066'
                   },
                   {
                     id: '2',
                     appropriately: 'Not Applicable',
                     dosage: 'None',
                     dosing: 'None',
                     number: '1',
                     product: 'None',
                     testNames: 'ANSLARA',
                     projectId: '10023',
                     projectInputControlId: '10643',
                     rowId: '1437499432516'
                   },
                   {
                     id: '3',
                     appropriately: '',
                     dosage: '',
                     dosing: '',
                     number: '2',
                     product: '',
                     testNames: 'ANZYLARA',
                     projectId: '10023',
                     projectInputControlId: '10643',
                     rowId: '1437499437886'
                   },
                   {
                     id: '4',
                     appropriately: '',
                     dosage: '',
                     dosing: '',
                     number: '3',
                     product: '',
                     testNames: 'LARTRANA',
                     projectId: '10023',
                     projectInputControlId: '10643',
                     rowId: '1440188008566'
                   },
                 ]
               };
             },
         };
});
