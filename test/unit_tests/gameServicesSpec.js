describe("Unit: Testing gameServices", function() {

  beforeEach(module('myApp'));

  it('should contain a game service',
    inject(function(game) {
    expect(game).not.toEqual(null);
  }));
  
});
