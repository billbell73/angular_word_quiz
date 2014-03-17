describe("Unit: Testing Services", function() {

  beforeEach(module('myApp'));

  it('should contain a words service',
    inject(function(words) {
    expect(words).not.toEqual(null);
  }));

  



});