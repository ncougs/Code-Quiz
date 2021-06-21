var displayHighScoreEL = document.querySelector("#displayHighScores");
var goBackEL = document.querySelector("#restartQuiz");
var resetScoresEL = document.querySelector("#clearScores");

//Add highscores to page. 
function addHighScores () {

    var counter = 1;

    var highScores = JSON.parse(localStorage.getItem("highScoreList"));

    if (highScores == null) {
        return;
    }
    else {

        highScores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        
        highScores.forEach(element => {

            var newListEL = document.createElement("li");
            newListEL.textContent = counter + ".    " +  element.initials.toUpperCase().trim() + " - " + element.score; 
            newListEL.setAttribute("class", "highScore");

            if (localStorage.getItem("newestResult")===element.submitted && localStorage.getItem("newResult")=="true") {
                newListEL.setAttribute("class", "highScore lastestResult");
            };
        
            displayHighScoreEL.appendChild(newListEL);

            counter = counter + 1;
        });
    return;
    };
};

//Go back to main page. 
function goBack () {
    location.href = "index.html";   
};

//Rest highscore list
function resetScores () {
    localStorage.setItem("highScoreList", null);

    var scoreListEL =  document.querySelectorAll(".highScore");

    if (scoreListEL.length === 0) {
        return;
    }
    else {

        for (i=0; i < scoreListEL.length; i++) {
            scoreListEL[i].remove();
        };

    };
return;    
};


//When reaching the page, these functions are called.
addHighScores()
goBackEL.addEventListener("click", goBack);
resetScoresEL.addEventListener("click", resetScores);

