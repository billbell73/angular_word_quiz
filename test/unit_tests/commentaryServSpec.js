describe("Unit: Testing answers in gameServices", function() {

	var mockGame;

  beforeEach(function() {

  	module('myApp');

	  mockGame = {
	    correctAnswerIds: jasmine.createSpy('correctAnswerIds')
	  };

	  module(function ($provide) {
      $provide.value('game', mockGame);
    });
	 	
	});

  it('answers service should be reachable',
    inject(function(commentary) {
    expect(commentary).not.toEqual(null);
  }));


});
