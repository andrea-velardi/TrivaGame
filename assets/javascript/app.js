//Global Variables

var time = 20;
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
console.log(questions.q2); 


function startGame() 
{

}

function gamePlay() 
{
    $('.startBtn').on('click', function () 
    {
        //removes all buttons with the class startbtn
        $('button').remove('.startBtn');
        quest1();
    });
}
function quest1()
{
    var newDiv = $('<div class=" quest q1">'); 
    newDiv.html(questions.q2); 

    $('.btnContainer').append(newDiv); 
    intervalidId = setInterval(timeCount,1000); 
}
    
function timeCount(){
    time--; 
    //test
    console.log(time); 
    //this clears and stops the time
    if(time === 0)
    {
    clearInterval(intervalidId); 
    //debugging
    console.log(true); 
    }
}

gamePlay(); 