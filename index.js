/* JS for Kevin Flynn (TRON) Javascript Quizz */

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

var start = document.getElementById("startButton");
var time = document.getElementById("timer");
var scoreBoard = document.getElementById("score");
var highScoreBoard = document.getElementById("highScore");
var oneLiner = document.getElementById("quizzQuestions");
var userChoice1 = document.getElementById("btn1");
var userChoice2 = document.getElementById("btn2");
var userChoice3 = document.getElementById("btn3");
var userChoice4 = document.getElementById("btn4");
var answer = document.getElementById("solution"); /* In Testing mode, this allows the answer to show at the bottom.
During a regular game, it's used to display a response message to the player after he makes a choice. */

/* Simple Variables for Remaining Game Functions */

var timeStart = false; /* This is to prevent the timer to start during page load */
var timeMotion = true; /* This applies while the timer is in motion. When timer reacher O, timeMotion = false */
var jsCountdown = 10; /* 10 minutes = 600 seconds */
var score = 0; /* Start with a zero score.*/
var highScore = 0;  /* First game starts with a zero high score.*/
var highScores = "[]"; /* High Score storage -> Use of an array because we need to store more than a single high score */

    //  Deleted var, might bring it back later  ->  var output=""; --> this is for upcoming high score / initials capture

let index = 0;
/* Unified index start point for oneLiner / userChoice1-4 / answer.
This is extremely important as it allows every function below using the index to run in sync (one after another).*/

start.addEventListener("click", function() {
  score = 0;  /* This also allows the score to go to zero after each game is over. */
  jsCountdown = 10; /* This is to reset the allowed time to 10 minutes */
  timeStart = true;
  start.style.display = "none";
  countDownScoreHighScore(); /* Sends to function below lines 106-121 */
  questionInsert(); /* Sends to function below lines 123-126 */
});

function countDownScoreHighScore() {
  var timerInterval = setInterval(function() {
    if (timeStart)
      jsCountdown--;
      time.innerHTML = jsCountdown + " seconds";
      scoreBoard.innerHTML = score + " Points";
      highScoreBoard.innerHTML = highScore + " Points";

    if (jsCountdown === 0)
      {
      timeStart = false;
      timeMotion = false;
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000)
};

function questionInsert() {
    oneLiner.innerHTML = questions[index].q;
    choicesInsert();
};


function choicesInsert() {
    userChoice1.innerText = questions[index].choices.a;
    userChoice2.innerText = questions[index].choices.b;
    userChoice3.innerText = questions[index].choices.c;
    userChoice4.innerText = questions[index].choices.d;
    console.log(score);
    /* showAnswer();
    Uncomment if you want to see the correct answer to show below the questions during the game */
};

userChoice1.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice2.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice3.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice4.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});

/* function showAnswer() {
  answer.innerText = questions[index].answer;
}; */

/* Uncomment the function above if you want the answer to show below the questions during the game*/ 

function comparison(event) {
  console.log(answer);
  userChoiceAnswer = event.target.innerText;  
  correctAnswer = questions[index].answer; /* Please note the NON use of a .toLowerCase() as it would derail the comparison function */

    if (userChoiceAnswer === correctAnswer)
      {
        score = score + 10; /* I could have done score++ but I wanted score = score + 10 like in my early ATARI BASIC days */
        answer.innerText = "Good Answer Dude! +10 Pts! Your Score: " + score + " Pts \nCorrect Answer was: " + correctAnswer;
        setTimeout(function() {answer.innerText = "";}, 3000); /* This is to erase the response text after 5 seconds */
      }    

    else
      {
      score = score - 10;
      jsCountdown = jsCountdown - 10;
        answer.innerText = "Sorry. Wrong Answer. Your Score: " + score + " Pts. Remaining Time: " + jsCountdown + " seconds \nCorrect Answer was: " + correctAnswer;
       setTimeout(function() {answer.innerText = "";}, 3000);
      }

    if(index >= questions.length -1) {
      gameOver();
    }
    else if (timer = 0) {
      gameOver();
    }
    else {
      index++;
      questionInsert(); 
    }

};

function gameOver() {
  timer.value = "Game Over";
  scoreBoard.innerText = score + " Points";
  start.style.display = table;
  start.innerText = "Play Again?";
  timeStart = false;
};

function gameReset() {
  var jsCountdown = 600;
  var score = 0;
};