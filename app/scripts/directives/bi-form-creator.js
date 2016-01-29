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
  .directive('biVersionControl', function ($compile) {
    return {
      restrict: "EA",
        scope: {src : '='},
              link : function (scope, element) {
                  var template='';
                  var createVersionControl = function (versionControlArrray) {
                    versionControlArrray.forEach(function (obj) {
                    template += "<div style='paddin-top:10px !important;'><span class='text-left' style=max-width:400px;float:left;word-wrap:break-word;'>" +
                      obj.oldValue +"</span><i><span style='color:#666; font-size-adjust:0.5; float:right;'>" +
                      obj.adminUser + " " + obj.datetime + "</span></i></br><hr><div>";
                    })
                  }
                  createVersionControl(JSON.parse(scope.src.VersionControl));
                element.append($compile(template)(scope));
              }
          }
  })
  .directive('biText', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-text.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
                self.text = '<div>Some text</div>';
              }, controllerAs:'biTextCtrl'
           };
  })
  .directive('biDropdown', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-dropdown.html',
               controller:function ($scope) {
                var self = this;
                self.IsActive = true;
               }
           };
  })
  .directive('biRadioList', function () {
        return {
               restrict: "EA",
               templateUrl:'views/components/bi-dropdown.html',
               controller:function ($scope) {
                var self = this;
                self.IsActive = true;
               }
           };
  });
