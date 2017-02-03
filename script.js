var request = new XMLHttpRequest();
var genKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
var videoGames = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';
var books = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple';
var film = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
var animals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';
var quizChoice;
var quizNum = Math.floor(Math.random() * (6 - 1) + 1);
// window.onload = function(){
//     var links = document.getElementsByTagName("a");
//     var linkCount = links.length;

//     for(var i = 0; i<=linkCount; i++){
//         links[i].onclick = loadQuiz(links[i].className);
//     }
// }


getParameter();

window.onload = function loadData(){
    if(document.location.href.indexOf("index.html") > -1){
        document.getElementById("general").innerHTML = "<span>" + getCookie("gk") + "</span>";
        document.getElementById("game").innerHTML = "<span>" + getCookie("vg") + "</span>";
        document.getElementById("books").innerHTML = "<span>" + getCookie("b") + "</span>";
        document.getElementById("film").innerHTML = "<span>" + getCookie("f") + "</span>";
        document.getElementById("animal").innerHTML = "<span>" + getCookie("a") + "</span>";
    }
    if(document.location.href.indexOf("Quiz.html")>-1){

        switch(quizChoice){

        case "randomQuiz":
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
     
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
    document.getElementById("userScore").innerHTML = "Your Score: " + totalScore;

    switch(quizChoice){

        case "randomQuiz":
         console.log(quizNum);
         if(quizNum == 1){if(totalScore < getCookie("gk")){
                break;
            }else{
                document.cookie = 'gk='+totalScore+'';
            }}
         else if(quizNum == 2){if(totalScore < getCookie("vg")){
                break;
            }else{
                document.cookie = 'vg='+totalScore+'';
            }}
         else if(quizNum == 3){if(totalScore < getCookie("b")){
                break;
            }else{
                document.cookie = 'b='+totalScore+'';
            }}
         else if(quizNum == 4){if(totalScore < getCookie("f")){
                break;
            }else{
                document.cookie = 'f='+totalScore+'';
            }}
         else if(quizNum == 5){if(totalScore < getCookie("a")){
                break;
            }else{
                document.cookie = 'a='+totalScore+'';
            }}
         break;
         
         case "genQuiz":
            if(totalScore < getCookie("gk")){
                break;
            }else{
                document.cookie = 'gk='+totalScore+'';
            }
         break;
         case "gameQuiz":
            if(totalScore < getCookie("vg")){
                break;
            }else{
                document.cookie = 'vg='+totalScore+'';
            }
         break;
         case "bookQuiz":
            if(totalScore < getCookie("b")){
                break;
            }else{
                document.cookie = 'b='+totalScore+'';
            }
         break;
         case "filmQuiz":
            if(totalScore < getCookie("f")){
                break;
            }else{
                document.cookie = 'f='+totalScore+'';
            }
         break;
         case "animalQuiz":
            if(totalScore < getCookie("a")){
                break;
            }else{
                document.cookie = 'a='+totalScore+'';
            }
         break;
         
     }
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


