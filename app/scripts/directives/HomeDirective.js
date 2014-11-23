'use strict';
angular.module('MainDirective').directive('homeDirective',function(trace){
  return {
    restrict: 'E',
    template: 
      '<div class="home-container">'+ 
        '<img ng-repeat="i in getNumber(number) track by $index" src="http://placehold.it/350x150"' +
      '</div>',
    link: function($scope,element,attrs){
      $scope.number = 5;
      $scope.getNumber = function(num) {
          return new Array(num);   
      };
      element.bind('click',function(){
        alert('hello world');
      });
      trace('Scope: ', $scope,'Element: ',  element,'Attrs: ', attrs);
    }
  };
});