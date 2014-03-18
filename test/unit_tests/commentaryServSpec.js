describe("Unit: Testing answers in gameServices", function() {

	var mockGame;
  var mockAnswers;

  beforeEach(function() {

  	module('myApp');

	  mockGame = {
      threeCorrectAnswers: function(){ return false },
      recentAnswerCorrect: function(){ return false }
    };

    mockAnswers = {
      correctAnswer: jasmine.createSpy('correctAnswer')
	  };

	  module(function ($provide) {
      $provide.value('game', mockGame);
      $provide.value('answers', mockAnswers);
    });
	 	
	});

  it('answers service should be reachable',
    inject(function(commentary) {
    expect(commentary).not.toEqual(null);
  }));

  it('message should return appropriate class for alert box',
    inject(function(commentary) {
    expect(commentary.message().alert).toEqual('alert-danger');
  }));

  it('message should return appropriate text',
    inject(function(commentary) {
    commentary.message();
    expect(mockAnswers.correctAnswer).toHaveBeenCalled();
  }));







});
