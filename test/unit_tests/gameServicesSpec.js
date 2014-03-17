describe("Unit: Testing gameServices", function() {

	var mockScore;
	var mockQuestion;
	var mockAnswers;

  beforeEach(function() {

  	module('myApp');

	  mockScore = {
	    nthRound: function () { return 2 }
	  };

		mockQuestion = {
	    word: function () {},
	    phrase: function () {}
	  };

		mockAnswers = {
	    list: function () {}
	  };

	  module(function ($provide) {
      $provide.value('score', mockScore);
      $provide.value('question', mockQuestion);
      $provide.value('answers', mockAnswers);
    });
	 	

	});

  it('should contain a game service',
    inject(function(game) {
    expect(game).not.toEqual(null);
  }));

  it('should return value from mock dependency', inject(function (game) {
      expect(mockScore.nthRound()).toBe(2);
  }));

   it('should retrieve roundNumber from score service',
    inject(function(game) {
    expect(game.currentRound().roundNumber).toEqual(2);
  }));

   


});
