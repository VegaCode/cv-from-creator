'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:AboutCtrl
 * @description
 * # Directives
 * Controller of the biprojectDevelopmentApp
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
  .directive('biText', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-text.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
                 self.mystyle = '{color:"blue"}';
               }
           };
  })
  .directive('biTextArea', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-text-area.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
                 self.mystyle = '{color:"blue"}';
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
                 self.mystyle = '{color:"blue"}';
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
                 self.mystyle = '{color:"blue"}';
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
                 self.mystyle = '{color:"blue"}';
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
                 self.mystyle = '{color:"blue"}';

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
                 self.mystyle = '{color:"blue"}';
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
                 self.mystyle = '{color:"blue"}';
                 self.arraysOfOptions = $scope.datasrc.OptionList.split(',');
                 self.optionsArrayToDisplay = [];
                 while (self.arraysOfOptions.length > 0){
                   self.optionsArrayToDisplay.push(self.arraysOfOptions.splice(0,4));
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
                 self.mystyle = '{color:"blue"}';
                 self.arraysOfOptions = $scope.datasrc.OptionList.split(',');
                 self.optionsArrayToDisplay = [];
                 while (self.arraysOfOptions.length > 0){
                   self.optionsArrayToDisplay.push(self.arraysOfOptions.splice(0,4));
                 }
               },
               controllerAs: 'RadioListCtrl'
           };
  });
