'use strict';

/* Services */


'use strict';

/* Services */

angular.module('myApp.commentaryServices', [])
  .factory('commentary', function(game, answers, buttonColour){

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
      message: message,
      getButtonColour: buttonColour.getClass
    };
}).factory('buttonColour', function(game){

    function buttonClass(buttonNumber){
      var clickedButton = buttonNumber === game.recentAnswerId();
      if(clickedButton && game.recentAnswerCorrect()){
        return "btn-success";
      }
      else if(clickedButton) {
        return "btn-danger";
      }
    };    
    
    return {
      getClass: buttonClass
    };
})
