'use strict';

/* Services */


angular.module('myApp.gameServices', [])
  .factory('game', function(words, score, question, answers){

    var recentAnswerId, recentAnswerCorrect;

    function updateGame(answerId){
    	recentAnswerId = answerId;
    	recentAnswerCorrect = answerId === question.currentId();
    	score.addCorrectAnswer(recentAnswerCorrect, answerId)
    }

    function newRound(){
    	question.getNew();
    	answers.getNew();
    }

    function currentRound(){
    	return {
    		roundNumber: score.nthRound(),
    		keyword: question.keyword(),
    		definition: question.definition(),
    		answerList: answers.list(),
    	};
    }

    function isOngoing() {
  		if(recentAnswerCorrect && !finalRoundPlayed()){ return true; } 
  	}

  	function finalRoundPlayed() {
  		return score.finalRoundPlayed();
  	}



    return {
      currentRound: currentRound,
      updateGame: updateGame,
      newRound: newRound,
      isOngoing: isOngoing,
      recentAnswerId: function(){
      	return recentAnswerId;
      },
      recentAnswerCorrect: function() {
      	return recentAnswerCorrect;
      }
    };

  }).factory('score', function(){

  	var correctAnswerIds = [];

  	function addCorrectAnswer(isCorrect, id){
  		if(isCorrect) {
  			correctAnswerIds.push(id);
  		}
  	}

		function clearAnswers(){
  		correctAnswerIds = [];
  	}

    return {
    	addCorrectAnswer: addCorrectAnswer,
    	clearAnswers: clearAnswers,
    	correctAnswerIds: function () {
    		return correctAnswerIds;
    	},
    	nthRound: function(){
    		return correctAnswerIds.length + 1;
    	},
    	finalRoundPlayed: function(){
    		return correctAnswerIds.length > 2;
    	}
    };

  }).factory('question', function(words, score, randomiser){

  	var currentId, word;

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

  }).factory('answers', function(words, score, question, randomiser){

  	var answerList, idsToAvoid;

		function getNew(){
			populateIdsToAvoid();
			answerList = [];
			pushWrongAnswer();
			pushWrongAnswer();
			pushToList(correctAnswer(), question.currentId(), true)
		}

		function populateIdsToAvoid(){
			idsToAvoid = [];
			idsToAvoid.push(score.correctAnswerIds());
			idsToAvoid.push(question.currentId());
		}

		function pushWrongAnswer(){
			var wrongAnswerId = randomiser.newIdExcluding(idsToAvoid);
			pushToList(words[wrongAnswerId].es, wrongAnswerId, false);
			idsToAvoid.push(wrongAnswerId);
		}

		function pushToList(answer, answerId, isCorrect){
	  	answerList.push({
	  		word: answer,
	  		id: answerId,
	  		isCorrect: isCorrect,
	      rank: randomiser.ranker()
	  	})
	  }

		function correctAnswer(){
			return words[question.currentId()].es;
		}

    return {
    	correctAnswer: correctAnswer,
    	getNew: getNew,
    	list: function () {
    		return answerList;
    	}
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