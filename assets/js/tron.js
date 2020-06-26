
// The code below is deprecated for now. See <script> in index.html for latest js //


localStorage.clear();

// Var Init

var score = 0;
var highScore = 0;
var jsCountdown = 600;

// Start Game: Timer + Score Board

function countdown() {
var countMechanism = setInterval(function(){
    jsCountdown--;
    document.getElementById("startButton").value = jsCountdown + " seconds remaining";
    //document.getElementById("600Countdown").innerHTML = jsCountdown + " seconds remaining";
    document.getElementById("score").innerHTML = score;

  if(jsCountdown === 0)
    {clearInterval(countMechanism);
      sendMessage();
    }
  jsCountdown -= 1;}, 1000);
}

function sendMessage() {
  document.getElementById("startButton").innerHTML = "Game Over";
}



// Game Logic

    var questions = [

        { q: "#01/20: JavaScript is ECMAScript?",
        answ: { a: "False", b: "True", c: "Maybe", d: "All of the above" },
        solution: "True" },

        { q: "#02/20: JavaScript written under which of the following tag?",
        answ: { a: "<JavaScript></JavaScript>", b: "<script></script>", c: "<code></code>", d: "<head></head>" },
        solution: "<script></script>" },

        { q: "#03/20: Variable in JavaScript declared with which of the following keyword?",
        answ: { a: "new", b: "int", c: "string", d: "var" },
        solution: "var" },

        { q: "#04/20: Which of the followings are primitive data types in JavaScript?",
        answ: { a: "String", b: "Number", c: "Boolean", d: "All of the above" },
        solution: "All of the above" },

        { q: "#05/20: Which of the following is NOT a JavaScript object?",
        answ: { a: "var obj = {};", b: "var obj = { name: &#34;Steve&#34;};", c: "var obj = { name = &#34;Steve&#34;};", d: "var obj = new Object();" },
        solution: "var obj = { name = &#34;Steve&#34;};" },

        { q: "#06/20: Which of the following is NOT a correct way of declaring an array in JavaScript?",
        answ: { a: "var arr = [1, &#34;two&#34;, 3 , 4 ];", b: "var arr = new Array();", c: "var[] arr = new Number()[5];", d: "None of the above" },
        solution: "var[] arr = new Number()[5];" },

        { q: "#07/20: What is null in JavaScript?",
        answ: { a: "Null means empty string value.", b: "Null means absence of a value.", c: "Null means unknown value.", d: "Null means zero value." },
        solution: "Null means absence of a value." },

        { q: "#08/20: Which of the following is a valid JavaScript function?",
        answ: { a: "var myFunc = function myFunc{ };", b: "function myFunc(){ };", c: "myFunc function(){ };", d: "function myFunc = { };" },
        solution: "function myFunc(){ };" },

        { q: "#09/20: Which of the following object represent parameters of current function inside any function?",
        answ: { a: "Global", b: "arguments", c: "this", d: "Object" },
        solution: "arguments" },

        { q: "#10/20: A function can be assigned to a variable in JavaScript.",
        answ: { a: "True", b: "False", c: "Some time", d: "None of the above" },
        solution: "True" },

        { q: "#11/20: Which of the following is an example of anonymous function in JavaScript?",
        answ: { a: "var myFunc = function(){ };", b: "function(){ };", c: "var myFunc = (){ };", d: "All of the above." },
        solution: "var myFunc = function(){ };" },

        { q: "#12/20: What will 1 == &#34;1&#34; return?",
        answ: { a: "True", b: "False", c: "0", d: "1" },
        solution: "True" },

        { q: "#13/20: What is eval() in JavaScript?",
        answ: { a: "It executes specified string as JavaScript code.", b: "It returns an object representing the parsed tree of the specified JavaScript code.", c: "It executes server side code in JavaScript.", d: "It displays a popup message on screen." },
        solution: "It executes specified string as JavaScript code." },

        { q: "#14/20: How to handle error in JavaScript?",
        answ: { a: "By writing error proof code.", b: "By using eval().", c: "By using if-else block", d: "By using try, catch & finally block." },
        solution: "By using try, catch & finally block." },

        { q: "#15/20: How to apply strict mode in JavaScript?",
        answ: { a: "strict mode", b: "strict", c: "use strict", d: "apply strict" },
        solution: "use strict" },

        { q: "#16/20: A variable declared without var keyword inside a function will become _______ variable.",
        answ: { a: "local", b: "global", c: "block", d: "undefined" },
        solution: "global" },

        { q: "#17/20: Which of the following is not a valid keyword in JavaScript?",
        answ: { a: "function", b: "this", c: "module", d: "try" },
        solution: "module" },

        { q: "#18/20: What will be the output of the following JavaScript code?<br>x = 1; console.log('x = ' + x); var x;",
        answ: { a: "x = 1", b: "error: x is undefined", c: "x = undefined", d: "x = null;" },
        solution: "x = 1" },

        { q: "#19/20: What will be the output of the following JavaScript code?<br>for(var x = 1; x < 5; x++); console.log(x);",
        answ: { a: "11111", b: "12345", c: "1234", d: "5555" },
        solution: "1234" },

        { q: "#20/20: What will be the output of the following JavaScript code?<br>var x = 0; do{ console.log(x) }while(x > 0)",
        answ: { a: "0", b: "null", c: "1", d: "No output" },
        solution: "0" }

    ];

