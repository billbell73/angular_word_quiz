describe("Unit: Testing question in gameServices", function() {

	var mockScore;
	var mockRandomiser;

  beforeEach(function() {

  	module('myApp');

	  mockScore = {
	    correctAnswerIds: function () { return [2,3] }
	  };

		mockRandomiser = {
	    newIdExcluding: function () { return 4 },
	  };

	  module(function ($provide) {
      $provide.value('score', mockScore);
      $provide.value('randomiser', mockRandomiser);
    });
	 	

	});

  it('gameServices should contain a question service',
    inject(function(question) {
    expect(question).not.toEqual(null);
  }));

  // it('should return value from mock dependency', inject(function (game) {
  //     expect(mockScore.nthRound()).toBe(2);
  // }));

   it('should generate new question',
    inject(function(question) {
    question.getNew();
    expect(question.currentId()).toEqual(4);
  }));

   


});
