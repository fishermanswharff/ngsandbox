angular.module('ngSandboxApp').controller('UserCtrl',function($scope,$http,$q,ServerUrl,titleFactory,skillsFactory,trace){
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

  var updateSkills = function(user_id) {
    var promises = [];
    _.forEach($scope.skills, function(item) {
      var isChecked = item.checked;
      var wasChecked = typeof _.find($scope.user.skills, {id: item.id}) !== 'undefined';
      // add skill
      if (isChecked && !wasChecked) {
        promises.push($http.put('http://localhost:3000/users/' + user_id + '/skills/' + item.id));
      }
      // remove skill
      if (!isChecked && wasChecked) {
        promises.push($http.delete('http://localhost:3000/users/' + user_id + '/skills/' + item.id));
      }
    });
    return promises;
  };
  
  // for creating and updating users
  // TODO: update skills: not working because hasSkill(skill) doesn't assign $scope.selection.ids
  $scope.upsertUser = function(user){
    var params = { user: user };
    if(user.id){
      $http.put(ServerUrl + 'users/' + user.id, params).success(function(response){
         trace(response);
        $q.all(updateSkills(user.id)).then(function() {
          $scope.reset();
        });
      });
    } else {
      $http.post('http://localhost:3000/users',params).success(function(response){
        trace(response);
        $http.post(ServerUrl + 'users', params).success(function(response) {
          $q.all(updateSkills(response.id)).then(function() {
            $scope.reset();
          });
        });
      });
    }
    $scope.user = {};
  };

  // set the scope to the selected user
  $scope.updateUser = function(user){
    $scope.user = user;
    _.forEach($scope.skills, function(item) {
      if ($scope.hasSkill(item)) {
        item.checked = true;
      }
    });
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
    // $scope.currentUserSkills = user.skills;
  };

  // destroy users
  $scope.deleteUser = function(user){
    $http.delete(ServerUrl + 'users/' + user.id).success(function(response) {
      $scope.users.splice($scope.users.indexOf(user), 1);
      $scope.reset();
    });
  };

  // reset the form by calling this function 
  $scope.reset = function() {
    // $scope.user = angular.copy($scope.master);
    $scope.selection = angular.copy($scope.master);
    skillsFactory.resetChecked();
  };

  // reset the form
  $scope.reset();

});