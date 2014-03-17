describe('E2E: Testing Scorer view', function() {

	var round = element(by.binding('currentRound.nth'));
  var correctAnswer = $('#true');

	beforeEach(function() {
    browser.get('/game');
  });
  
  it('should have title \'Word Quiz\'', function() {
    expect(browser.getTitle()).toBe('Word Quiz');
  });

  it('should show first question', function() {
  	var firstQuestion = element(by.binding('firstQuestion'));
  	expect(firstQuestion.getText()).toEqual('Good morning');
  });

  it('should progress to round 2 on correct answer', function() {
    expect(round.getText()).toEqual('Round 1');
    correctAnswer.click();
    expect(round.getText()).toEqual('Round 2');
  });



});