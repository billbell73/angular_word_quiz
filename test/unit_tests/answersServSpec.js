describe("Unit: Testing answers in gameServices", function() {

	var mockScore;
  var mockQuestion;
	var mockRandomiser;

  beforeEach(function() {

  	module('myApp');

	  mockScore = {
	    correctAnswerIds: jasmine.createSpy('correctAnswerIds')
	  };

    mockQuestion = {
      currentId: function () { return 7 }
    };

		mockRandomiser = {
      newIdExcluding: function () { return 4 },
	    ranker: function () {}
	  };

	  module(function ($provide) {
      $provide.value('score', mockScore);
      $provide.value('question', mockQuestion);
      $provide.value('randomiser', mockRandomiser);
    });

    inject(function(answers) {
      answers.getNew();
    })
	 	
	});

  it('answers service should be reachable',
    inject(function(answers) {
    expect(answers).not.toEqual(null);
  }));

  it('knows correct answer',
    inject(function(answers) {
    expect(answers.correctAnswer()).toEqual('Sol');
  }));

  it('returns 3 answers',
    inject(function(answers) {
    expect(answers.list().length).toEqual(3);
  }));

  it('includes correct answer in 3 answers returned',
    inject(function(answers) {
    expect(answers.list()[2].word).toEqual('Sol');
  }));

  it('can be asked to refresh answers',
    inject(function(answers) {
    answers.getNew();
    expect(mockScore.correctAnswerIds).toHaveBeenCalled();
  }));



});
