'use strict';

/**
 * @ngdoc function
 * @name ngsandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngsandboxApp
 */
angular.module('ngSandboxApp').controller('MainCtrl', function($scope,trace,RequestsFactory,userFactory,skillsFactory,titleFactory,ProjectFactory) {

  $scope.users = userFactory.users;
  $scope.requests = RequestsFactory.requests;
  $scope.projects = ProjectFactory.projects;
  $scope.titles = titleFactory.titles;

  $scope.hasRequest = function(project){
    var reqs = [];
    reqs = $scope.requests.filter(function(item){
      return item.project_id === project.id;
    });
    return reqs.length > 0;
  };

  $scope.projectReqs = function(project){
    trace(project);
  };
  
  // trace($scope.requests);
  
});