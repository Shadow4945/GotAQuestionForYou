var request = new XMLHttpRequest();
var genKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
var videoGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
var books = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple';
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
         else if(quizNum == 3){request.open('GET', books);}
         else if(quizNum == 4){request.open('GET', film);}
         else if(quizNum == 5){request.open('GET', animals);}
         break;
         case "genQuiz":
            request.open('GET', genKnowledge);
         break;
         case "gameQuiz":
            request.open('GET', videoGames);
         break;
         case "bookQuiz":
            request.open('GET', books);
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

function checkScore(){
    var totalScore = 10;
    if(!(document.getElementById('q00').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q10').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q20').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q30').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q40').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q50').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q60').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q70').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q80').checked)){
        totalScore -= 1;
    }
    if(!(document.getElementById('q90').checked)){
        totalScore -= 1;
    }
    console.log(totalScore);  
}

var questions = [10];
var questionBegin = "";
var questionEnd = "</div>" + "</br>";

function loadComplete(evt){
    quizData = JSON.parse(request.responseText);
    for(var i  = 0; i < 10; i++){
        questions[i] = quizData.results[i].question;
        console.log(quizData.results[i]);
        questionBegin += "<div>" + questions[i] + "</br>" + "</br>" + 
        "<input id='q"+ i +"0' type='radio' name='q" + i + "' value='" +quizData.results[i].correct_answer +"'>" + quizData.results[i].correct_answer + "</br>" +
        "<input type='radio' name='q" + i + "' value='" +quizData.results[i].incorrect_answers[0] +"'>" + quizData.results[i].incorrect_answers[0] + "</br>" + 
        "<input type='radio' name='q" + i + "' value='" +quizData.results[i].incorrect_answers[1] +"'>" + quizData.results[i].incorrect_answers[1] + "</br>" +
        "<input type='radio' name='q" + i + "' value='" +quizData.results[i].incorrect_answers[2] +"'>" + quizData.results[i].incorrect_answers[2] + "</br"  + "</br>" + 
        questionEnd; 
    }
    document.getElementById("QuestionDisplay").innerHTML = questionBegin;
}


