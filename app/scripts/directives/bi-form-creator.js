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
  });
