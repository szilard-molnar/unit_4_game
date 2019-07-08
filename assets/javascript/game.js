$(document).ready(function() {

var randomNumber;
var addingUpNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var winning;
var losing;
var wins = 0;
var losses = 0;

$("#startButton").click(function()
{
      
    randomNumber = Math.floor(Math.random() * (120-19+1)) + 19;
        $("#randomNumber").html("Your number to reach is: " + randomNumber);
    
    addingUpNumber = 0;
    
    crystal1 = Math.floor(Math.random() * (12-1+1)) + 1;
    console.log(crystal1);
    crystal2 = Math.floor(Math.random() * (12-1+1)) + 1;
    console.log(crystal2);
    crystal3 = Math.floor(Math.random() * (12-1+1)) + 1;
    console.log(crystal3);
    crystal4 = Math.floor(Math.random() * (12-1+1)) + 1;
    console.log(crystal4);
    
    winning = false;
    losing = false;

    numberSum();

    $("#startButton").html("<button id='restartButton'>Restart!</button>");

    $("#myScore").html("<p>Your current score is: " + 0 + "</p>");
    $("#wins").html("<p>Wins: " + wins + "</p>");
    $("#losses").html("<p>Losses: " + losses + "</p>");
    $("#message").empty();
    
function numberSum()
    {
        $("#crystal_1").click(function()
            {
            if(winning === true || losing === true)
            {
                return;
            }
            addingUpNumber = addingUpNumber + crystal1;
            $("#myScore").html("<p>Your current score is: " + addingUpNumber + "</p>");
                if(randomNumber === addingUpNumber)
                {
                    winning = true;
                    $("#message").append("<p>You Win!</p>");
                    wins++;
                    $("#wins").html("Wins: " + wins);
                }
                else if(randomNumber < addingUpNumber)
                {
                    losing = true;   
                    $("#message").append("<p>You Lost!</p>");
                    losses++;
                    $("#losses").html("Losses: " + losses);
                }
            }) 
    
    
        $("#crystal_2").click(function()
            {
            if(winning === true || losing === true)
            {
            return;
            }
            addingUpNumber = addingUpNumber + crystal2;
            $("#myScore").html("<p>Your current score is: </p>" + addingUpNumber);
                if(randomNumber === addingUpNumber)
                {
                    winning = true;
                    $("#message").append("<p>You Win!</p>");
                    wins++;
                    $("#wins").html("Wins: " + wins);
                
                }
                else if(randomNumber < addingUpNumber)
                {
                    losing = true;
                    $("#message").append("<p>You Lost!</p>");
                    losses++;
                    $("#losses").html("Losses: " + losses);
                
                }
            })
    
        $("#crystal_3").click(function()
            {
            if(winning === true || losing === true)
            {
                return;
            }
            addingUpNumber = addingUpNumber + crystal3;
            $("#myScore").html("<p>Your current score is: </p>" + addingUpNumber);
                if(randomNumber === addingUpNumber)
                {
                    winning = true;
                    $("#message").append("<p>You Win!</p>");
                    wins++;
                    $("#wins").html("Wins: " + wins);
            
                }
                else if(randomNumber < addingUpNumber)
                {
                    losing = true;
                    $("#message").append("<p>You Lost!</p>");
                    losses++;
                    $("#losses").html("Losses: " + losses);
                }
            })

        $("#crystal_4").click(function()
            {
            if(winning === true || losing === true)
            {
                return;
            }
            addingUpNumber = addingUpNumber + crystal4;
            $("#myScore").html("<p>Your current score is: <p>" + addingUpNumber);
                if(randomNumber === addingUpNumber)
                {
                    winning = true;
                    $("#message").append("<p>You Win!</p>");
                    wins++;
                    $("#wins").html("Wins: " + wins);
    
                }
                else if(randomNumber < addingUpNumber)
                {
                    losing = true;
                    $("#message").append("<p>You Lost!</p>");
                    losses++;
                    $("#losses").html("Losses: " + losses);
            
                }
            })

            $("#restartButton").click(function()
            {
                randomNumber = Math.floor(Math.random() * (120-19+1)) + 19;
                addingUpNumber = 0;
                crystal1 = Math.floor(Math.random() * (12-1+1)) + 1;
                console.log(crystal1);
                crystal2 = Math.floor(Math.random() * (12-1+1)) + 1;
                console.log(crystal2);
                crystal3 = Math.floor(Math.random() * (12-1+1)) + 1;
                console.log(crystal3);
                crystal4 = Math.floor(Math.random() * (12-1+1)) + 1;
                console.log(crystal4); 
                winning = false;
                losing = false;
                $("#myScore").html("<p>Your current score is: " + 0 + "</p>");
                $("#wins").html("<p>Wins: " + wins + "</p>");
                $("#losses").html("<p>Losses: " + losses + "</p>");
                $("#message").empty();
            });
            
    }
})

});