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
    'ui.bootstrap',
    'ngMaterial',
    'vAccordion'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
      .when('/project/:project/:template/:templateid', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project',
        resolve: {
            queryStringCheck: function($q, $location, $route) {
                var deferred = $q.defer();
                var projectName = $route.current.params.project;
                var template = $route.current.params.template;
                var templateid = $route.current.params.templateid;
                if (template !== undefined) {
                    deferred.resolve(projectName + ',' + templateid);
                } else {
                    deferred.reject('not_id');
                    $location.path('/chooseProject');
                }
                return deferred.promise;
            }
        }
      })
      .when('/chooseTemplate/:projectChosen', {
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
      .otherwise({
        redirectTo: '/'
      });
  });
