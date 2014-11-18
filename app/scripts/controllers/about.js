'use strict';

/**
 * @ngdoc function
 * @name ngsandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngsandboxApp
 */
angular.module('ngsandboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
