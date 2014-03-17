describe("Unit: Testing score in gameServices", function() {

  beforeEach(function () {
    module('myApp');

    inject(function(score) {
      score.addCorrectAnswer(true, 2);
      score.addCorrectAnswer(true, 5);
    })
  });

  it('score service should be reachable',
    inject(function(score) {
    expect(score).not.toEqual(null);
  }));

  it('can receive and relay correct answer ids',
    inject(function(score) {
    expect(score.correctAnswerIds()).toEqual([2, 5]);
  }));

  it('can reset correct answer ids',
    inject(function(score) {
    score.clearAnswers();
    expect(score.correctAnswerIds()).toEqual([]);
  }));

  it('knows what round it is',
    inject(function(score) {
    expect(score.nthRound()).toEqual(3);
  }));

  it('knows if it is before final round',
    inject(function(score) {
    expect(score.finalRoundPlayed()).toEqual(false);
  }));

   


});
