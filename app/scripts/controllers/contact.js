'use strict';
angular.module('ngsandboxApp').controller('ContactCtrl',function($scope){
  function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}}
  $scope.contact = function(){
    trace($scope);
  };
});