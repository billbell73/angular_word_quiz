describe("Unit: Testing Controllers", function() {
	var scope,
			controller;

	var mockGame;

	beforeEach(function () {

    module('myApp');

    mockGame = {
        clearScore: function() {},
        newRound: function(){},
        isOngoing: function () { return false; },
        updateGame: jasmine.createSpy('updateGame'),
        currentRound: function(){
          return { 
        		roundNumber: 2,
        		keyword: "Red"
          };
        }
    };

    inject(function(_$httpBackend_, $rootScope, $controller){
     	scope = $rootScope.$new();
    	controller = $controller("GameCtrl", {$scope: scope, 
    																				game: mockGame });
    });

	});

	describe("game controller", function(){

		it("stores currentRound data on scope ", function(){
			expect(scope.currentRound.roundNumber).toEqual(2);
		});

    it("should call updateGame method when answer submitted", function(){
      scope.submitAnswer();
      expect(mockGame.updateGame).toHaveBeenCalled();
    });

    it("should set endGame to true if game not ongoing", function(){
      scope.submitAnswer();
      expect(scope.endGame).toEqual(true);
    });

	});

});
