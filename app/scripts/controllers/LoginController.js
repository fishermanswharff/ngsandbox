angular.module('ngSandboxApp').controller('LoginCtrl',function($scope,$location,AuthFactory){
  'use strict';

  $scope.createUser = false;
  
  $scope.login = function(credentials){
    AuthFactory.login(credentials).success(function(response){
      $location.path('/');
    });
  };
  
  $scope.newUser = function(){
    $scope.createUser = true;
  };
});