//create questions object with questions,answers,correct answer and gifs
var triviaQuestions = [{
        question: "What is the longest movie ever made?",
        answers: {
            a: "DANCES WITH WOLVES",
            b: "HAMLET",
            c: "LOGISTICS",
            d: "THE STAND"
        },
        answer: 'c',
        correctAnswer: "LOGISTICS",
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
        answer: 'c',
        correctAnswer: "BLACK KNIGHT",
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
        answer: 'c',
        correctAnswer: "THE INCREDIBLES",
        gif: "<img src='https://media.giphy.com/media/cituf0Vb5FYSk/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "Who is the only Top Gun actor who didn't vomit while in the fighter jets?",
        answers: {
            a: "ANTHONY EDWARDS",
            b: "TOM CRUISE",
            c: "VAL KILMER",
            d: "JOHN STOCKWELL"
        },
        answer: 'a',
        correctAnswer: "ANTHONY EDWARDS",
        gif: "<img src='https://media.giphy.com/media/8qhPxH21vOG4w/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "In The Wizard of Oz (1939), what was used to simulate snow during the poppy scene?",
        answers: {
            a: "COCONUT FLAKES",
            b: "ASBESTOS",
            c: "CORNFLAKES",
            d: "POWDERED SUGAR"
        },
        answer: 'b',
        correctAnswer: "ASBESTOS",
        gif: "<img src='https://media.giphy.com/media/bd1Fnrsrg91FS/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "What book did Jesse Eisenberg purchase during rehearsals for The Social Network?",
        answers: {
            a: "THE STRUCTURE OF SCIENTIFIC REVOLUTIONS",
            b: "THE FACEBOOK EFFECT",
            c: "SAPIENS",
            d: "C++ FOR DUMMIES"
        },
        answer: 'd',
        correctAnswer: "C++ FOR DUMMIES",
        gif: "<img src='https://media.giphy.com/media/GAeH0yZbyggdq/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "How long did it take to render each frame (1/24th of a second) of the CGI scenes in the movie Avatar?",
        answers: {
            a: "47 MINUTES",
            b: "47 DAYS",
            c: "47 HOURS",
            d: "47 SECONDS"
        },
        answer: 'c',
        correctAnswer: "47 HOURS",
        gif: "<img src='https://media.giphy.com/media/m9PW4tmO6bxrG/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "Who was the first Disney princess with a tattoo?",
        answers: {
            a: "MERIDA",
            b: "SNOW WHITE",
            c: "MULAN",
            d: "POCAHONTAS"
        },
        answer: 'd',
        correctAnswer: "POCAHONTAS",
        gif: "<img src='https://media.giphy.com/media/yQWkWLGL120so/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "In Deadpool, Wade Wilson teams up with Colossus and what other member of the X-men?",
        answers: {
            a: "JUBILEE                                     ",
            b: "WOLVERINE",
            c: "CANNONBALL",
            d: "NEGASONIC TEENAGE WARHEAD"
        },
        answer: 'd',
        correctAnswer: "NEGASONIC TEENAGE WARHEAD",
        gif: "<img src='https://media.giphy.com/media/l4pSY7O2rfgx7Urza/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "In which movie did 007 first utter the iconic phrase:'Bond ... James Bond'?",
        answers: {
            a: "GOLDFINGER",
            b: "DR. NO",
            c: "YOU ONLY LIVE TWICE",
            d: "FROM RUSSIA WITH LOVE"
        },
        answer: 'b',
        correctAnswer: "DR. NO",
        gif: "<img src='https://media.giphy.com/media/3oEjHNCWpx4iQYytAA/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "In Back to the Future, where does Dr Brown get the plutonium to power his time machine?",
        answers: {
            a: "RUSSIAN MOB",
            b: "CHINESE 'BUSINESSMEN'",
            c: "LIBYAN TERRORISTS",
            d: "THE FUTURE"
        },
        answer: 'c',
        correctAnswer: "LIBYAN TERRORISTS",
        gif: "<img src='https://media.giphy.com/media/7ihxv12rz0i7S/giphy.gif' width='400px' height='250px'/>"

    },
    {
        question: "What movie popularized the phrase:'Show me the money'?",
        answers: {
            a: "BOYZ N THE HOOD",
            b: "JERRY MAGUIRE",
            c: "MONEYBALL",
            d: "RISKY BUSINESS"
        },
        answer: 'b',
        correctAnswer: "JERRY MAGUIRE",
        gif: "<img src='https://media.giphy.com/media/7B71Ci4KE3m0/giphy.gif' width='400px' height='250px'/>"

    }
];

