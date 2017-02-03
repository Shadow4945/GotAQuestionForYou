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
var response; 
var questionBegin = "";
var questionEnd = "</div>" + "</br>"

function loadComplete(evt){
    quizData = JSON.parse(request.responseText);
    for(var i  = 0; i < 10; i++){
        questions[i] = quizData.results[i].question;
        console.log(quizData.results[i]);
        questionBegin += "<div>" + questions[i] + "</br>" + "</br>" + 
        quizData.results[i].correct_answer + "</br>" +
        quizData.results[i].incorrect_answers[0] + "</br>" + 
        quizData.results[i].incorrect_answers[1] + "</br>" +
        quizData.results[i].incorrect_answers[2] + "</br"  + "</br>" + 
        questionEnd; 
    }
    document.getElementById("QuestionDisplay").innerHTML = questionBegin;
}


