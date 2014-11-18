angular.module('ngSandboxApp').factory('skillsFactory',function($http){
  'use strict';
  var skills = [];
  var fetch = function(){
    $http.get('http://localhost:3000/skills').success(function(response){
      angular.copy(response,skills);
    });
  };
  return {
    skills: skills,
    fetch: fetch
  };
});