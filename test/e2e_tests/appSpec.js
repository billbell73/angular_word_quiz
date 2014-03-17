describe('E2E: Testing Scorer view', function() {

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


});