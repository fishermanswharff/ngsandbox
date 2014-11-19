angular.module('ngSandboxApp').factory('UserFactory',function($http,ServerUrl){
  'use strict';
  var users = [];
  var fetch = function(){
    $http.get(ServerUrl + 'users').success(function(response){
      angular.copy(response,users);
    });
  };
  return {
    users: users,
    fetch: fetch
  };
});