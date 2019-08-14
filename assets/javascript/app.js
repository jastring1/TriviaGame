/* Trivia Game
   James Stringfield

*/

//declare variables and objects
var gameQuestions = [{
    question: "This is the Game Question",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question2",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question3",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question4",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question5",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question6",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question7",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question8",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question9",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}, {
    question: "This is the Game Question10",
    answers: ["This is where answer[0] goes", "This is where answer[1] goes", "This is where answer[2] goes", "This is where answer[3] goes"],
    correctIndex: 0,
}]

var questionArray;
var timerBox = $("#timer-box");
var startButton = $("#start-button");
var titleBox = $("#title-box");
var questionBox = $("#question-box");
var answer = [$("#answer-1"), $("#answer-2"), $("#answer-3"), $("#answer-4")];
var results = $("#result-box");

var isPlaying = false;

//try to read in values from files


//declare functions
function loadInfo() {

}

function startScreen() {
    questionBox.hide();
    timerBox.hide();
    for (var i = 0; i < 4; i++) { answer[i].hide(); }
    results.hide();
}

function playGame() {
    titleBox.hide();
    startButton.hide();
    questionBox.show();
    timerBox.show();
    for (var i = 0; i < 4; i++) { answer[i].show(); }
    //will need to loop to run through questions
    for (var j=0;j<10;j++){
    questionBox.text(gameQuestions[j].question);
    for (var i = 0; i < 4; i++) { answer[i].text(gameQuestions[j].answers[i]); }
    }


}
//start game when button clicked
$(document).ready(function () {

    loadInfo();
    startScreen();
    startButton.click(function () {
        playGame();
    });

    showResults();


});

