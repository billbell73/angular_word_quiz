describe('E2E: Testing Scorer view', function() {

	beforeEach(function() {
    browser.get('/game');
  });
  
  it('should have title', function() {
    expect(browser.getTitle()).toBe('Word Quiz');
  });


});