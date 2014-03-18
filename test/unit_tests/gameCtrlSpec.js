describe("Unit: Testing Game Controller", function() {
	var scope,
			controller,
      httpBackend;

	var mockGame;
  var mockCommentary;

	beforeEach(function () {

    module('myApp');

    mockGame = {
        clearScore: function() {},
        newRound: function(){},
        isOngoing: function () { return false; },
        updateGame: jasmine.createSpy('updateGame'),
        score: function(){ return 2 },
        currentRound: function(){
          return { 
        		roundNumber: 2,
        		keyword: "Red"
          };
        }
    };

    mockCommentary = {
        message: jasmine.createSpy('message')
    }

    inject(function(_$httpBackend_, $rootScope, $controller){
     	scope = $rootScope.$new();
      httpBackend = _$httpBackend_;
    	controller = $controller("GameCtrl", {$scope: scope, 
    																				game: mockGame,
                                            commentary: mockCommentary });
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

    it('should do post request when highscore submitted', function() {
      scope.playerName = 'Dave';
      httpBackend.expectPOST('api/highscore', {
          playerName: 'Dave',
          score: 3
      }).respond({});
      scope.updateHighScores();
    });

    it("should call commentary service when answer submitted", function(){
      scope.submitAnswer();
      expect(mockCommentary.message).toHaveBeenCalled();
    });

	});

});
