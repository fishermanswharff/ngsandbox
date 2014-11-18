angular.module('ngSandboxApp').controller('UserCtrl',function($scope,$http,titleFactory,skillsFactory,trace){
  'use strict';
  
  $scope.users = [];

  $http.get('http://localhost:3000/users').success(function(response){
    $scope.users = response;
    $scope.titles = titleFactory.titles;
    $scope.skills = skillsFactory.skills;
  });

  $scope.createUser = function(user){
    var params = { user: user };

    $http.post('http://localhost:3000/users',params).success(function(response){
      $scope.users.push(response);
      $scope.user = {};
    });
  };

  $scope.viewUser = function(user){
    $scope.currentUser = user;
    $scope.currentUserSkills = user.skills;
    trace($scope.currentUser, $scope.currentUserSkills);
  };

  $scope.deleteUser = function(user){
    trace('deleting ' + user.first_name);
  };

  $scope.addUserSkill = function(userSkill){
   
   // userSkill PATCH  /users/:user_id/skills/:id(.:format) skills#update

    trace(userSkill);
  };

});