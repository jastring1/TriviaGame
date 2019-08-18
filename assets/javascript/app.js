/* Trivia Game
   James Stringfield

*/

//declare variables and objects
$(document).ready(function () {
var correct;
var incorrect;
var unanswersed;
var interval;
var qTime = 15;
var answersed = false;
var index = 0;

var gameQuestions = [{
    question: "This is the Game Question",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question2",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question3",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question4",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question5",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question6",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question7",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question8",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question9",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question10",
    answers: ["This is where answers[0] goes", "This is where answers[1] goes", "This is where answers[2] goes", "This is where answers[3] goes"],
    correctIndex: 0,
}]

var timerBox = $("#timer-box");
var startButton = $("#start-button");
var questionBox = $("#question-box");
var answers = [$("#1"), $("#2"), $("#3"), $("#4")];


function startGame() {
    console.log("game has begun");
    startBox.remove();
    correct = 0;
    incorrect = 0;
    unanswersed = 0;
    loadQuestions();
}

function loadQuestions() {
    answersed = false; // will allow qTime to be pushed back to <h5> after round reset....else statement in function timer()
    interval = setInterval(timer, 1000);
    if (answersed === false) {
        timer();
    }
    correct = gameQuestions[index].correctIndex;
    var question = gameQuestions[index].question;
    questionBox.text(question);
    for (var i = 0; i < 4; i++) {
        var answers = gameQuestions[index].answers[i];
        answers.append('id=' + i + '>' + answers );
    }

    answers.click(function () {
        var id = $(this).attr('id');
        if (id === correctIndex) {
            answersed = true; 
            questionBox.text("Answer is: " + gameQuestions[index].answers[correctIndex]);
            correctanswers();
        } else {
            answersed = true; 
            questionBox.text("You picked " + gameQuestions[index].answers[id] + "But answer is:  " + gameQuestions[index].answers[correctIndex]);
            incorrectanswers();
        }
    });
}

function timer() {
    if (qTime === 0) {
        answersed = true;
        clearInterval(interval);
        questionBox.text("Answer is " + gameQuestions[index].answers[correctIndex]);
        unanswered();
    } else if (answersed === true) {
        clearInterval(interval);
    } else {
        qTime--;
        timerBox.text( qTime );
    }
}

function resetRound() {
    answers.remove();
    index++; 
    if (index < gameQuestions.length) {
        setTimeout(function () {
            loadQuestions();
        }, 5000); 
    } else {
        setTimeout(function () {
            questionBox.remove();
            timerBox.remove();
            answers.append( correct );
            answers.append(incorrect);
            answers.append( unanswersed);
            setTimeout(function () {
                location.reload();
            }, 5000);
        }, 3000);
    }
};

function correctanswers() {
    correct++;
    timerBox.text("Correct");
    resetRound();
}

function incorrectanswers() {
    incorrect++;
    timerBox.text("Incorrect");
    resetRound();

}

function unanswered() {
    unanswersed++;
    timerBox.text("You did not choose an answer");
    resetRound();
}

startButton.on("click", function () {
    startButton.hide();
    startGame();

});

});

