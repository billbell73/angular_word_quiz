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

  it('should return Id of current question',
    inject(function(question) {
    expect(question.currentId()).toEqual(4);
  }));

  it('should return current question word',
    inject(function(question) {
    expect(question.keyword()).toEqual('Germany');
  }));

   it('should return current question definition',
    inject(function(question) {
    expect(question.definition()).toMatch(/\Berlin/);
  }));

   


});