for (var i = 0; i < questions.length; i++) {
    console.log("Question: " + questions[i]["q"]);
    console.log("Choices:")
    console.log(questions[i]["answ"]["a"]);
    console.log(questions[i]["answ"]["b"]);
    console.log(questions[i]["answ"]["c"]);
    console.log(questions[i]["answ"]["d"]);
         // {for (var j = 0; j < 4; j++) {
         //    console.log(questions["answ"][j]);
         // }}
    console.log("Correct Answer: " + questions[i]["solution"]);
    console.log("-----------")
}

















//       var userGuessLower = userGuess.toLowerCase();
//       // Now we check the myBands array to see if it contains the user's answer.
//       // If the user's band is not in the array...
//       if (myBands.indexOf(userGuessLower) === -1) {
//         alert("Nah! They're pretty lame...");
//       }
//       // Creating an array of vegetables.
//       var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

//       // Looping through each item in the array and logging a message to the console.
//       for (var i = 0; i < vegetables.length; i++) {
//         console.log("I love " + vegetables[i]);
//       }
//       var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];
//       // Loops through the array to print each zoo animal.
//       for (var i = 0; i < zooAnimals.length; i++) {
//         // Logs the animal at index position i to the console. This code is executed each time we go through the loop.
//         console.log(zooAnimals[i]);
//       } 
// var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
// for (var i = 0; i < 5; i++) {
//     if (myFarm[i][0] === "c" || myFarm[i][0] === "o") {
//         console.log("my animal is " + myFarm[i]);
//         alert("Start with a C or a O");
//     }

// }
//      // Loop 10 times

//         // Collect the user's response and convert to lower case.
//         var userGuess = prompt("Enter r, p, or s to play!");
//         userGuess = userGuess.toLowerCase();

//         // Only run game logic if user chose a valid option
//         if (userGuess === "r" || userGuess === "p" || userGuess === "s") {

//           alert("The computer chose " + computerGuess);

//           // Win/lose conditions:
//           if ((userGuess === "r" && computerGuess === "s") ||
//             (userGuess === "s" && computerGuess === "p") || 
//             (userGuess === "p" && computerGuess === "r")) {
//             wins++;
//             alert("You've won " + wins + " time(s)!");
//           } else if (userGuess === computerGuess) {
//             ties++;
//             alert("You've tied " + ties + " time(s).");
//           } else {
//             losses++;
//             alert("You've lost " + losses + " time(s).");
//           }
//         }
//       }

//       // When the game is over, alert the totals to the user. We can use the \n character to make a line break.
//       alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);




//       // How do we print out every student in Row 2 whose first name begins with J?
//       for (var i = 0; i < 4; i++) {
//         if (studentsRow2[i].charAt(0) === "J") {
//           console.log(studentsRow2[i]);
//         }
//       }

//       for (var i = 0; i < 6; i++) {
//         if (studentsRow1[i].charAt(0) === "J") {
//           console.log(studentsRow1[i]);
//         }
//       }


//       var favTVshows = [];
//       var tvShow;

//       // For-Loop that will repeat three times.
//       for (var i = 1; i < 4; i++) {

//         // Each time it asks the user for their #1, #2, or #3 TV show.
//         tvShow = prompt("What's your #" + i + " favorite TV show?");

//         // It then takes the user's response and "pushes" (or adds) the variable to the end of the favTVshows array.
//         favTVshows.push(tvShow);
//       }


//       // We then loop through the favTVshows array...
//       for (var j = 0; j < favTVshows.length; j++) {

//         // ...and create alert messages listing out each show in our array.
//         alert(favTVshows[j]);
//       }

