angular.module('ngSandboxApp').controller('UserCtrl',function($scope,$http,titleFactory,skillsFactory,trace){
  'use strict';
  
  $scope.users = [];
  $scope.selection = { ids: {}};
  $scope.master = {};

  $http.get('http://localhost:3000/users').success(function(response){
    $scope.users = response;
    $scope.titles = titleFactory.titles;
    $scope.skills = skillsFactory.skills;
  });

  $scope.upsertUser = function(user){
    var params = { user: user };
    if(user.id){
      $http.put('http://localhost:3000/users/'+user.id, params).success(function(response){
        trace(response);
      });
    } else {
      $http.post('http://localhost:3000/users',params).success(function(response){
        $scope.users.push(response);
        trace(response);
        angular.forEach($scope.selection.ids,function(key,value){
          $http.put('http://localhost:3000/users/'+response.id+'/skills/'+value).success(function(response){
            trace(response);
          });
        });
      });
    }
    $scope.user = {};
  };

  $scope.updateUser = function(user){
    $scope.user = user;
  };

  $scope.hasSkill = function(skill){
    var found = [];
    if (typeof $scope.user !== 'undefined' && typeof $scope.user.skills !== 'undefined') {
      found = $scope.user.skills.filter(function(item) {
        return item.id === skill.id;
      });
    }
    return found.length > 0;
  };

  $scope.viewUser = function(user){
    $scope.currentUser = user;
    $scope.currentUserSkills = user.skills;
  };

  $scope.deleteUser = function(user){
    $http.delete('http://localhost:3000/users/'+user.id).success(function(response){
      trace(response);
      for (var i = 0; i < $scope.users.length; i++){
        if($scope.users[i].id === user.id){
          $scope.users.splice(i, 1);
          break;
        }
      }
    });
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
    $scope.selection = angular.copy($scope.master);
  };

  // $scope.reset();

});






























