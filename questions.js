//Questions Defined ** check classification? unsure
// var question1 = "Commonly used data types DO NOT include:"
// var question2 = "The condition in an if/else statement is enclosed within ____."
// var question3 = "Arrays in JavaScropt can be used to store ____."
// var question4 = "String values must be enclosed within ____ when being assigned to variables"
// var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";

// Questions as array

//var allQuestions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed within ____.", "Arrays in JavaScropt can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"];
//Mulitple Choice Options in Arrays  

//var qOptions1 = ["strings", "booleans", "alerts", "numbers"];
//var qOptions2 = ["quotes", "curly brackets", "parentheses", "square brackets"];
//var qOptions3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
//var qOptions4 = ["commas", "curly brackets", "quotes", "parentheses"];
//var qOptions5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];
var content = document.querySelector("content");
var q1El = document.querySelector("q1");
var q2El = document.querySelector("q2");
var q3El = document.querySelector("q3");
var q4El = document.querySelector("q4");
var q5El = document.querySelector("q5");

var allQuestionsList = [
    {
        element: q1El,
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        right: "alerts"
    },
    {   
        element: q2El,
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        right: "parentheses"
    },
    {
        element: q3El,
        question: "Arrays in JavaScropt can be used to store ____.", 
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        right: "numbers and strings"
    },
   {
       element: q4El,
       question: "String values must be enclosed within ____ when being assigned to variables", 
       choices: ["commas", "curly brackets", "quotes", "parentheses"],
       right: "quotes"
    },
    {
        element: q5El,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        right: "console.log"
    }
]
    
function renderSite(allQuestions) {
        var questionElement = allQuestions.element.children[0];
        questionElement.textContent = allQuestions.question;
      }

for (var i = 0; i < allQuestionsList.length; i++) {
        renderSite(allQuestionsList[i]);
    }



    // Set the body to a variable
    //var body = document.body;
    
    // Create all necessary elements
    // var h1El = document.createElement("h1");
    // var h2El = document.createElement("h2");
    // var infoEl = document.createElement("div");
    // var imgEl = document.createElement("img");
    // var kittenEl = document.createElement("div");
    // var nameEl = document.createElement("div");
    // var favoriteEl = document.createElement("div");
    // var listEl = document.createElement("ol");
    // var li1 = document.createElement("li");
    // var li2 = document.createElement("li");
    // var li3 = document.createElement("li");
    // var li4 = document.createElement("li");
    
    // // Store our li elements in a variable
    // var listItems = document.getElementsByTagName("li");
    
    // // Set the text content of relevant elements
    // h1El.textContent = "Welcome to my page";
    // h2El.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
    // kittenEl.textContent = "This is my kitten";
    // nameEl.textContent = "his name is Jax";
    // favoriteEl.textContent = "My favorite foods are:";
    // li1.textContent = "Chicken Fingers";
    // li2.textContent = "Pizza";
    // li3.textContent = "Burgers";
    // li4.textContent = "Sushi";
    