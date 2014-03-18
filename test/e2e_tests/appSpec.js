describe('E2E: Testing Scorer view', function() {

	var round = element(by.binding('currentRound.roundNumber'));
  var correctAnswer = $('#true');
  var submitText = $('form span');
  var wrongAnswer = $('#false');
  var input = element(by.model('playerName'));
  var submitButton = $('form #submit');
  var barryRow = $('#Barry');
  var wrongAnswerAlert = $('.alert-danger');
  var correctAnswerAlert = $('.alert-success');


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

  it('1 correct, 1 false offers scoreboard place with score of 1', function() {
    correctAnswer.click();
    wrongAnswer.click();
    expect(submitText.isDisplayed()).toEqual(true)
    input.sendKeys('Barry');
    submitButton.click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/highscore');
    expect(barryRow.getText()).toEqual('Barry: 1');
  });

  it('when game finished buttons disabled', function() {
    wrongAnswer.click();
    expect(wrongAnswer.isEnabled()).toEqual(false);
    expect(correctAnswer.isEnabled()).toEqual(false);
  });

  it('red alert box on wrong answer', function() {
    wrongAnswer.click();
    expect(wrongAnswerAlert.isDisplayed()).toEqual(true);
  });

});