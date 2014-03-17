'use strict';

/* Services */


angular.module('myApp.gameServices', [])
  .factory('game', function(words, score, question, answers){

    var firstQuestion = words[0].en;

    function currentRound(){
    	return {
    		roundNumber: score.nthRound(),
    		keyword: question.keyword(),
    		definition: question.definition(),
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
    	},
    	keyword: function(){
    		return word.en;
    	},
    	definition: function(){
    		return word.def;
    	},

    };


  }).factory('randomiser', function(words){

  	function randomWord(){
	    return Math.floor(Math.random() * words.length);
	  }
  	
  	function newIdExcluding(numbers){

  		function matchesAny(id, numbers){
	      for(var i=0; i< numbers.length; i++){
	        if(id === numbers[i]){
	          return true;
	        }
	      }
	    }
	    var newId = randomWord();

	    while(matchesAny(newId, numbers)){
	      newId = randomWord();
	    }
	    return newId;
	  }

	  function ranker() {
	  	return Math.random();
	  }

    return {
    	newIdExcluding: newIdExcluding,
    	ranker: ranker
    };

  });