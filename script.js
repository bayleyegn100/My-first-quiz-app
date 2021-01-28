// select all elements
var header = document.getElementById("header");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var time = document.getElementById("timer");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var answer = document.getElementById("answer");
var reaction = document.getElementById("reaction");
var result = document.getElementById("result");
var clearButton = document.getElementById("clear");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var initialsWithSpan = document.querySelector("#initialsWithScore");
var initialsCard = document.getElementById("initialsCard");
var scoreCard = document.getElementById("scoreCard");
var counter = document.getElementById("counter");

// creating questions with thier respective choices and correct answer
var questions = [
    {
        question: "The condition in an if/else statment is enclosed within:",
        choiceA: "quotes",
        choiceB: "Curly brackets",
        choiceC: "For loop",
        choiceD: "square brakeats",
        answer: "B",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the devugger is:",

        choiceA: "Javascript",
        choiceB: "Terminal / Bash",
        choiceC: "For loop",
        choiceD: "consol log",
        answer: "B",
    },
    {
        question: "Arrays in Javascript can be used to _______.",

        choiceA: "Numbers and strings",
        choiceB: "Other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        answer: "D",
    },
    {
        question: "string values must be enclosed wihtin ..... when being assingned to variables",

        choiceA: "Commas",
        choiceB: "Curly brackets",
        choiceC: "quots",
        choiceD: "Parenthesis",
        answer: "C",
    },

];

// create additional variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var time = 60;
var questionTime = 10;
var TIMER;

// render a question
function renderQuestion() {

    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// eventListner method
start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {

    header.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderQuestion();
    renderTime();
    TIMER = setInterval(renderTime, 1000); // 1000ms = 1s
}

//defining a function for wrong answer
function answerIsWrong() { }

// time render function
function renderTime() {

    if (time >= 1) {
        timer.innerHTML = time;
        time--;
    } else {
        answerIsWrong();
        clearInterval(TIME);
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
            time--;
            renderTimer();
        } else {
            // end the quiz and show the timer
            clearInterval(TIMER);
            initialsCardRender();
        }
    }
}

// submit initials and score

function initialsCardRender() {
    counter.innerHTML = " " + time
    quiz.style.display = "none"
    initialsCard.style.display = "block";
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = document.getElementById("initials").value;

    localStorage.setItem("initials", initials);
    renderLastRegistered();
    initialsCard.style.display = "none";

});
function renderLastRegistered() {
    var initials = localStorage.getItem("initials");

    if (!initials) {
        return;
    }
    initialsWithSpan.textContent = initials
    scoreCard.style.display = "block";
}

//clear textarea
clear.addEventListener("click", function (event) {
    event.preventDefault();
    initialsWithSpan.innerHTML = "";

})


//checkAnswer
function checkAnswer(answer) {

    if (questions[runningQuestion].answer == answer) {
        reaction.innerHTML = "correct";
        time--;

    } else {
        //answer is wrong
        reaction.innerHTML = "wrong";

    }
    // time = time - questionTime
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
        renderTime();
        time--;
    } else {
        // end the quiz and show the timer
        clearInterval(TIMER);
        initialsCardRender();
    }

}





