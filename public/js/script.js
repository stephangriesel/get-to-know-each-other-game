var question = [
    'If you didn’t have to sleep, what would you do with the extra time?',
    'What’s your favorite piece of clothing you own / owned?',
    'What hobby would you get into if time and money weren’t an issue?',
    'How often do you play sports?',
    'What job would you be terrible at?',
    'When was the last time you climbed a tree?',
    'What songs have you completely memorized?',
    'What game or movie universe would you most like to live in?',
    'What takes up too much of your time?',
    'What’s your favorite genre of book or movie?',
    'What’s the best single day on the calendar?',
    'How do you relax after a hard day of work?',
    'What’s the farthest you’ve ever been from home?',
    'What is the most annoying question that people ask you?',
    'Would you rather go hang gliding or whitewater rafting?',
    'What’s your dream car?',
    'Where is the most interesting place you’ve been?',
    'What’s the best thing that happened to you last week?',
    'What piece of entertainment do you wish you could erase from your mind so that you could experience for the first time again?',
    'How different was your life one year ago?',
    'What’s the best way to start the day?',
    'What city would you most like to live in?',
    'Why did you decide to do the work you are doing now?',
    'What’s the best way a person can spend their time?',
    'What are you looking forward to in the coming months?',
    'Where do you usually go when you when you have time off?',
    'Who inspires you to be better?',
    'They say that everyone has a book in them. What would your book be about?',
    'What do you spend the most time thinking about?',
    'What are you addicted to?',
    'What gets you fired up?',
    'What are three interesting facts about you?'

]

function showAnswer(){
    var rand = Math.floor(Math.random() * question.length);
    document.getElementById("question").innerHTML = question[rand];
    
}

showAnswer();

/*var nextQuestion = document.querySelector('next');
next.addEventListener('click',function(){
    console.log('click');
});*/