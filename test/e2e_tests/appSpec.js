describe('E2E: Testing Scorer view', function() {

	var round = element(by.binding('currentRound.roundNumber'));
  var correctAnswer = $('#true');

	beforeEach(function() {
    browser.get('/game');
  });
  
  it('should have title \'Word Quiz\'', function() {
    expect(browser.getTitle()).toBe('Word Quiz');
  });

  it('should progress to round 2 on correct answer', function() {
    expect(round.getText()).toEqual('Round 1');
    correctAnswer.click();
    expect(round.getText()).toEqual('Round 2');
  });



});