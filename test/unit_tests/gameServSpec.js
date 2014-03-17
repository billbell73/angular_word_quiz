describe("Unit: Testing game in gameServices", function() {

	var mockScore;
	var mockQuestion;
	var mockAnswers;

  beforeEach(function() {

  	module('myApp');

	  mockScore = {
	    nthRound: function () { return 2 },
      addCorrectAnswer: jasmine.createSpy('addCorrectAnswer')
	  };

		mockQuestion = {
	    keyword: function () {},
	    definition: function () {},
      currentId: function() { return 5 },
      getNew: function() {}
	  };

		mockAnswers = {
	    list: function () {},
      getNew: jasmine.createSpy('getNew')
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

  it('updates local recentAnswer variables when answer given',
    inject(function(game) {
    game.updateGame(6);
    expect(game.recentAnswerId()).toEqual(6);
    expect(game.recentAnswerCorrect()).toEqual(false);
  }));

  it('updates answers service when answer given',
    inject(function(game) {
    game.updateGame(5);
    expect(mockScore.addCorrectAnswer).toHaveBeenCalledWith(true, 5);
  }));

  it('can get new question and answers',
    inject(function(game) {
    game.newRound();
    expect(mockAnswers.getNew).toHaveBeenCalled();
  }));



   


});
