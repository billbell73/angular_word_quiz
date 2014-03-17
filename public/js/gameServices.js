'use strict';

/* Services */


angular.module('myApp.gameServices', [])
  .factory('game', function(words, score, question, answers){

    var firstQuestion = words[0].en;

    function currentRound(){
    	return {
    		roundNumber: score.nthRound(),
    		questionWord: question.keyword(),
    		questionPhrase: question.phrase(),
    		answerList: answers.list(),
    	};
    }

    return {
      firstQuestion: firstQuestion,
      currentRound: currentRound
    };


  }).factory('question', function(words, score, randomiser){

  	var currentId, word;

  	getNew();

  	function getNew(){
  		currentId = randomiser.newIdExcluding(score.correctAnswerIds());
  		word = words[currentId];
  	}



    return {
    	getNew: getNew,
    	currentId: function(){
    		return currentId;
    	}


    };


  });