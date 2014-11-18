angular.module('ngSandboxApp').factory('titleFactory',function($http){
  'use strict';
  var titles = [];
  var fetch = function(){
    $http.get('http://localhost:3000/titles').success(function(response){
      angular.copy(response,titles);
    });
  };

  /*var post = function(params){
    $http.post('http://localhost:3000/titles', params).success(function(response){

    });
  };*/

  return {
    titles: titles,
    fetch: fetch
  };
});