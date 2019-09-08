// create 5 - 10 questions, multiple choice or true/false answers
// when you click start, empties div container and loads first question with list of options for answer, timer begins
// -play audio of Mega Man stage select
// if correct answer clicked, display answer page saying 'correct'
// -play Mega Man stage clear
// if wrong answer clicked, display answer page saying 'wrong'
// -play Mega Man death
// if time runs out before option chosen, display answer page saying 'out of time'
// -play Mega Man death
// when the quiz is over, display the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page)
// -play 21-epilogue (mm2 ending)

var gameStartAudio = new Audio('assets/audio/mega-man_stage_select.mp3')
var correctAnswer = new Audio('assets/audio/mega-man_stage_clear.mp3')
var incorrectAnswer = new Audio('assets/audio/mega-man_death.mp3')

var gameQuestions = [
    {
        question: 'Who created the first six robot masters?',
        options: ['Dr. Wily', 'Dr. Light', 'Proto Man', 'The Government '],
        answer: ['Dr. Light'],
    },
    {
        question: 'What weapon is able to defeat Metal Man in one shot?',
        options: ['Crash Bomb', 'Atomic Fire', 'Metal Blade', 'Star Crash'],
        answer: ['Metal Blade']
    },
    {
        question: 'Proto Man was actually not created before Mega Man.',
        options: ['true', 'false'],
        answer: ['false']
    },
    {
        question: 'When wielded by Wood Man, his Leaf shield can be penetrated by what weapon?',
        options: ['Metal Blade', 'Shadow blade', 'Hard Knuckle', 'Nothing'],
        answer: ['Nothing']
    },
    {
        question: "Mega Man's canine companion, Rush, was created after facing Wily's own 8 Robot masters.",
        options: ['true', 'false'],
        answer: ['true']
    },
    {
        question: "Which weapon does the most damage to Wily's Alien Holograph form that Mega Man encountered the second time they battled?",
        options: ['Bubble Lead', 'Thunder Beam', 'Search Snakes', 'Pharaoh Shot'],
        answer: ['Bubble Lead']
    },
    {
        question: "Doc Robot utilizes the program data of which robot master?",
        options: ['Flash Man', 'Magnet Man', 'Toad Man', 'None of the above'],
        answer: ['Flash Man']
    },
]

var correct = 0;
var wrong = 0;
var index = 0;
var timer = 5;
var interval;

var reset =function(){
    timer = 5;
}

$('#start').on('click', function () {
    gameStartAudio.play();
    setTimeout(questionDisplay, 5000);
    console.log("hit start", index);
});

$(document).on("click", "input", function () {
    console.log("correct answer", gameQuestions[index].answer[0]);
    console.log("checked answer", $("input:checked").val());


    if (gameQuestions[index].answer[0] === $("input:checked").val())  { 
        console.log("correct answer", index);
        correct++;
        correctAnswer.play();
    }
    else {
        wrong++;
        incorrectAnswer.play();
        console.log('wrong answer', index);
    }
    // if (timer===0) {
    //     // questionDisplay()
    //     wrong++;
    //     incorrectAnswer.play();
    //     console.log('wrong answer', index);
    // }

    setTimeout(questionDisplay, 5000);
    index++;
    console.log("index++", index);
    // questionDisplay();
    // $('#question-container').show(500);

})

function questionDisplay() {
    $('#question-container').empty();
    // $('#question-container').hide(500);
    $('#question-container').show(500);

    interval = setInterval(time, 1000)

    // var timerDiv = $('<div id="show-time">');
    // timerDiv.text(timer);
    // $('#show-time').html('<h3>' + timerDiv + '</h3>');

    var questionHeader = $('<h2>');
    questionHeader.text(gameQuestions[index].question);
    $('#question-container').append(questionHeader);

    // console.log(gameQuestions[index].options[0]);
    for (let i = 0; i < gameQuestions[index].options.length; i++) {
        const element = gameQuestions[index].options[i];
        var answerHeader = $('<input type=radio>');
        answerHeader.val(element);
        $('#question-container').append(answerHeader, element);
    }


};

function time(){
    console.log(timer);
    timer--;
    $('#show-time').html('<h3> Time remaining: ' + timer + '</h3>');
    if (timer === 0){
        stop()
    }
}
function stop(){
    clearInterval(interval);
}