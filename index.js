// JS for Kevin Flynn (TRON) Javascript Quizz

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
  choices: {a: "var obj = {};", b: "var obj = { name: &#34;Steve&#34;};", c: "var obj = { name = &#34;Steve&#34;};", d: "var obj = new Object();"},
  answer: "var obj = { name = &#34;Steve&#34;};"},
  {q: "#06/20: Which of the following is NOT a correct way of declaring an array in JavaScript?",
  choices: {a: "var arr = [1, &#34;two&#34;, 3 , 4 ];", b: "var arr = new Array();", c: "var[] arr = new Number()[5];", d: "None of the above"},
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
  {q: "#12/20: What will 1 == &#34;1&#34; return?",
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

var start = document.getElementById("startButton");
var jsCountdown = 600;
var time = document.getElementById("timer");
var timeStart= false;
var scoreBoard = document.getElementById("score");
var highScoreBoard = document.getElementById("highScore");

var score = 0;
var highScore = "";

var oneLiner = document.getElementById("quizzQuestions");
var userChoice1 = document.getElementById("btn1");
var userChoice2 = document.getElementById("btn2");
var userChoice3 = document.getElementById("btn3");
var userChoice4 = document.getElementById("btn4");
var answer = document.getElementById("solution");

    //  Deleted var, might bring it back later ->  var timeOngoing = true;
    //  Deleted var, might bring it back later  ->  var output=""; --> this is for upcoming high score / initials capture

let index = 0;
// Unified index start point for oneLiner / userChoice1-4 / answer

start.addEventListener("click", function() {
  score = 0;
  timeStart = true;
  // startButton.style.display = "none"; ******You were referring to the element id rather than the start variable.
  start.style.display = "none"
  countDownScoreHighScore();
  questionInsert(); // <------See line 105 to understand why I moved it up here
});

function countDownScoreHighScore() {
  var timerInterval = setInterval(function() {
    if (timeStart)
      jsCountdown--;
      time.innerHTML = jsCountdown + " seconds";
      scoreBoard.innerHTML = score + " Points";
      highScoreBoard.innerHTML = highScore + " Points";
      // questionInsert();          //<---------You were calling this questionIsert every second. I moved it to the start click function so it calls it once, then your
                                    // script will keep calling it.

    if (jsCountdown === 0)
      {
      timeStart = false;
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000)
};

function questionInsert() {
    oneLiner.innerHTML = questions[index].q;
    choicesInsert();
};

let counter = 0;
function choicesInsert() {

    //Changed to innerText. 

    userChoice1.innerText = questions[index].choices.a; //I removed the numbering and put it in the index.html so that we can access the answer directly
    console.log(score);
    userChoice2.innerText =questions[index].choices.b; //I removed the numbering and put it in the index.html so that we can access the answer directly
    console.log(score);
    userChoice3.innerText =  questions[index].choices.c; //I removed the numbering and put it in the index.html so that we can access the answer directly
    console.log(score);
    userChoice4.innerText = questions[index].choices.d; //I removed the numbering and put it in the index.html so that we can access the answer directly
    console.log(score);
    showAnswer();
    
};

function showAnswer() {
    answer.innerHTML = questions[index].answer;
};

function comparison(event) {
  userChoiceAnswer = event.target.innerText;  
  correctAnswer = questions[index].answer.toLowerCase();
  // userChoice1Answer = questions[index].choices.a.toLowerCase();
  // userChoice2Answer = questions[index].choices.b.toLowerCase();
  // userChoice3Answer = questions[index].choices.c.toLowerCase();
  // userChoice4Answer = questions[index].choices.d.toLowerCase();
  

// console.log(questions[index].q)
// console.log("--------------");        
// console.log(userChoice1Answer);
// console.log(userChoice2Answer);
// console.log(userChoice3Answer);
// console.log(userChoice4Answer);
// console.log("--------------");
// console.log(correctAnswer);
// console.log("--------------");


    // if ( (userChoice1Answer === correctAnswer && correctAnswer === userChoice1Answer) || (userChoice2Answer === correctAnswer && correctAnswer === userChoice2Answer) || (userChoice3Answer === correctAnswer && correctAnswer === userChoice3Answer) || (userChoice4Answer === correctAnswer && correctAnswer === userChoice4Answer) )
    if (userChoiceAnswer === correctAnswer)
      {
        score = score + 1;
        answer.innerHTML = "Good Answer Dude! +10 Pts! Your Score: " + score + " Pts | Correct Answer: " + correctAnswer;
        console.log(score)
      }    
    else
      {
      score = score - 1;
      jsCountdown = jsCountdown - 10;
        answer.innerHTML = "Sorry. Wrong Answer. Your Score: " + score + " Pts" + " Your Remaining Time: " + jsCountdown + " seconds | Correct Answer is: " + correctAnswer;
      }
      

    if(index >= questions.length -1) {
      gameOver();
    }
    else {
      index++;
      questionInsert(); 
    }
    
};


function gameOver() {
  timer.value = "Game Over";
  scoreBoard.innerHTML = score + " Points";
  setInterval(function() {
    // startButton.style.display = "block"; ******You were referring to the element id rather than the start variable.
    // startButton.innerHTML = "Play Again?"; ******You were referring to the element id rather than the start variable.
    start.style.display = "block";
    start.innerHTML = "Play Again?";
    jsCountdown = 600;
       timeStart = false;
  }, 3000);
};

function gameReset() {
  var jsCountdown = 600;
  var score = 0;
};

//Took out the functions from the function because they kept on recreating the event listeners
userChoice1.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice2.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice3.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});
userChoice4.addEventListener('click', function(event) {event.stopPropagation(); comparison(event)});