// JS for Kevin Flynn (TRON) Javascript Quizz

var questions = [
  {q: "#01/20: JavaScript is ECMAScript?",
  choices: {a: "False", b: "True", c: "Maybe", d: "All of the above"},
  answer: "True"},
  {q: "#02/20: JavaScript written under which of the following tag?",
  choices: {a: "<JavaScript></JavaScript>", b: "<script>/script>", c: "<code></code>", d: "<head></head>"},
  answer: "<script>/script>"},
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

var start = document.getElementById("startButton"); //.addEventListener("click", countdown());
var timer = document.getElementById("time");
var scoreBoard = document.getElementById("score");
var highScoreBoard = document.getElementById("highScore");

var jsCountdown = 600;
var score = 0;
var highScore = "";

var oneLiner = document.getElementById("quizzQuestions");
var userChoice1 = document.getElementById("btn1");
var userChoice2 = document.getElementById("btn2");
var userChoice3 = document.getElementById("btn3");
var userChoice4 = document.getElementById("btn4");
var answer = document.getElementById("solution");


function countdown() {
var timerInterval = setInterval(function() {
      jsCountdown--;
      timer.innerHTML = jsCountdown + " seconds";
      scoreBoard.innerHTML = score + " Points";
      highScoreBoard.innerHTML = highScore + " Points";
    if(jsCountdown === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  timer.value = "Game Over";
  scoreBoard.innerHTML = score + " Points";
  setInterval(function() {
    timer.value = "Play Again?";
    jsCountdown = 600;
  }, 3000);
};

function gameReset() {
  var jsCountdown = 600;
  var score = 0;
};

// countdown();

function questionInsert() {
    for (i = 0; i < questions.length; i++) {
    oneLiner.innerHTML = questions[i].q;
  }
};

function choicesInsert() {
    for (j = 0; j < questions.length; j++) {
    userChoice1.innerHTML = "1: " + questions[j].choices.a;
    userChoice2.innerHTML = "2: " + questions[j].choices.b;
    userChoice3.innerHTML = "3: " + questions[j].choices.c;
    userChoice4.innerHTML = "4: " + questions[j].choices.d;
  }
};

function showAnswer() {
    for (k = 0; k < questions.length; k++) {
    answer.innerHTML = questions[k].answer;
  }
};


// function questionnaire() {
//     for (a = 0; a < questions.length; a++) {
//   }
// };

// .addEventListener("click", comparison())

function comparison() {
    for (var l = 0; l < questions.length; l++) {
    // var solution = confirm(questions[i].q);

    if ((userChoice1 === true && questions[k].answer === true) || (userChoice2 === true && questions[k].answer === true) || (userChoice3 === true && questions[k].answer === true) || (userChoice4 === true && questions[k].answer === true)) {
        score = score + 10;
      console.log("Good Answer Dude! +10 Pts! Your Score: " + score + " Pts");
    }
    else {
      score = score - 10; jsCountdown -10;
      console.log("No luck! -10 Pts! Your Score: " + score + " Pts");
    }
  }
};

console.log(questions[0].q);
console.log("--------------");
console.log(questions[0].choices.a);
console.log(questions[0].choices.b);
console.log(questions[0].choices.c);
console.log(questions[0].choices.d);
console.log("--------------");
console.log(questions[0].answer);
console.log("--------------");