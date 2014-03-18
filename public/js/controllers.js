'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function(data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function(data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).controller('GameCtrl', function($scope, game) {

    game.clearScore();
    renderNewRound(); 
    
    function renderNewRound() {
      game.newRound();
      $scope.currentRound = game.currentRound();
    }

    $scope.submitAnswer = function(answerId){
      game.updateGame(answerId);
      if (game.isOngoing()) {
        renderNewRound();
      } else {
        $scope.endGame = true;
      }
    }


  }).controller('MyCtrl2', function($scope) {
    // write Ctrl here

  });