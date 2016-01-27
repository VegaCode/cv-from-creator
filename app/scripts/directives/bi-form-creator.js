'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .directive('biFormCreator', function () {
    return {
           restrict: "EA",
           scope:{
               sourceData:'='
           },
            link:function (scope, element, attrs) {
            //element.css('color','red')
          },
          controllerAs:'biForm',
           template:'<h1 ng-style="{{biForm.mystyle}}">hello world</h1>',
           controller:function () {
            var self = this;
             self.mystyle = '{color:"blue"}';
           }
       };
      // return {
      //     restrict: 'A',
      //     transclude: true,
      //     scope: {
      //           sourceData: '='
      //       },
      //       link: function($scope, $http, $modal){
      //
      //       },
      //       template:'<p ng-repeat="item in project.awesomeThings">{{item}}</p>',
      //       controller: function($scope, $http, $modal){
      //
      //       }
      // }
  });
