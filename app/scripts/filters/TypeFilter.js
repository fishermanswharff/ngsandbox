'use strict';
angular.module('ngSandboxApp').filter('initializeName',function(trace){
  return function(params){
    if(params) return params.charAt(0).toUpperCase();
  };
});

angular.module('ngSandboxApp').filter('capitalize',function(trace){
  return function(params){
    if(params){
      var array = params.split(' ');
      array = array.map(function(item){
        item = item.split('');
        return item[0].toUpperCase() + item.slice(1,item.length).join('');
      });
      return array.join(' ');
    } 
  };
});