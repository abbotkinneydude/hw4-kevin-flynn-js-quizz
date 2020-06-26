
var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("increment");
var count = document.getElementById("count");

var counter = 0;

incrementBtn.addEventListener("click", function () {
  counter++;
  count.textContent = counter;
}

decrementBtn.addEventListener("click", function () {
  counter--;
  count.textContent = counter;
}

*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

var artDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

artDiv.children[0].lastElementChild.style.color = "blue";
artDiv.children[0].style.fontSize = "50px";
artDiv.previousElementSibling.style.background = "black";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";

*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

  var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }
  }, 1000);
}
function speedRead() {
  mainEl.append(bodyEl);

  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, millisecondsPerWord);
}
prepareRead();

*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

  var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*


// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
h1El.textContent = "Welcome to my page";
h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
kittenEl.textContent = "This is my kitten";
nameEl.textContent = "his name is Jax";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Chicken Fingers";
li2.textContent = "Pizza";
li3.textContent = "Burgers";
li4.textContent = "Sushi";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200);
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background:#333333; padding:20px;");
listItems[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");


var main = document.querySelector("main");
var sitesEl = document.querySelector(".sites");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
var siteTitles = document.querySelectorAll("h4");

var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];

site1El.children[0].textContent = "Site 1";
// site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

for (var i = 0; i < siteTitles.length; i++) {
  siteTitles[i].setAttribute("style", "text-decoration: underline; padding-left:10px; margin: 0");
}

// Bonus
// For this bonus, comment out line 11
for (var i = 0; i < sites.length; i++) {
  site1El.children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)]);
}
/*
  <div id="main">
    <div class="sites">
      <div class="site1">
        <h4></h4>
        <a>
          <img>
        </a>
      </div>
      <div class="site2">
        <h4></h4>
        <a>
          <img>
        </a>
      </div>
      <div class="site3">
        <h4></h4>
        <a>
          <img>
        </a>
      </div>
    </div>
  </div>*/


*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*



  var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  var tag = document.createElement(tagName);
  tag.textContent = "This was made via prompts. It's a " + tagName;
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");
if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
    document.body.appendChild(secondTag);
  }
}