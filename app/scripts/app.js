'use strict';

/**
 * @ngdoc overview
 * @name biprojectDevelopmentApp
 * @description
 * # biprojectDevelopmentApp
 *
 * Main module of the application.
 */
angular
  .module('biprojectDevelopmentApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.resizeColumns',
    'jqwidgets',
    'ngMdIcons',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/template/:projectChosen', {
        templateUrl: 'views/template.html',
        controller: 'TemplateCtrl',
        controllerAs: 'template',
        resolve: {
          route: function($q, $window, $route) {
            var deferred = $q.defer();
            var queryString = $route.current.params.projectChosen;
            if (queryString !== undefined) {
              deferred.resolve(queryString);
            } else {
              deferred.reject('not_id');
              //$window.location.href = '/chooseProject';
            }
            return deferred.promise;
          }
        }
      })
      .when('/:projectId', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
          resolve: {
            queryString: function($q, $location, $route) {
                          var deferred = $q.defer();
                          var queryString =  $route.current.params.projectId;
                          if (queryString !== undefined) {
                              deferred.resolve(queryString);
                          } else {
                              deferred.reject('not_id');
                          }
                          return deferred.promise;
                      }
                  }
        })
      .otherwise({
        redirectTo: '/'
      });
  });
