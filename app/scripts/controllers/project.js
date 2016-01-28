'use strict';

/**
 * @ngdoc function
 * @name biprojectDevelopmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the biprojectDevelopmentApp
 */
angular.module('biprojectDevelopmentApp')
  .controller('ProjectCtrl',[ 'getProjectFields', function (getProjectFields) {
     this.formElementsData = getProjectFields.getProjectFields();
  }]);
