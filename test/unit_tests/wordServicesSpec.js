describe("Unit: Testing words service", function() {

  beforeEach(module('myApp'));

  it('should contain a words service',
    inject(function(words) {
    expect(words).not.toEqual(null);
  }));

  



});