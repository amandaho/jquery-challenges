/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function() {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function() {

    var resetButton = $("#reset");
    var numberOfResets = $("#num-resets");
    var teamOneButton = $("#teamone-shoot");
    var shotsTaken1 = $("#teamone-numshots");
    var goalsTeamOne = $("#teamone-numhits");
    var teamTwoButton = $("#teamtwo-shoot");
    var shotsTaken2 = $("#teamtwo-numshots");
    var goalsTeamTwo = $("#teamtwo-numhits");
    var myAudio = new Audio("assets/sounds/Goal-horn-sound-effect.mp3");
    var myAudio2 = new Audio("assets/sounds/Crowd-booing-sound-effect.mp3")

    teamOneButton.click(function() {
      console.log("+ button clicked");

      var newShotsValue = parseInt(shotsTaken1.html()) + 1;

      shotsTaken1.html(newShotsValue);

      var randomrange = 1000;
      var randomnumber = Math.floor((Math.random() * randomrange) + 1);
      if (randomnumber % 2 === 0) {
        goalsTeamOne.html(parseInt(goalsTeamOne.html()) + 1);
          myAudio.play();
          $("*").css({
            "background": "#00843D"});
          $("button").css({
            "background": "#C60C30"});
      }

    })

    teamTwoButton.click(function() {
      console.log("+ button clicked");

      var newShotsValue = parseInt(shotsTaken2.html()) + 1;

      shotsTaken2.html(newShotsValue);

      var randomrange = 1000;
      var randomnumber = Math.floor((Math.random() * randomrange) + 1);
      if (randomnumber % 2 === 0) {
        goalsTeamTwo.html(parseInt(goalsTeamTwo.html()) + 1);
          myAudio2.play();
          $("*").css({
            "background": "#0E3386"});
          $("button").css({
            "background": "#C60C30"});
      }

    })

    resetButton.click(function() {
      console.log("reset button clicked")

      shotsTaken1.html(0);
      goalsTeamOne.html(0);
      shotsTaken2.html(0);
      goalsTeamTwo.html(0);

      var newResetsValue = parseInt(numberOfResets.html()) + 1;
      numberOfResets.html(newResetsValue);

      $("*").css({
        "background": "#010101"});
      $("button").css({
        "background": "#C60C30"});

    })

  })

})();
