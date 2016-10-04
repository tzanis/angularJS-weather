'use strict';

/**
 * @ngdoc overview
 * @name ngWeatherApp
 * @description
 * # ngWeatherApp
 *
 * Main module of the application.
 */
angular
  .module('ngWeatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
