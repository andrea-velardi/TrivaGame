//Global Variables
var hiddenImage = false; 
var qCounter = 0
var time = 11;
var questions = 
{
    q1: ['Before the Foo Fighters, David Grohl was the lead drummer in which famous rock band?'],
    q2: ['Name the English drummer that played in the band, The Who.'],  
};    
var answers = 
{
            answers1:[{1:'Pink Floyd',
                    2:'Led Zeppelin',
                    3:'Nirvana' //correct answer
            }],
            answers2:[{1:'Keith Moon',// correct answer
                    2:'Slash',
                    3:'Cartman'
            }],  
}
var correctAnswers;
var wrongAnswers;
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
        //removes all buttons with the class startbtn
        $('.startBtn').hide(); 
        timeCount();
        quest1(); 
        chooseCheckAnswer(); 
    });
}
function timeCount()
{
    time = 7; // did 11 so it would reflect 10 seconds on the DOM
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
        //stops the time
        clearInterval(interval); 
        //remove button answers
        $('button').remove(); 
        //remove question
        $('.questionInput').remove(); 
        //Displays the correct answer accordingly
        disCorAnsw(); 
    } 
}
function disCorAnsw()
//display correct answer. counter 1 = question 1, counter 2 = question 2
{
    if(qCounter === 1)
    {
    var newDiv = $('<div class="corAnsw">'); 
    correctAnswer = newDiv.text('Time is up! ' +
                                ' The correct answer is ' + answers.answers1[0][3]); 
        $('.btnContainer').append(correctAnswer); 
        //Remove the correct answer after five seconds 
        //Removes the time remaining and then calls the time remaining function to start the timer again
        setTimeout(function()
            {
                $('div').remove('.corAnsw');
                $('div').remove('.timeRem'); 
                timeCount(); 
                quest2(); 
                chooseCheckAnswer(); 
            }, 4000); 

    }
}
function quest1()
{
    qCounter++;
    //adds question to the questionInput Div
    $('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>'); 
    //add answers
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers1[0][1] + '</button>');
    //add answers
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers1[0][2] + '</button>');
    //add answers
    $('.btnContainer').append('<button class="answerVal" value=1>' + answers.answers1[0][3] + '</button>');
}
function quest2()
{
    qCounter++;
    //adds question to the questionInput Div
    $('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>'); 
    //add answers
    $('.btnContainer').append('<button class="answerVal" value=1>' + answers.answers2[0][1] + '</button>');
    //add answers
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers2[0][2] + '</button>');
    //add answers
    $('.btnContainer').append('<button class="answerVal" value=0>' + answers.answers2[0][3] + '</button>');
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
        if(checkRightAnswer == 1)
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