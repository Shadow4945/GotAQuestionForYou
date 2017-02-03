var request = new XMLHttpRequest();
var genKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
var videoGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
var history = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
var film = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
var animals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';
var quizChoice;
// window.onload = function(){
//     var links = document.getElementsByTagName("a");
//     var linkCount = links.length;

//     for(var i = 0; i<=linkCount; i++){
//         links[i].onclick = loadQuiz(links[i].className);
//     }
// }


getParameter();
loadData();

function loadData(){
    switch(quizChoice){

        case "randomQuiz":
         var quizNum = Math.floor(Math.random() * (6 - 1) + 1);
         console.log(quizNum)
         if(quizNum == 1){request.open('GET', genKnowledge);}
         else if(quizNum == 2){request.open('GET', videoGames);}
         else if(quizNum == 3){request.open('GET', history);}
         else if(quizNum == 4){request.open('GET', film);}
         else if(quizNum == 5){request.open('GET', animals);}
         break;
         case "genQuiz":
            request.open('GET', genKnowledge);
         break;
         case "gameQuiz":
            request.open('GET', videoGames);
         break;
         case "historyQuiz":
            request.open('GET', history);
         break;
         case "filmQuiz":
            request.open('GET', film);
         break;
         case "animalQuiz":
            request.open('GET', animals);
         break;
         
     }
     request.onload = loadComplete;
     request.send();
}

function getParameter(){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var pair = vars[0].split("=");
    quizChoice = pair[1];
        
    
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


