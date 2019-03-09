//create variables questions
var triviaQuestions = [{
        question: "What is the longest movie ever made?",
        answers: {
            a: "DANCES WITH WOLVES",
            b: "HAMLET",
            c: "LOGISTICS",
            d: "THE STAND"
        },
        correctAnswer: 'c',
        gif: "<img src='https://media.giphy.com/media/3o72F0xOHtcV8K153q/giphy.gif' width='400px' height='250px'/>"
    },
    {
        question: "What character in Monty Python and the Holy Grail insists that 'It's just a flesh wound'?",
        answers: {
            a: "ROGER THE SHRUBBER",
            b: "KING ARTHUR",
            c: "BLACK KNIGHT",
            d: "SIR LANCELOT"
        },
        correctAnswer: 'c',
        gif: "<img src='https://media.giphy.com/media/fqEIk7Mqyij7O/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "What was the first movie by Pixar to receive a rating higher than G in the United States?",
        answers: {
            a: "MONSTERS INC.",
            b: "TOY STORY",
            c: "THE INCREDIBLES",
            d: "FINDING NEMO"
        },
        correctAnswer: 'c',
        gif: "<img src='https://media.giphy.com/media/cituf0Vb5FYSk/giphy.gif' width='400px' height='250px'/>"
        // ""
    },
    {
        question: "Who is the only Top Gun actor who didn't vomit while in the fighter jets?",
        answers: {
            a: "ANTHONY EDWARDS",
            b: "TOM CRUISE",
            c: "VAL KILMER",
            d: "JOHN STOCKWELL"
        },
        correctAnswer: 'a',
        gif: "<img src='https://media.giphy.com/media/8qhPxH21vOG4w/giphy.gif' width='400px' height='250px'/>"
        //  ""
    },
    {
        question: "In The Wizard of Oz (1939), what was used to simulate snow during the poppy scene?",
        answers: {
            a: "COCONUT FLAKES",
            b: "ASBESTOS",
            c: "CORNFLAKES",
            d: "POWDERED SUGAR"
        },
        correctAnswer: 'b',
        gif: "<img src='https://media.giphy.com/media/bd1Fnrsrg91FS/giphy.gif' width='400px' height='250px'/>"

        //""
    },
    {
        question: "What book did Jesse Eisenberg purchase during rehearsals for The Social Network?",
        answers: {
            a: "THE STRUCTURE OF SCIENTIFIC REVOLUTIONS",
            b: "THE FACEBOOK EFFECT",
            c: "SAPIENS",
            d: "C++ FOR DUMMIES"
        },
        correctAnswer: 'd',
        gif: "<img src='https://media.giphy.com/media/GAeH0yZbyggdq/giphy.gif' width='400px' height='250px'/>"
        // ""
    },
    {
        question: "How long did it take to render each frame (1/24th of a second) of the CGI scenes in the movie Avatar?",
        answers: {
            a: "47 MINUTES",
            b: "47 DAYS",
            c: "47 HOURS",
            d: "47 SECONDS"
        },
        correctAnswer: 'c',
        gif: "<img src='https://media.giphy.com/media/m9PW4tmO6bxrG/giphy.gif' width='400px' height='250px'/>"
        //""
    },
    {
        question: "Who was the first Disney princess with a tattoo?",
        answers: {
            a: "MERIDA                  ",
            b: "SNOW WHITE",
            c: "MULAN",
            d: "POCAHONTAS"
        },
        correctAnswer: 'd',
        gif: "<img src='https://media.giphy.com/media/yQWkWLGL120so/giphy.gif' width='400px' height='250px'/>"
        // ""
    },
    {
        question: "In Deadpool, Wade Wilson teams up with Colossus and what other member of the X-men?",
        answers: {
            a: "JUBILEE                                     ",
            b: "WOLVERINE",
            c: "CANNONBALL",
            d: "NEGASONIC TEENAGE WARHEAD"
        },
        correctAnswer: 'd',
        gif: "<img src='https://media.giphy.com/media/l4pSY7O2rfgx7Urza/giphy.gif' width='400px' height='250px'/>"
        // "",

    },
    {
        question: "In which movie did 007 first utter the iconic phrase:'Bond ... James Bond'?",
        answers: {
            a: "GOLDFINGER",
            b: "DR. NO",
            c: "YOU ONLY LIVE TWICE",
            d: "FROM RUSSIA WITH LOVE"
        },
        correctAnswer: 'b',
        gif: "<img src='https://media.giphy.com/media/3oEjHNCWpx4iQYytAA/giphy.gif' width='400px' height='250px'/>"
        //""
    },
    {
        question: "In Back to the Future, where does Dr Brown get the plutonium to power his time machine?",
        answers: {
            a: "RUSSIAN MOB",
            b: "CHINESE 'BUSINESSMEN'",
            c: "LIBYAN TERRORISTS",
            d: "THE FUTURE"
        },
        correctAnswer: 'c',
        gif: "<img src='https://media.giphy.com/media/7ihxv12rz0i7S/giphy.gif' width='400px' height='250px'/>"
        //""
    },
    {
        question: "What movie popularized the phrase:'Show me the money'?",
        answers: {
            a: "BOYZ N THE HOOD",
            b: "JERRY MAGUIRE",
            c: "MONEYBALL",
            d: "RISKY BUSINESS"
        },
        correctAnswer: 'b',
        gif: "<img src='https://media.giphy.com/media/7B71Ci4KE3m0/giphy.gif' width='400px' height='250px'/>"
        //""
    }
];

