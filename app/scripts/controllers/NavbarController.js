angular.module('ngSandboxApp').controller('NavbarCtrl',function($scope,$location){
  'use strict';
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
});