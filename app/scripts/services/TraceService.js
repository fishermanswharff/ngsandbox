angular.module('ngSandboxApp').factory('trace',function(){
  'use strict';
  
  var trace = function(){
    for(var i = 0; i < arguments.length; i++){
      console.log(arguments[i]);
    }
  };
  return trace;
});