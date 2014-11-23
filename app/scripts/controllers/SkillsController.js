angular.module('ngSandboxApp').controller('SkillsCtrl',function($scope,$http,skillsFactory,ServerUrl,trace){
  'use strict';
  $scope.skills = skillsFactory.skills;
  $scope.upsertSkill = function(skill){
    var params = {skill: skill};
    $http.post(ServerUrl + 'skills',params).success(function(response){
      $scope.clearForm();
    });
  };

  $scope.deleteSkill = function(skill){
    var params = {skill:skill};
    $http.delete(ServerUrl + 'skills/' + skill.id).success(function(response){
      $scope.clearForm();
    });
  };

  $scope.clearForm = function(){
    $scope.skill = {};
    skillsFactory.fetch();
  };
});