//console.log(triviaQuestions);
var playerAnswers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countdownTimer;
var questionIndex = 0;


//when start button clicked start the trivia
function startGame() {
    //hide start button
    $("#start").click(function () {
        $(".button, #quiz").toggle();
    });
    displayQuestion();
    timer();

};
startGame();
//set up timer 40 sec. per questions when start button clicked
//display timer
function timer() {
    $("#start").click(function () {
        var countdown = 10;
        $("#timer").text("Time Remaining:" + countdown)
        countdownTimer = setInterval(function () {
            countdown--;
            $("#timer").text("Time Remaining:" + countdown)
            if (countdown === 0) {
                stop();
            };
        }, 1000);
    });

    function stop() {
        clearInterval(countdownTimer);
    }
};



function displayQuestion() {
    //display questions 
    $("#questions").text(triviaQuestions[questionIndex].question);
    //display 4 answers
    $("#answer1").text(triviaQuestions[questionIndex].answers.a)
    $("#answer2").text(triviaQuestions[questionIndex].answers.b)
    $("#answer3").text(triviaQuestions[questionIndex].answers.c)
    $("#answer4").text(triviaQuestions[questionIndex].answers.d)

}

function displayAnswer() {
    $("#correct-answer").text("Correct Answer is:" + triviaQuestions[questionIndex].answer)
    $("#gif").html(triviaQuestions[questionIndex].gif)
    console.log(triviaQuestions[questionIndex].answer)
}

function displayResults() {
    $("#correct").append(correctAnswers)
    $("#incorrect").append(incorrectAnswers)
    $("#unanswered").append(unanswered)

}

$(".answer").on("click", function () {
    setTimeout(displayAnswer, 1000 * 5);

    
    console.log($(this).attr('value'))
    //logic of the game
    //change question page to answer page
    $("#quiz,#answers").toggle();
    //if answered correctly in time
    //display a message 
    //display GIF
    //for 10 sec.
    if ($(this).attr('value') === triviaQuestions[questionIndex].correctAnswer && countdownTimer > 0) {
        
        displayAnswer();
        $("#correct-answer").hide();
        $("#message").text("CORRECT!");
        correctAnswers++
        
    };
    
    
        //if answered incorrectly in time
        //stop timer
        //display a message 
        //display GIF
        //for 10 sec.
        if ($(this).attr('value') !== triviaQuestions[questionIndex].correctAnswer && countdownTimer > 0 ) {
            displayAnswer();
            $("#message").text("INCORRECT!")
            incorrectAnswers++

        };
        //if run out of time
        //stop timer
        //display a message 
        //display GIF
        //for 10 sec.
        if (countdownTimer === 0) {
            displayAnswer();
            $("#message").text("TIME's UP!")
            unanswered++;
        };
        $("#answers,#quiz,").toggle();
        displayQuestion();
});