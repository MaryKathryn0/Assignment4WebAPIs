var content = document.querySelector("content");
var q1El = document.querySelector("q1");
var q2El = document.querySelector("q2");
var q3El = document.querySelector("q3");
var q4El = document.querySelector("q4");
var q5El = document.querySelector("q5");

var allQuestionsFinished = false

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

//Create necessary elements

var content = document.getElementById("content");
var guide = document.querySelector(".guide");
var qBox = document.querySelector(".qBox");
var questions = document.getElementById("questions");
var choices = document.getElementById("choices");
var finish = document.querySelector(".finish");
var leaderBoard = document.querySelector(".leaderBoard");
var start = document.getElementById("start");


start.addEventListener("click", function () {
    guide.style.display = "none";
    qBox.style.display = "block";


    function generateQ(index) {
        if (index >= allQuestionsList.length) {
            allQuestionsListFinished = true;
        }
        else {
            
                generateQ.textContent = allQuestionsList[index].question[i];
                


            }

            for (var i = 0; i < 4; i++) {
                var generateB = document.createElement("button");
                generateB.textContent = allQuestionsList[index].choices[i];
                choices.append(generateB);

            }
        }
    

})

    // start.addEventListener("click", function () {
    //     guide.style.display = "none";
    //     questions.style.display = "block";