//console.log(triviaQuestions);
var playerAnswers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countdownTimer;
var questionIndex = 0;
var countdown = 25;

//when start button clicked start the trivia, display questions with running timer
//hide start button
$("#start").click(function () {
    console.log("start");
    $(".button, #quiz").toggle();
    //displayQuestion();
    startGame()
});

function startGame() {
    displayQuestion();
};
//TIMER
//set up timer 25 sec. per question when start button clicked start and 
//stops when question is answered or run out of time, displayed on a question page
//timer
function timer() {
    countdownTimer = setInterval(time, 1000);

    function time() {
        if (countdown === 0) {
            outOfTime()
            stopTimer()
            //make a function run out of time

        }
        if (countdown > 0) {
            countdown--;
            console.log(countdown)
        }
        $("#timer").text("Time remaining: " + "00:" + countdown + " secs");
    }

};

//stop timer
function stopTimer() {
    clearInterval(countdownTimer);
};

//when run out of time, display answer page with "Time is up" message
function outOfTime() {
    console.log("out of time")
    stopTimer()
    unanswered++;
    $("#message").text("TIME's UP!");
    displayAnswer()
    $("#correct-answer").show();
    $("#quiz,#answers").toggle();
};

//page with a question and 4 options for answer,and running timer
//when answer clicked goes to the answer page
function displayQuestion() {
    console.log("questions")
    stopTimer()
    timer()
    countdown =25;
    $("#timer").text("Time remaining: " + "00:" + countdown + " secs");
    //display questions 
    $("#questions").text(triviaQuestions[questionIndex].question);
    //display 4 answers
    $("#answer1").text(triviaQuestions[questionIndex].answers.a)
    $("#answer2").text(triviaQuestions[questionIndex].answers.b)
    $("#answer3").text(triviaQuestions[questionIndex].answers.c)
    $("#answer4").text(triviaQuestions[questionIndex].answers.d)

};
//page with answer: display message, correct answer and gif for 4sec.
function displayAnswer() {
    console.log('answer');
    console.log(triviaQuestions[questionIndex].correctAnswer);
    $("#correct-answer").text("Correct Answer is: " + triviaQuestions[questionIndex].correctAnswer)
    $("#gif").html(triviaQuestions[questionIndex].gif)
    setTimeout(nextQuestion, 4000)
};
//if statement for going through every questions
function nextQuestion() {
    if (questionIndex <= triviaQuestions.length) {
        console.log("next Q")
        questionIndex++;
    };
    if (questionIndex === triviaQuestions.length) {
        stopTimer()
        displayResults();
        console.log("over");
    };
    displayQuestion();
    $("#answers,#quiz").toggle();
}

//display result and ask if player want to try again
function displayResults() {
    stopTimer()
    $("#answers,#result").toggle();
    $("#final-message").text("Great Job!");
    $("#correct").html("Correct answers: " + correctAnswers);
    $("#incorrect").html("Incorrect answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#start-over").text("Try Again?");
    $("#start-over").on("click", function () {
        restartGame();
    });

};
//Restart game without refreshing the page
function restartGame() {
    console.log("restart")
    playerAnswers = [];
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    countdownTimer;
    questionIndex = 0;
    countdown = 25;
    stopTimer()
    $("#result, #quiz").toggle();
    startGame();
};

//logic of the game
//when clicked on the answer
//change question page to answer page
$(".answer").on("click", function () {
    console.log($(this).attr('value'))
    $("#quiz,#answers").toggle();
    stopTimer()
    //if answered correctly and in time
    //display a message and display GIF for 3 sec.
    if ($(this).attr('value') === triviaQuestions[questionIndex].answer && countdown >= 0) {
        console.log("correct")
        $("#correct-answer").hide();
        $("#message").text("CORRECT!");
        correctAnswers++
        displayAnswer();
    };
    //if answered incorrectly and in time
    //display a message and GIF for 3 sec.
    if ($(this).attr('value') !== triviaQuestions[questionIndex].answer && countdown >= 0) {
        console.log("incorrect")
        $("#correct-answer").show();
        $("#message").text("INCORRECT!")
        incorrectAnswers++
        displayAnswer();
    };
});