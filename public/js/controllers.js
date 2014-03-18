'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope, $http) {


  }).controller('GameCtrl', function($scope,
                                     $http, 
                                     $location,
                                      game) {

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

    $scope.updateHighScores = function() {
      $http({
        method: 'POST',
        url: 'api/highscore',
        data: { 
              playerName: this.playerName,
              score: game.score()
        }
      }).
      success(function() {
        $location.path("/highscore");
      })
    }


  }).controller('HighScoreCtrl', function($scope, $http) {
      
      $http({
        method: 'GET',
        url: '/api/highscore'
      }).
      success(function(data) {
        $scope.scoreBoard = data.scoreBoard;
      });

  });