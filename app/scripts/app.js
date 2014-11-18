'use strict';

/**
 * @ngdoc overview
 * @name ngsandboxApp
 * @description
 * # ngsandboxApp
 *
 * Main module of the application.
 */
angular
  .module('ngSandboxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function(titleFactory){
    titleFactory.fetch();
  }).run(function(skillsFactory){
    skillsFactory.fetch();
  });
