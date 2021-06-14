//document Variable's
var startButton = document.getElementById("startQuiz");
var startPageEL = document.querySelector(".startPage");
var finalPageEL = document.querySelector(".finalPage");
var questionSectionEL = document.querySelector(".questionSection")
var countDownTimerEL = document.querySelector("#countDown");
var questionEL = document.querySelector("#question");
var questionOptionsEL = document.querySelector(".questionOptions");
var initalsInputEL = document.querySelector("#initials");
var submitInitialsEL = document.querySelector("#submitForm");

//Global Scope Variables

var timeRemaining = 60 

var question1 = {
    question: "What is JavaScript used for?",
    options: ["The markup of the website", "Creating interactive elements and experiences on the website", "Adding look and feel to the website", "Creating Headings on the website"],
    answer: "Creating interactive elements and experiences on the website"
};

var question2 = {
    question: "Which option is NOT a variable tpe?",
    answer: "Loops",
    options: ["String", "Loops", "Numbers", "Boolean"]
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

var question5 = {
    question: "What does the variable type 'Boolean' contain",
    options: ["true or flase", "Text", "large number", "HTML elements"],
    answer: "true/flase statements"
};



var questionlist = [question1, question2, question3, question4, question5]
var questionCounter = 0

//Start Quiz

function startQuiz () {
    startQuizDisplay()
    setTimer();
    addQuestion();
    questionOptionsEL.addEventListener("click", collectAnswer);
    submitInitialsEL.addEventListener("click", submitHighScore);
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
    document.querySelector("#finalScoreText").textContent = timeRemaining;
};

function submitHighScore (event) {
    event.preventDefault();

    var initals = initalsInputEL.value

    if (initals === "") {
            alert("Please enter intials")
            return;
    }
    else {
        var newScore = {
            "score": timeRemaining,
            "initials": initals,
        };
    
        var highScores = JSON.parse(localStorage.getItem("highScoreList"));
    
        if (highScores === null) {
                highScores = [newScore];
        }
        else {
            highScores.push(newScore);
          };
    
        localStorage.setItem("highScoreList", JSON.stringify(highScores));

        location.href = "highScores.html";   
    };
    
};

//Timer

function countDown () {

    if (questionCounter == questionlist.length) {
        countDownTimerEL.textContent = timeRemaining;
        return;
    }
    else if (timeRemaining <= 0) {
        countDownTimerEL.textContent = 0;
    }
    else {
        timeRemaining = timeRemaining - 1;
        countDownTimerEL.textContent = timeRemaining;
    };
}

function setTimer () {
    setInterval(countDown,1000);
    if (questionCounter == questionlist.length) {
        return;
    };
}

function addQuestion () {

    var options = questionlist[questionCounter].options;
    var question = questionlist[questionCounter].question;

    questionEL.textContent = question;

    shuffle(options);

    var counter = 1;

    for (i=0; i < options.length; i++) {
        var newListEL = document.createElement("li");

        var newButtonEL = document.createElement("button");
        newButtonEL.textContent = counter + ".  " + options[i];
        newButtonEL.setAttribute("class", "questionOption");
            
        questionOptionsEL.appendChild(newListEL);

        newListEL.appendChild(newButtonEL);

        counter = counter + 1;
    };  

    return;
}

function nextQuestion () {

    var questionListOptionsEL =  document.querySelectorAll(".questionOption");

    for (i=0; i < questionListOptionsEL.length; i++) {
        questionListOptionsEL[i].remove();
    };
       
    questionCounter++;
  
    if (questionCounter == questionlist.length) {
        finalPage();
        // questionCounter = 0;
    }
    else {
        addQuestion();
    };
    return;
};

function collectAnswer (event) {

        answer = event.target.textContent;

        console.log(answer);

        if (answer.includes(questionlist[questionCounter].answer)) {
            //add correct answer sound
        }
        else {
            //add wrong answer sound

            if (timeRemaining - 10 <= 0) {
                timeRemaining = 0
            }
            else {
                timeRemaining = timeRemaining - 10;  
            };
                  
        };   
                    
        nextQuestion();
};

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//Calls Start Quiz function

function init () {
    startButton.addEventListener("click", startQuiz);
    return;
};

init();





