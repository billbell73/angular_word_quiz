describe("Unit: Testing Controllers", function() {
	var scope,
			controller;

	var mockGame;

	beforeEach(function () {

    module('myApp');

    mockGame = {
        firstQuestion: 'Good morning',
    };

    inject(function(_$httpBackend_, $rootScope, $controller){
     	scope = $rootScope.$new();
    	controller = $controller("GameCtrl", {$scope: scope, 
    																				game: mockGame });
    });

	});

	describe("game controller", function(){

		it("should store firstQuestion variable on scope ", function(){
			expect(scope.firstQuestion).toEqual("Good morning");
		});

	});

});
