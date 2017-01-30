var request = new XMLHttpRequest();
var genKnowledge = 'https://www.opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
var videoGames = 'https://www.opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
var mathematics = 'https://opentdb.com/api.php?amount=10&category=19&difficulty=medium';
var film = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
var animals = 'https://www.opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';

loadData();

function loadData(){
    request.open('GET', 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt){
    quizData = JSON.parse(request.responseText);
    console.log(quizData.results);
}