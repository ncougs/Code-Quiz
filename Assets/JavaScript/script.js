//documnent Variable's
var startButton = document.getElementById("startQuiz");
var startPageEL = document.querySelector(".startPage");
var questionSectionEL = document.querySelector(".questionSection")
var countDownTimerEL = document.querySelector("#countDown");
var questionEL = document.querySelector("#question");
var questionOptions = document.querySelector(".questionOptions")
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

//Global Scope Variables
var timeRemaining = 60  
var question1 = {
    question: "What is my dogs name?",
    options: ["Jobe", "Barney", "Archie", "Lenny"],
    answer: "Archie"
};

//Start Quiz

function startQuiz () {
    startPageEL = startPageEL.style.display = "none";
    questionSectionEL = questionSectionEL.style.display = "block";
    setTimer();
    addQuestion();
    AnswerQuestion();
}

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
    setInterval(countDown,1000)
}

function addQuestion () {
    questionEL.textContent = question1.question;
    option1.textContent = "1.   " + question1.options[0]
    option2.textContent = "2.   " + question1.options[1]
    option3.textContent = "3.   " + question1.options[2]
    option4.textContent = "4.   " + question1.options[3]
}

function AnswerQuestion () {
    var answer;

    questionOptions.addEventListener("click", function (event){
        answer = event.target.textContent;

        console.log(answer);

        if (answer.includes(question1.answer)) {
            window.alert("Correct!");
        }
        else {
            window.alert("wrong...");
            timeRemaining = timeRemaining - 10;
        };
    });
}









//Calls Start Quiz function
startButton.addEventListener("click", startQuiz);