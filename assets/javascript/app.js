//create variables questions
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

];

//console.log(triviaQuestions);
var playerAnswers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countdownTimer;
var questionIndex = 0;
var countdown = 27;

//when start button clicked start the trivia, display questions with running timer
//hide start button
$("#start").click(function () {
    console.log("start");
    $(".button, #quiz").toggle();
    countdownTimer = setInterval(timer, 1000);
    displayQuestion();

});
//TIMER
//set up timer 40 sec. per question when start button clicked
//display timer
function timer() {
    countdown--;
    console.log(countdown);
    $("#timer").text("Time remaining: " + "00:" + countdown + " secs");
    if (!countdown) {
        stopTimer();
        // console.log("test");
        $("#message").text("TIME's UP!");
        displayAnswer();
        unanswered++;
        stopTimer()
        //timer();
        //displayQuestion();
        countdownTimer = setInterval(timer, 1000);
        questionIndex++
        $("#answers,#quiz").toggle()

    }
    stopTimer()
};

function stopTimer() {
    clearInterval(countdownTimer);
};

function displayQuestion() {
    console.log("questions")
    countdownTimer = setInterval(timer, 1000);
    $("#timer").text("Time remaining: " + "00:" + countdown + " secs");
    stopTimer()

    //timer();
    //display questions 
    $("#questions").text(triviaQuestions[questionIndex].question);
    //display 4 answers
    $("#answer1").text(triviaQuestions[questionIndex].answers.a)
    $("#answer2").text(triviaQuestions[questionIndex].answers.b)
    $("#answer3").text(triviaQuestions[questionIndex].answers.c)
    $("#answer4").text(triviaQuestions[questionIndex].answers.d)
    //console.log("next question")

};

function displayAnswer() {
    console.log('answer');
    stopTimer();
    //countdownTimer = setInterval(timer, 1000);
    // timer()
    //console.log(triviaQuestions[questionIndex].correctAnswer);
    //display message, correct answer and gif 
    $("#correct-answer").text("Correct Answer is: " + triviaQuestions[questionIndex].correctAnswer)
    $("#gif").html(triviaQuestions[questionIndex].gif)

    setTimeout(function () {
        if (questionIndex <= triviaQuestions.length) {
            questionIndex++;
        } else {
            displayResults();
            //console.log("over");
        };
        
        displayQuestion();
        questionIndex++;
        $("#answers,#quiz").toggle();
        //displayAnswer()
        //console.log("next question")
    }, 3000);
};


function displayResults() {
    //display result and ask if player want to try again
    $("#correct").append(correctAnswers)
    $("#incorrect").append(incorrectAnswers)
    $("#unanswered").append(unanswered)
    $("#start-over").text("Try Again?")
};

//logic of the game
//when clicked on the answer
//change question page to answer page

$(".answer").on("click", function () {
    console.log($(this).attr('value'))
    $("#quiz,#answers").toggle();
    //if answered correctly and in time
    //display a message and display GIF for 10 sec.
    if ($(this).attr('value') === triviaQuestions[questionIndex].answer && countdown > 0) {
        console.log("correct")
        $("#correct-answer").hide();
        $("#message").text("CORRECT!");
        correctAnswers++
        displayAnswer();
    };
    //if answered incorrectly and in time
    //display a message and GIF for 10 sec.
    if ($(this).attr('value') !== triviaQuestions[questionIndex].answer && countdown > 0) {
        console.log("incorrect")
        $("#correct-answer").show();
        $("#message").text("INCORRECT!")
        incorrectAnswers++
        displayAnswer();
    };
    //if run out of time
    //display a message, display GIF for 10 sec.
    /*if (countdown ===0) {
        console.log("timesup")
        $("#message").text("TIME's UP!");
        displayAnswer();
        unanswered++;
    };*/



});