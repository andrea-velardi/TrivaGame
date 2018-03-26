//Question and answer objects

var questions = 
{
    q1: ['Before the Foo Fighters, David Grohl was the lead drummer in which famous rock band?'],
    q2: ['Name the English drummer that played in the band, The Who.'], 
    q3: ['Name the band that released the song Stairway to Heaven in 1971.'],
    q4: ['Which song below was not produced by the band, The Eagles?'],   
};    
var answers = 
{
            answers1:[{1:'Pink Floyd',
                        2:'Led Zeppelin',
                        3:'Nirvana' //correct answer
                    }],
            answers2:[{ 1:'Keith Moon',// correct answer
                        2:'Slash',
                        3:'Cartman'
                    }],  
            answers3:[{ 1:'Led Zeppelin',// correct answer
                        2:'Backstreet Boys',
                        3:'The Beatles'
                    }], 
            answers4:[{ 1:'Eye of the Tiger',// correct answer
                        2:'Desperado',
                        3:'Hotel California'
                    }]
}; 
//counter variables
var isCorrect = false; 
var questCnt = 0; 
var time = 0; 
var corAnswer = 0; 
var wrongCount = 0; 

// used to reset the time
var interval;

//Functions

//test
console.log(questions.q2); 
console.log(answers.answers1[0][1]); 

function startGame() 
{

}

function gamePlay() 
{
    $('.startBtn').on('click', function () //by clicking on the start button it calls the quest1 function and the timeCount function 
    {
        //hides the start button
        $('.startBtn').hide(); 
        
        //functions
        timeCount();
        quest1(); 
        chooseCheckAnswer(); 
    });
}
function timeCount()
{
    time = 11; // 
    interval = setInterval(timeRemaining,1000); // one second internal
    //adds a new Div to btn container with the text " Time Remaining"
    $('.btnContainer').append('<div class="timeRem">' 
                                + 'Time Remaining: ' + //this text will appear on DOM
                                    '<div class="timerCountDown"></div>' +
                                '</div>');//create div for the questions
}
// print the time remaining to the Dom and once it is = 0 then it stops    
function timeRemaining()
{
    //decrements the time by 1 second
    time--; 
    //prints the remaining time 
    $('.timerCountDown').text(time + ' seconds'); //adding the text of time within timerCountDown div on DOM
    //test
    console.log(time); 
    //if the time reaches 0 then cancel the time and start over
    if(time === 0)
    {
        console.log('time = ' + time); 
        //stops the time at 0....
        clearInterval(interval); 
        //remove button answers
        $('button').remove(); 
        //remove question
        $('.questionInput').remove(); 
        //Displays "time is up" if the time reaches 0
        $('.btnContainer').append('<div class="timeIsUp">Time is up </div>'); 
        dispAns(); 
    } 
}
function dispAns()
//=================================================================================================
//First Question
{
    if(questCnt === 1 && isCorrect === false)
    {
        //tracks the wrong answers
        wrongCount++; 
        var newDiv = $('<div class="corAnsw">'); 
        correctAnswer = newDiv.text('WRONG! The correct answer is ' + answers.answers1[0][3]); 
        $('.btnContainer').append(correctAnswer); 
        //Remove the correct answer after three seconds 
        //Removes the time remaining and then calls the time remaining function to start the timer again
        setTimeout(function()
            {
                $('div').remove('.corAnsw');
                $('div').remove('.timeRem'); 
                $('div').remove('.timeIsUp'); 
                //functions
                timeCount(); 
                quest2(); 
                chooseCheckAnswer(); 
            }, 3000); 

    }
    else if(questCnt === 1 && isCorrect === true)
    {
        //tracks the right answers
        answerCount++; 
        //display correct!
        var newDiv = $('<div class"corAnsw">'); 
        correctAnswer = newDiv.text('CORRECT!'); 
        $('.btnContainer').append(correctAnswer); 
        //removes the correct answer after three seconds
        //removes the time remaining then call the time remaining function to start the timer again
        setTimeout(function()
            {
                isCorrect = false; 
                $('div').remove('.corAnsw');
                $('div').remove('.timeRem'); 
                $('div').remove('.timeIsUp'); 
                //functions
                //reset time count
                timeCount(); 
                //create the second questions and answers
                quest2(); 
                chooseCheckAnswer(); 
            }, 3000);     
    }
//=========================================================================================    
//second question    
    else if(questCnt === 2 && isCorrect === false)
    {
            //track the wrong answers
            wrongCount++; 
            var newDiv = $('div class="corAnsw">'); 
            correctAnswer = newDiv.text(' The correct answer is ' + answers.answer3[0][1]); 
            $('.btnContainer').append(correctAnswer); 

            //removes the correct answer after five seconds
            //removes the time time remaining then call the time remaining function to start the timer again
        setTimeout(function()
            {
                $('div').remove('.corAnsw');
                $('div').remove('.timeRem'); 
                $('div').remove('.timeIsUp'); 
                //functions
                timeCount(); 
                quest3(); 
                chooseCheckAnswer(); 
            }, 3000); 
    }
    else if(questCnt === 2 && isCorrect === true)
    {
            //tracks the right answers
            answerCount++; 
            //display correct!
            var newDiv = $('<div class"corAnsw">'); 
            correctAnswer = newDiv.text('CORRECT!'); 
            $('.btnContainer').append(correctAnswer); 
            //removes the correct answer after five seconds
            //removes the time remaining then call the time remaining function to start the timer again
        setTimeout(function()
            {
                $('div').remove('.corAnsw');
                $('div').remove('.timeRem'); 
                $('div').remove('.timeIsUp'); 
                //functions
                timeCount(); 
                // quest3(); 
                chooseCheckAnswer(); 
            }, 3000);   
    }
//=========================================================================================    
//third question   
    else if(questCnt === 2 && isCorrect === false)
    {
        //track the wrong answers
        wrongCount++; 
        var newDiv = $('div class="corAnsw">'); 
        correctAnswer = newDiv.text(' The correct answer is ' + answers.answer2[0][1]); 
        $('.btnContainer').append(correctAnswer); 

        //removes the correct answer after five seconds
        //removes the time time remaining then call the time remaining function to start the timer again
        setTimeout(function()
        {
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem'); 
            $('div').remove('.timeIsUp'); 
            //functions
            timeCount(); 
            quest3(); 
            chooseCheckAnswer(); 
        }, 3000); 
    }
    else if(questCnt === 2 && isCorrect === true)
    {
            //tracks the right answers
            answerCount++; 
            //display correct!
            var newDiv = $('<div class"corAnsw">'); 
            correctAnswer = newDiv.text('CORRECT!'); 
            $('.btnContainer').append(correctAnswer); 
            //removes the correct answer after five seconds
            //removes the time remaining then call the time remaining function to start the timer again
        setTimeout(function()
        {
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem'); 
            $('div').remove('.timeIsUp'); 
            //functions
            timeCount(); 
            quest3(); 
            chooseCheckAnswer(); 
        }, 3000);   
    }
    //test
    console.log('question Counter = ' + questCnt); 
}
function quest1()
{
    //adds 
    //adds question to the questionInput Div && answers
    questCnt++; 
    $('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>' + 
        '<button class="answerVal" value=0>' + answers.answers1[0][1] + '</button>' +
        '<button class="answerVal" value=0>' + answers.answers1[0][2] + '</button>' +
        '<button class="answerVal" value=0>' + answers.answers1[0][3] + '</button>');
    }
