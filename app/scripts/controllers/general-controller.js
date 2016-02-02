'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
.controller('generalController', ['$scope',
  function($scope){
    $scope.showMenuToggle = function(){
      if ($scope.hideToggle !== true){
         $scope.hideToggle = true;
         $scope.showToggle = true;
      }
      else{
        $scope.hideToggle = false;
        $scope.showToggle = false;
      }
    };
  }]);
