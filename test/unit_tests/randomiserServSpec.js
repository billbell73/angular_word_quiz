describe("Unit: Testing question in gameServices", function() {


  beforeEach(function() {

  	module('myApp');

	});

  it('gameServices should contain a question service',
    inject(function(randomiser) {
    expect(randomiser).not.toEqual(null);
  }));

  it('should return a number when \'newIdExcluding\' called',
    inject(function(randomiser) {
    expect(typeof randomiser.newIdExcluding([])).toEqual('number');
  }));

	it('should return a number when \'ranker\' called',
    inject(function(randomiser) {
    expect(typeof randomiser.ranker()).toEqual('number');
  }));



});
