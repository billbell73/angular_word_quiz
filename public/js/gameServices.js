'use strict';

/* Services */


angular.module('myApp.gameServices', [])
  .factory('game', function(words){

    var firstQuestion = words[0].en;

    return {
      firstQuestion: firstQuestion
    };


  });