function quest2()
{
    questCnt++; 
    //adds question to the questionInput Div && answers
    $('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>' + 
        '<button class="answerVal" value=0>' + answers.answers2[0][1] + '</button>' +
        '<button class="answerVal" value=0>' + answers.answers2[0][2] + '</button>' +
        '<button class="answerVal" value=0>' + answers.answers2[0][3] + '</button>');
}
function quest3()
{
    questCnt++; 
    //adds question to the questionInput Div && answers
    $('.btnContainer').append('<div class="questionInput">' + questions.q3 + '</div>' + 
        '<button class="answerVal" value=0>' + answers.answers3[0][1] + '</button>' +
        '<button class="answerVal" value=0>' + answers.answers3[0][2] + '</button>' +
        '<button class="answerVal" value=0>' + answers.answers3[0][3] + '</button>');
}
function endGame()
{
    //add game over text
    $('.btnContainer').append('<div class="gameOver">All done, here is how you did!</div>' +
                            '<div class="gameOver">Correct: ' + answerCount +
                            '</div>' + '<div class="gameOver">Wrong: ' + wrongCount + '</div>'); 
    resetGame();                         
}
function resetGame()
{
    $('.btnContainer').append('<button class="reset">reset</button'); 
    $('.reset').on('click', function(){
        $('div').remove('.gameOver'); 
        $('button').remove('.reset'); 
            //reset counters
            questCnt = 0; 
            answerCount = 0; 
            wrongCount = 0; 
            isCorrect = false; 
    }); 
}
function chooseCheckAnswer()
{
    $('button').on('click', function()
    {
        //gets the value of the attribute of which ever button is clicked
        var checkRightAnswer = $(this).attr('value'); 
        console.log(checkRightAnswer); 
        //stops the time when the answer is selected
        clearInterval(interval); 
        //if the attribute value of the check answer is one
        if(checkRightAnswer == 0)
        {
            //test
            console.log('Correct'); 
            //removes button answers
            $('button').remove(); 
            //remove question
            $('.questionInput').remove(); 
        }
        else{
            //removes button answers
            $('button').remove(); 
            //removed question
            $('.questionInput').remove(); 
        }
    }); 
}
gamePlay(); 