describe("Unit: Testing commentaryServices", function() {

	var mockGame;
  var mockAnswers;

  beforeEach(function() {

  	module('myApp');

	  mockGame = {
      threeCorrectAnswers: function(){ return false },
      recentAnswerCorrect: function(){ return false },
      recentAnswerId: function(){ return 9 }
    };

    mockAnswers = {
      correctAnswer: jasmine.createSpy('correctAnswer')
	  };

	  module(function ($provide) {
      $provide.value('game', mockGame);
      $provide.value('answers', mockAnswers);
    });
	 	
	});

  describe('commentary service', function() {

    it('commentary service should be reachable',
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

  describe('buttonColour service', function() {

    it('buttonColour service should be reachable',
      inject(function(buttonColour) {
      expect(buttonColour).not.toEqual(null);
    }));

    it('should return appropriate button class',
      inject(function(buttonColour) {
      expect(buttonColour.getClass(9)).toEqual('btn-danger');
    }));

  });

});
