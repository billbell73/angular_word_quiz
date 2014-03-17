'use strict';

/* Services */


angular.module('myApp.gameServices', [])
  .factory('game', function(words, score, question, answers){

    var firstQuestion = words[0].en;

    function currentRound(){
    	return {
    		roundNumber: score.nthRound(),
    		questionWord: question.word(),
    		questionPhrase: question.phrase(),
    		answerList: answers.list(),
    	};
    }

    return {
      firstQuestion: firstQuestion,
      currentRound: currentRound
    };


  });