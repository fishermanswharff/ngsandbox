'use strict';
angular.module('ngSandboxApp').factory('RequestsFactory',function($http){
  var requests = [];
  var fetch = function(){
    $http.get('http://localhost:3000/staffing_requests').success(function(response){
      angular.copy(response,requests);
    });
  };

  return {
    requests: requests,
    fetch: fetch
  };
});