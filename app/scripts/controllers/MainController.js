'use strict';

/**
 * @ngdoc function
 * @name ngsandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngsandboxApp
 */
angular.module('ngSandboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });