/* JS for Kevin Flynn (TRON) Javascript Quizz */

/* 2020-07-27 Code Update: JS is fully functional. */

/* Questions Array [20] */

var questions = [
  {q: "#01/20: JavaScript is ECMAScript?",
  choices: {a: "False", b: "True", c: "Maybe", d: "All of the above"},
  answer: "True"},
  {q: "#02/20: JavaScript written under which of the following tag?",
  choices: {a: "<JavaScript></JavaScript>", b: "<script></script>", c: "<code></code>", d: "<head></head>"},
  answer: "<script></script>"},
  {q: "#03/20: Variable in JavaScript declared with which of the following keyword?",
  choices: {a: "new", b: "int", c: "string", d: "var"},
  answer: "var"},
  {q: "#04/20: Which of the followings are primitive data types in JavaScript?",
  choices: {a: "String", b: "Number", c: "Boolean", d: "All of the above"},
  answer: "All of the above"},
  {q: "#05/20: Which of the following is NOT a JavaScript object?",
  choices: {a: "var obj = {};", b: "var obj = { name: ”Steve”};", c: "var obj = { name = ”Steve”};", d: "var obj = new Object();"},
  answer: "var obj = { name = ”Steve”};"},
  {q: "#06/20: Which of the following is NOT a correct way of declaring an array in JavaScript?",
  choices: {a: "var arr = [1, ”two”, 3 , 4 ];", b: "var arr = new Array();", c: "var[] arr = new Number()[5];", d: "None of the above"},
  answer: "var[] arr = new Number()[5];"},
  {q: "#07/20: What is null in JavaScript?",
  choices: {a: "Null means empty string value.", b: "Null means absence of a value.", c: "Null means unknown value.", d: "Null means zero value."},
  answer: "Null means absence of a value."},
  {q: "#08/20: Which of the following is a valid JavaScript function?",
  choices: {a: "var myFunc = function myFunc{ };", b: "function myFunc(){ };", c: "myFunc function(){ };", d: "function myFunc = { };"},
  answer: "function myFunc(){ };"},
  {q: "#09/20: Which of the following object represent parameters of current function inside any function?",
  choices: {a: "Global", b: "arguments", c: "this", d: "Object"},
  answer: "arguments"},
  {q: "#10/20: A function can be assigned to a variable in JavaScript.",
  choices: {a: "True", b: "False", c: "Some time", d: "None of the above"},
  answer: "True"},
  {q: "#11/20: Which of the following is an example of anonymous function in JavaScript?",
  choices: {a: "var myFunc = function(){ };", b: "function(){ };", c: "var myFunc = (){ };", d: "All of the above."},
  answer: "var myFunc = function(){ };"},
  {q: "#12/20: What will 1 == ”1” return?",
  choices: {a: "True", b: "False", c: "0", d: "1"},
  answer: "True"},
  {q: "#13/20: What is eval() in JavaScript?",
  choices: {a: "It executes specified string as JavaScript code.", b: "It returns an object representing the parsed tree of the specified JavaScript code.", c: "It executes server side code in JavaScript.", d: "It displays a popup message on screen."},
  answer: "It executes specified string as JavaScript code."},
  {q: "#14/20: How to handle error in JavaScript?",
  choices: {a: "By writing error proof code.", b: "By using eval().", c: "By using if-else block", d: "By using try, catch & finally block."},
  answer: "By using try, catch & finally block."},
  {q: "#15/20: How to apply strict mode in JavaScript?",
  choices: {a: "strict mode", b: "strict", c: "use strict", d: "apply strict"},
  answer: "use strict"},
  {q: "#16/20: A variable declared without var keyword inside a function will become _______ variable.",
  choices: {a: "local", b: "global", c: "block", d: "undefined"},
  answer: "global"},
  {q: "#17/20: Which of the following is not a valid keyword in JavaScript?",
  choices: {a: "function", b: "this", c: "module", d: "try"},
  answer: "module"},
  {q: "#18/20: What will be the output of the following JavaScript code?<br>x = 1; console.log('x = ' + x); var x;",
  choices: {a: "x = 1", b: "error: x is undefined", c: "x = undefined", d: "x = null;"},
  answer: "x = 1"},
  {q: "#19/20: What will be the output of the following JavaScript code?<br>for(var x = 1; x < 5; x++); console.log(x);",
  choices: {a: "11111", b: "12345", c: "1234", d: "5555"},
  answer: "1234"},
  {q: "#20/20: What will be the output of the following JavaScript code?<br>var x = 0; do{ console.log(x) }while(x > 0)",
  choices: {a: "0", b: "null", c: "1", d: "No output"},
  answer: "0"}
];

/* Variable Declarations*/ 

/* var = 'Get Document by ID' section / Screen Elements Acquisition */

var hallOfFame = document.getElementById("kevinFlynn"); /* High Scores Hall of Fame over Kevin Flynn Picture */
var clearHighScores = document.getElementById("clearHSbutton");
var start = document.getElementById("startButton");
var seeHighScores = document.getElementById("highScoresButton");
var time = document.getElementById("timer");
var scoreBoard = document.getElementById("score");
var highScoreBoard = document.getElementById("highScore");
var oneLiner = document.getElementById("quizzQuestions");
var choicesContainer = document.getElementById("userChoices");
var userChoice1 = document.getElementById("btn1");
var userChoice2 = document.getElementById("btn2");
var userChoice3 = document.getElementById("btn3");
var userChoice4 = document.getElementById("btn4");
var answer = document.getElementById("solution"); /* In Testing mode, this allows the answer to show at the bottom.
During a regular game, it's used to display a response message to the player after he makes a choice. */

/* Simple Variables for Remaining Game Functions */

var timeMotion = false; /* Timer Boolean Value. False = time stops. True = Time Flows */
var jsCountdown = ""; /* Allocated time for playing. This resets at the beginning of each game. */
var score = ""; /* Main Score Variable, will store the score during playtime .*/

var highScore = 0;  /* First game starts with a zero high score.*/
var highScores = []; /* High Scores storage -> Use of an array because we need to store more than a single high score */
var highScoresDisplayed = ""; /* This is to display the high scores inside the hall of fame */
var playerName = ""; /* This is to store the player name when you push it into the HS array */


let index = 0;
/* Unified index start point for oneLiner / userChoice1-4 / answer.
This is extremely important as it allows every function below using the index to run in sync (one after another). Otherwise, it would be asynchronous and prone to error. */

/* Buttons from left to right */

clearHighScores.value = "Clear High Scores"; /* This displays 'clear high scores' in the left button */
start.value = "Start JS Quizz"; /* This displays the mention "start js quizz" inside the "start" (center) button ahead of the first game */
seeHighScores.value = "See High Scores" /* This displays the mention "see high scores" in the "high score" (right) button ahead of the first game */

/* Associated Buttons Click Actions */

seeHighScores.addEventListener("click", function() {
  highScoreManagement()
}); /* This calls the see high scores function when pressed (RIGHT BUTTON) */

clearHighScores.addEventListener("click", function() {
  highScores = [];
  hallOfFame.textContent = "Hall of Fame\n";
}); /* This clears the high scores (hall of fame) when pressed (LEFT BUTTON) */

/* This is the main start quizz button (CENTER BUTTON) */
start.addEventListener("click", function() {

  hallOfFame.style.opacity = 1; /* This is to reset Kevin Flynn's opacity at the beginning of each game if the hall of fame is then active */
  hallOfFame.innerHTML = ""; /* This clears the hall of fame at the beginning of each game in case the player presses 'Start JS Quizz' while the hall of fame is active */
  
  oneLiner.style.display = "block";
  choicesContainer.style.display = "block";
  answer.style.display = "block";
  /* if coming back from the game over phase, this makes the questions, choices, answer sections above visible again. */

  index = 0; /* This is to reset the questionnaire when you already played once */
  score = 0; /* This makes every game begin with a zero score  */
  jsCountdown = 300; /* This resets the allocated time to 5 minutes when quizz starts */

  timeMotion = true; /* This allows the timer to flow, false = timer off */
  start.value = "JS Quizz Ongoing"; /* This displays the mention "JS Quizz Ongoing" inside the start button */
  seeHighScores.value = "Show High Scores"; /* This displays the "Show High Scores" in the button in case a new game is started while coming back from the hall of fame / high scores table mode */ 
  countDownScoreHighScore(); /* Sends to function below lines 147-163 */
  questionInsert(); /* Sends to function below lines 166-169 */
});

/* This function below sets the game in motion with a countdown, disables unecessary buttons, feeds the scoreboard section and either moves onto the game mechanics (if the game is active) or sends you to the game over section if the timer reaches zero. */

function countDownScoreHighScore() {
  clearHighScores.disabled = true; /* Clear High Score (LEFT) Button Disabled during Game */
  start.disabled = true; /* Disables the start (CENTER) button while the game is in motion so that you can't restart a game before the game is over */
  seeHighScores.disabled = true;  /* Disables the see high score (RIGHT) button during playtime so that you can't interrupt the game flow */
  var timerInterval = setInterval(function() { /* Countdown / Timer Function */
    if (timeMotion)
      jsCountdown--; /* Deduces time from the timer */
      time.innerHTML = jsCountdown + " seconds"; /* Updates the timer */
      scoreBoard.innerHTML = score + " Points"; /* Updates the score */

    if (jsCountdown <= 0) /* If Counter equal to zero or less than, clear timer and move onto the 'game over' function */
      {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000)
};

/* This inserts the question into the question container */
function questionInsert() {
    oneLiner.innerHTML = questions[index].q;
    choicesInsert();
};

/* This fills the 4 buttons with the 4 choices of each question extracted from the array. Also, see 'showAnswer' remarks lines 177-178, 187-190 */
function choicesInsert() {
    userChoice1.innerText = questions[index].choices.a;
    userChoice2.innerText = questions[index].choices.b;
    userChoice3.innerText = questions[index].choices.c;
    userChoice4.innerText = questions[index].choices.d;
    /* showAnswer();
    Uncomment the function above if you want the correct answer to show below the questions during the game */
};

/* The 4 addEventListener(s) below are assigned to the 4 potential choices of each question */
userChoice1.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice2.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice3.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice4.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});

/* function showAnswer() {
  answer.innerText = questions[index].answer;
}; */
/* Uncomment the function above if you want the answer to show below the questions during the game */

function comparison(event) {
  userChoiceAnswer = event.target.innerText;  /* Transfers the event target (button pressed) to userChoiceAnswer */
  correctAnswer = questions[index].answer; /* Acquires the correct answer from the questions array */
  console.log(correctAnswer); /* Displays the correct answer in the console for testing purpose */
  /* BTW- Please note the NON use of a .toLowerCase() as it would derail the comparison function considering the amount of special characters and the importance of the Camel Cases in Javascript */

    if (userChoiceAnswer === correctAnswer) /* Compares Player Choice with Question Answer */
      {
        score = score + 10; /* I could have done score++ but I wanted score = score + 10 like in my early ATARI BASIC days!! */
        answer.innerText = "Good Answer Dude! +10 Pts! Your Score: " + score + " Pts \nCorrect Answer was: " + correctAnswer;
        setTimeout(function() {answer.innerText = "";}, 10000); /* This is to erase the response text above every 10 seconds cycle */
      }    

    else
      {
        jsCountdown = jsCountdown - 10; /* If wrong answer submitted, deduces 10 seconds from the countdown */
        answer.innerText = "Sorry. Wrong Answer. Your Score: " + score + " Pts. Remaining Time: " + jsCountdown + " seconds \nCorrect Answer was: " + correctAnswer;
        setTimeout(function() {answer.innerText = "";}, 10000); /* This is to erase the response text above every 10 seconds cycle */
      }

    /* if out of questions, transfer game flow to the 'game over' function */
    if (index >= questions.length -1) {
      gameOver();
    }
    /* if out of time, transfer game flow to the 'game over' function */
    else if (timer <= 0) {
      gameOver();
    }
    /* otherwise, climb one step up in the questions array and move back to the 'question insert' function */    
    else {
      index++;
      questionInsert(); 
    }

};

