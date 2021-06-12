//documnent Variable's
var startButton = document.getElementById("startQuiz");
var startPageEL = document.querySelector(".startPage");
var finalPageEL = document.querySelector(".finalPage");
var questionSectionEL = document.querySelector(".questionSection")
var countDownTimerEL = document.querySelector("#countDown");
var questionEL = document.querySelector("#question");
var questionOptionsEL = document.querySelector(".questionOptions");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

//Global Scope Variables
var timeRemaining = 60 

var question1 = {
    question: "What is JavaScript used for?",
    options: ["The markup of the website", "Creating interactive elements and experiences on the website", "Adding look and feel to the website", "Creating Headings on the website"],
    answer: "Creating interactive elements and experiences on the website"
};

var question2 = {
    question: "Which option is NOT a variable tpe?",
    options: ["String", "Loops", "Numbers", "Boolean"],
    answer: "Loops"
};

var question3 = {
    question: "How do you access the Document Object Model?",
    options: ["window.document", "window.element", "element.body", "window.element.body"],
    answer: "window.document"
};

var question4 = {
    question: "How to you retrieve Local Storage?",
    options: ["localStorage.retrieveItem(name)", "localStorage.getItem(name)", "getLocalStorage(name)", "storageItem(name)"],
    answer: "localStorage.getItem(name)"
};

var questionlist = [question1, question2, question3, question4]
var questionCounter = 0

//Start Quiz

function startQuiz () {
    startQuizDisplay()
    setTimer();
    addQuestion(questionlist[questionCounter]);
    questionOptionsEL.addEventListener("click", collectAnswer);
}


function startQuizDisplay () {
    startPageEL.style.display = "none";
    finalPageEL.style.display = "none";
    questionSectionEL.style.display = "block";    
};

function finalPage () {
    startPageEL.style.display = "none";
    finalPageEL.style.display = "block";
    questionSectionEL.style.display = "none"; 
    document.querySelector("#finalScoreText").textContent = timeRemaining
};

//Timer

function countDown () {

    if (timeRemaining <= 0) {
        countDownTimerEL.textContent = 0;
    }
    else {
        timeRemaining = timeRemaining - 1;
        countDownTimerEL.textContent = timeRemaining;
    };
}

function setTimer () {
    setInterval(countDown,1000);
}

function addQuestion (question) {
    questionEL.textContent = question.question;
    option1.textContent = "1.   " + question.options[0]
    option2.textContent = "2.   " + question.options[1]
    option3.textContent = "3.   " + question.options[2]
    option4.textContent = "4.   " + question.options[3]
}

function nextQuestion () {
       
    questionCounter++;
  
    console.log(questionCounter);

    if (questionCounter == questionlist.length) {
        finalPage();
        questionCounter = 0;
    }
    else {
        addQuestion(questionlist[questionCounter]);
    };
};

function collectAnswer (event) {

        answer = event.target.textContent;

        console.log(answer);

        if (answer.includes(questionlist[questionCounter].answer)) {
            //add correct answer sound
        }
        else {
            //add wrong answer sound
            timeRemaining = timeRemaining - 10;
        };   
                    
        nextQuestion();
};


//Calls Start Quiz function
startButton.addEventListener("click", startQuiz);
