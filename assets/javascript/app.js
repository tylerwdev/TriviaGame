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

var questionSection = []
var answerChoices = []


var gameQuestions = {
    q1: {
        question: 'Who created the first six robot masters?',
        options: ['Dr. Wily', 'Dr. Light', 'Proto Man', 'The Government'],
        answer: [1],
    },
    q2: {
        question: 'What weapon is able to defeat Metal Man in one shot?',
        options: ['Crash Bomb', 'Atomic Fire', 'Metal Blade', 'Star Crash'],
        answer: [3]
    },
    q3: {
        question: 'Proto Man was actually not created before Mega Man.',
        options: ['true', 'false'],
        answer: false
    },
    q4: {
        question: 'When wielded by Wood Man, his Leaf shield can be penetrated by what weapon?',
        options: ['Metal Blade', 'Shadow blade', 'Hard Knuckle', 'Nothing'],
        answer: [3]                
    },
    q5: {
        question: "Mega Man's canine companion, Rush, was created after facing Wily's own 8 Robot masters.",
        options: ['true', 'false'],
        answer: true
    },
    q6: {
        question: "Which weapon does the most damage to Wily's Alien Holograph form that Mega Man encountered the second time they battled?",
        options: ['Bubble Lead', 'Thunder Beam', 'Search Snakes', 'Pharaoh Shot'],
        answer: [0]
    },
    q7: {
        question: "Doc Robot utilizes the program data of which robot masters?",
        options: ['Metal Man, Air Man, Bubble Man, Quick Man, Crash Man, Flash Man, Heat Man, Wood Man', 'Needle Man, Magnet Man, Gemini Man, Hard Man, Top Man, Snake Man, Spark Man, Shadow Man', 'Bright Man, Toad Man, Drill Man, Pharaoh Man, Ring Man, Dust Man, Dive Man, Skull Man'],
        answer: 0
    },
};

$('#start').on('click', function() {
    $('#introPage').html('');
    // $('#question-container').html(<h6>This is a test</h6>)
})

$('#question-container').on('click', function(){
    // console.log(gameQuestions.q1.question);
    $('#question-container').append(q1.question'Who created the first six robot masters?');
})