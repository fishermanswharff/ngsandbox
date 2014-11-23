'use strict';

/**
 * @ngdoc overview
 * @name ngsandboxApp
 * @description
 * # ngsandboxApp
 *
 * Main module of the application.
*/
angular.module('ngSandboxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MainDirective'
  ]).run(function($rootScope,$location,$http,$window,AuthFactory,titleFactory,skillsFactory,userFactory,RequestsFactory,ProjectFactory){
    $rootScope.$on('$routeChangeStart', function(event,next){
      if(AuthFactory.isAuthenticated()){
        $http.defaults.headers.common.Authorization = 'Token token=' + $window.sessionStorage.getItem('ngSandboxApp.user');
        titleFactory.fetch();
        skillsFactory.fetch();
        userFactory.fetch();
        RequestsFactory.fetch();
        ProjectFactory.fetch();
      } else {
        $location.path('/login');
      }
    });
});
