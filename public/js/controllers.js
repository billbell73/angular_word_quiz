'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope, $http) {


  }).controller('GameCtrl', function($scope,
                                     $http, 
                                     $location,
                                     $timeout,
                                      game,
                                      commentary) {

    game.clearScore();
    renderNewRound(); 
    
    function renderNewRound() {
      game.newRound();
      $scope.currentRound = game.currentRound();
      $scope.commentary = "";
      $scope.getButtonColour = "";
    }

    $scope.submitAnswer = function(answerId){
      game.updateGame(answerId);
      $scope.commentary = commentary.message();
      $scope.getButtonColour = commentary.getButtonColour;
      if (game.isOngoing()) {
        $timeout(function() { renderNewRound(); }, 700);
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