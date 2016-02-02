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
});
