'use strict';
angular.module('ngSandboxApp').factory('AuthFactory',function($http,$window,ServerUrl){
  var login = function(credentials){
    return $http.post(ServerUrl + 'login',credentials).success(function(response){
      $window.sessionStorage.setItem('ngSandboxApp.user',response.token);
      $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('ngSandboxApp.user');
    });
  };

  var logout = function(credentials){
    return $http.get(ServerUrl + '/logout').success(function(response){
      $window.sessionStorage.removeItem('ngSandboxApp.user');
    });
  };

  var isAuthenticated = function(){
    return !!$window.sessionStorage.getItem('ngSandboxApp.user');
  };

  return {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated
  };
});