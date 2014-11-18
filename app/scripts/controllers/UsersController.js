angular.module('ngSandboxApp').controller('UserCtrl',function($scope,$http,titleFactory,skillsFactory,trace){
  'use strict';
  
  $scope.users = [];
  $scope.selection = { ids: {}};
  $scope.master = {};

  // get all users, set the scope for titles and skills
  $http.get('http://localhost:3000/users').success(function(response){
    $scope.users = response;
    $scope.titles = titleFactory.titles;
    $scope.skills = skillsFactory.skills;
  });

  // for creating and updating users
  // TODO: update skills: not working because hasSkill(skill) doesn't assign $scope.selection.ids
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

  // set the scope to the selected user
  $scope.updateUser = function(user){
    $scope.user = user;
  };

  // set the checkboxes to be checked if the user has a skill
  // this runs for every item in the skills array
  $scope.hasSkill = function(skill){
    
    // array to push items into
    var found = [];

    // if !(user and user.skills is undefined) then we can do a thing
    if (typeof $scope.user !== 'undefined' && typeof $scope.user.skills !== 'undefined') {
      // found is assigned to the filtering of user.skills
      found = $scope.user.skills.filter(function(item) {
        // return the item that's being iterated over only if it's id matches the skill.id passed into the function
        return item.id === skill.id;
      });
    }
    // this gets returned as a truthy or falsy statement. 
    // if found.length is greater than 0 that means that we found a match.
    return found.length > 0;
  };

  // view the deets of a particular user
  $scope.viewUser = function(user){
    $scope.currentUser = user;
    $scope.currentUserSkills = user.skills;
  };

  // destroy users
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

  // reset the form by calling this function 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
    $scope.selection = angular.copy($scope.master);
  };

  // reset the form
  $scope.reset();

});