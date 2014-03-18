describe('E2E: Testing Scorer view', function() {

	var round = element(by.binding('currentRound.roundNumber'));
  var correctAnswer = $('#true');
  var submitText = $('form span');

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

  it('should offer scoreboard place on 3 correct but not before', function() {
    correctAnswer.click();
    correctAnswer.click();
    expect(submitText.isDisplayed()).toEqual(false)
    correctAnswer.click();
    expect(correctAnswer.isEnabled()).toEqual(false);
    expect(submitText.isDisplayed()).toEqual(true)
    expect(submitText.getText()).toEqual('Enter your name for the scoreboard:');
  });



});