var request = new XMLHttpRequest();
var genKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
var videoGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
var history = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
var film = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
var animals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';

loadData();

function loadData(){
    request.open('GET', genKnowledge);
    request.onload = loadComplete;
    request.send();
}

var questions = [10];
var answers = [4];
var questionSet = "";
var answerSet = ""; 

function loadComplete(evt){
    quizData = JSON.parse(request.responseText);
    for(var i  = 0; i < 10; i++){
        questions[i] = quizData.results[i].question;
        questionSet += "<div>" + questions[i] + "</div>" + "</br>";
        console.log(quizData.results[i]);   
    }
    document.getElementById("QuestionDisplay").innerHTML = questionSet;
}


