angular.module('ngSandboxApp').config(function($routeProvider) {
  'use strict';
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
    .when('/skills',{
      templateUrl: 'views/skills.html',
      controller: 'SkillsCtrl'
    })
    .when('/login',{
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });