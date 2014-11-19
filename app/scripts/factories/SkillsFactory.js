angular.module('ngSandboxApp').factory('skillsFactory',function($http){
  'use strict';
  var skills = [];
  var resetChecked = function() {
    _.forEach(skills, function(item) {
      item.checked = false;
    });
  };
  var fetch = function(){
    $http.get('http://localhost:3000/skills').success(function(response){
      angular.copy(response,skills);
      resetChecked();
    });
  };
  return {
    skills: skills,
    fetch: fetch,
    resetChecked: resetChecked
  };
});