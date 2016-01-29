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
               transclude: true,
               replace: true,
               templateUrl:'views/components/bi-typeahead.html',
               controller:function () {
                var self = this;
                self.IsActive=true;
                 self.mystyle = '{color:"blue"}';
                 self.onSelect = function(slideName) {
                    var foundMatch = false;
                    var amount = 0;
                    if(self.testName.indexOf(slideName) < 0){
                      while(foundMatch === false){
                        if(slideName === self.slides[amount].SlideDescription){
                          var numberOfPage = self.slides[amount].$id;
                          self.selectSlide(parseInt(numberOfPage)-1);
                          foundMatch = true;
                        }else {
                          amount += 1;
                          foundMatch = false;
                        }
                      }
                    }else{
                        self.selectedName = slideName;
                        if (parseInt(self.pageNumber) === 1) {
                            self.progressBarValue = 0;
                        } else {
                            self.progressBarValue = (parseInt(self.pageNumber) * self.progressBarUnit);
                        }
                      }
                    };
               }
           };
  });
