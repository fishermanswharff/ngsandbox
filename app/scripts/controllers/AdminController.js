'use strict';

angular.module('ngSandboxApp').controller('AdminCtrl',function($http,$scope,trace){
  
  $scope.dashboard = [];
  
  $http.get('http://localhost:3000/dashboards')
    .success(function(response){
      trace(response.status);
  }).error(function(data,status,headers,config){
    trace(data,status,headers,config);
  });



});