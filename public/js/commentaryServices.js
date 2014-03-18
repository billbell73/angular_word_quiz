'use strict';

/* Services */


'use strict';

/* Services */

angular.module('myApp.commentaryServices', [])
  .factory('commentary', function(game, answers){

    var victory = {
        message:'Congrats. 3 out of 3!',
        alert: 'alert-success'
        };

    var ongoingCorrect = {
        message: 'Correct',
        alert: 'alert-success'
    };

    function defeat() {
        return {
          message: 'Incorrect. The answer is: ' + answers.correctAnswer(),
          alert: 'alert-danger'
        };      
    }

    function message(){
      if (game.threeCorrectAnswers()) {
        return victory;
      }
      else if (game.recentAnswerCorrect()) {
        return ongoingCorrect;
      }
      else {
        return defeat();
      }
    }

    return {
      message: message
    };
})