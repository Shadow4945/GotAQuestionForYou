var request = new XMLHttpRequest();
var genKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
var videoGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
var mathematics = 'https://opentdb.com/api.php?amount=10&category=19&difficulty=medium';
var film = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
var animals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';

loadData();

function loadData(){
    request.open('GET', genKnowledge);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt){
    quizData = JSON.parse(request.responseText);
    for(var i  = 0; i < 10; i++){
        console.log(quizData.results[i]);
        
    }
}