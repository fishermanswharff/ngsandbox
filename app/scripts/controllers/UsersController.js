angular.module('ngSandboxApp').controller('UserCtrl',function($scope,$http,titleFactory,skillsFactory,trace){
  'use strict';
  
  $scope.users = [];
  $scope.selection = { ids: {}};

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

  $scope.viewUser = function(user){
    $scope.currentUser = user;
    // $scope.currentUserSkills = user.skills;
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

  $scope.addUserSkill = function(skill){
    // $scope.skillToAdd.push(skill);
    // userSkill PATCH  /users/:user_id/skills/:id(.:format) skills#update
    trace(skill);
  };

});