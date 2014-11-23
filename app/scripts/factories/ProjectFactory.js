'use strict';
angular.module('ngSandboxApp').factory('ProjectFactory',function($http){
  var projects = [];

  var fetch = function(){
    $http.get('http://localhost:3000/projects').success(function(response){
      angular.copy(response,projects);
    });
  };

  return {
    projects: projects,
    fetch: fetch
  };
});