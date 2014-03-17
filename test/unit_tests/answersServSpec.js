describe("Unit: Testing question in gameServices", function() {

	var mockScore;
  var mockQuestion;
	var mockRandomiser;

  beforeEach(function() {

  	module('myApp');

	  mockScore = {
	    correctAnswerIds: function () { return [2,3] }
	  };

    mockQuestion = {
      currentId: function () { return 7 }
    };

		mockRandomiser = {
	    newIdExcluding: function () { return 4 },
	  };

	  module(function ($provide) {
      $provide.value('score', mockScore);
      $provide.value('question', mockQuestion);
      $provide.value('randomiser', mockRandomiser);
    });
	 	

	});

  it('answers service should be reachable',
    inject(function(answers) {
    expect(answers).not.toEqual(null);
  }));

  it('knows correct answer',
    inject(function(answers) {
    expect(answers.correctAnswer()).toEqual('Sol');
  }));

});