function gameOver() {
  timeMotion = false; /* This blocks the timer countdown */
  console.log(timeMotion); /* For Testing Purpose */
  time.innerHTML = 0 + " seconds"; /* this forces the timer to display zero seconds during the game over phase so that there's no negative time in case the player responded with a wrong answer when below the last remaining 10 seconds. Otherwise, you'd get a '-x seconds' to show.  */
  console.log(jsCountdown); /* For Testing Purpose because of the negative timer potential */
  start.value = "Game Over"; /* This displays a game over mention inside the main start button*/
  oneLiner.style.display = "none"; /* This makes the question section invisible during the game over phase */
  choicesContainer.style.display = "none"; /* This makes the choices container invisible during the game over phase */
  answer.style.display = "none"; /* This makes the answer section invisible during the game over phase */
  playerNameArrayPush() /* Sends to 'push' function where the player name + score string will be generated then pushed into the "highScores" array */
};

function playerNameArrayPush() {
  playerName = prompt("Game Over\nPlease Enter Your Name"); /* Captures name of the last player to play */
  highScores.push(" " + playerName + ": " + score + " Points"); /* This 'pushes' the player name and its score inside the 'highScores' array */
  console.log("playerNameArrayPush: " + highScores); /* For Testing Purpose */
  highScoreManagement(); /* This sends to the high score management function below which oversees the hall of fame */
}

function highScoreManagement() {
  seeHighScores.value = "Hide High Scores" /* Injects 'Hide High Scores' in the high score view button */
  hallOfFame.style.opacity = 0.5; /* Reduces the opacity of the Kevin Flynn picture by half to make text readeable */
  hallOfFame.innerHTML = "Hall of Fame\n" /* Injects "Hall of Fame" into the High Score section so that it doesn't show empty before or during the 1st game */

  highScoresDisplayed = "";
  for (var fame = 0; fame < highScores.length; fame++) { /* Iterates through the array to churn out player names & respective scores */
  highScoresDisplayed = "Hall of Fame\n" + highScores + " "; /* Combines hall of fame (string, text) with the indexed [hs] array */
  /* Please note the lack of iterator above, no highScores[fame]. */
  hallOfFame.innerHTML= highScoresDisplayed; /* Feeds the array into the html */
  console.log("highScoresDisplayed: " + highScoresDisplayed); /* For Testing Purpose */
  
  if (highScores.length > 15) {
    highScores = [];
  } /* This clears the hall of fame board when there's more than 15 high scores */

  clearHighScores.disabled = false; /* This re-enables the 'clear High Scores' button */
  seeHighScores.disabled = false; /* This re-enables the 'see High Scores' button */
  start.disabled = false; /* This re-enables the start button for the next game */
  start.value = "Play Again?"; /* This displays the mention "Play Again?" instead of "Start JS Quizz" inside the start button */
  /* Note: because the start button is re-enabled, there is no need to send to another function, the add Event Listener of the start button will do the job of restarting the game and calling the proper functions */
  }

  /* Below is a nested add event listener for the high score button so that you can alternate between the hall of fame and the regular kevin flynn picture while in the same function */
  
  seeHighScores.addEventListener("click", function() {
    hallOfFame.style.opacity = 1;
    hallOfFame.innerHTML = "";
    seeHighScores.value = "Show High Scores";
    seeHighScores.addEventListener("click", function() {
      highScoreManagement()
    }); /* This sends you back to highScoreManagement() when pressed */
    });
};

  /* End of Code - if you have any comments or improvements, please pull from master, create your own branch from master and then push back your branch. Thank you for watching! */