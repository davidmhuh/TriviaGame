//.. questions/answers/correct .. //

var number = 120;
    
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

$("#show-number").html("<h2>" + number + "</h2>");

if (number === 0) {
    stop();
    alert("Time Up!");

    
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var quizOver = false;
}
}    
run();


var allQuestions = [ {

    question : "What is the iconic weapon used by Jedi Knights in Star Wars?",
    choices : ["Light Saber", "Beam Sword", "Big Daddy", "Death Star"],
    correctAnswer: 0,
}, {
    question : "What is the name of Han Solo's ship?",
    choices : ["Pillar of Autumn", "USS Enterprise", "Death Glider", "Millennium Falcon"],
    correctAnswer: 3,
}, {
    question : "What bounty hunter captures Han Solo?",
    choices : ["Jango Fett", "Boba Fett", "Darth Vade", "Blade"],
    correctAnswer: 1,
}, {
    question : "How does Darth Vader plan to capture Luke?",
    choices : ["Freeze him", "Stun him", "Use the Force", "Bait him"],
    correctAnswer: 0,
}, {
}
]

    var correct;
    var incorrect;

    function trivia(){
        for(var i = 0; i < allQuestions.length; i++) {
            $("#main-content").append(allQuestions[i].question);
        }
        for (var j = 0; j < allQuestions[i].choices.length; j++) {
           $("#main-content").append(allQuestions[i].choices[j]);
            $(<input type="radio" name="answer" value="allQuestions[i].question, allQuestions[i].choices[j]"></input>);
            
            if (allQuestions[i].choices[j] === correctAnswer); {
                correct++; 
                correct();
            }
            else {
                incorrect++;
                incorrect();
            }

        }
        
    }
    function startGame () {
        number = 120;
        question = "";
        choices = ""
    }