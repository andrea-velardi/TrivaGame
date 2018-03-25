//Global Variables

var time = 11;
var questions = 
{
    q1: ['Before the Foo Fighters, David Grohl was the lead drummer in which famous rock band?'],
    answers1:[{ a:'b',
            c:'d',
            e:'f',
            }],
    q2: ['Name the English drummer that played in the band, The Who.'],
    answers2:[{ a:'b2',
            c:'d2',
            e:'f2',
            }],    
  
    
};        
var correctAnswers;
var wrongAnswers;
var intervalidId;

//Functions

//test
console.log(questions.q1); 


function startGame() 
{

}

function gamePlay() 
{
    $('.startBtn').on('click', function () //by clicking on the start button it calls the quest1 function and the timeCount function 
    {
        //removes all buttons with the class startbtn
        $('button').remove('.startBtn');
        timeCount();
        quest1(); 
    });
}
function timeCount()
{
    time = 11; // did 11 so it would reflect 10 seconds on the DOM
    interval = setInterval(timeRemaining,1000); // one second internal
    $('.btnContainer').append('<div class="timeRem">' 
                + 'Time Remaining: ' + //this text will appear on DOM
                '<div class="timerCountDown"></div>' +
                '</div>' +
                '<div class="quest"></div');//create div for the questions
}
// print the time remaining to the Dom and once it is = 0 then it stops    
function timeRemaining()
{
    //decrements the time by 1 second
    time--; 
    //prints the remaining time 
    $('.timerCountDown').text(time); //adding the text of time within timerCountDown div on DOM
    //test
    console.log(time); 
    //if the time reaches 0 then cancel the time and start over
    if(time === 0)
    {
        console.log(true); 
        //stops the time
        clearInterval(interval); 
    } 
}
function quest1()
{
    $('.quest').append(questions.q1);//append the data from the questions.q1 to the quest div on the DOM
}

gamePlay(); 