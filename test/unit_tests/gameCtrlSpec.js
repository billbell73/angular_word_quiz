describe("Unit: Testing Controllers", function() {
	var scope,
			controller;

	var mockGame;

	beforeEach(function () {

    module('myApp');

    mockGame = {
        newRound: function(){},
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

	});

});
