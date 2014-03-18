/*
 * Receive posted highscore data, store and
 * serve JSON with highscore data to our AngularJS client
 *
 */

var highScorers = [{playerName: "Bob", score: 2},
  								 {playerName: "Barbara", score: 1}];

exports.highScore = function (req, res) {
  res.json({
  	scoreBoard: highScorers
  });
};

exports.addHighScore =  function(req, res) {
	var newPlayer = {
    playerName: req.body.playerName,
    score: req.body.score
  }

  highScorers.push(newPlayer);

  res.json({
    scoreBoard: highScorers
  });
};