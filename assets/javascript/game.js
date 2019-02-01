$(document).ready(function() {

    let wins = 0;
    let losses = 0;
    let shownNumber;
    let guessNumber;
    let hidden;
    let gameRunning = false;
    let gameOver = false;


    //reset the game when the page loads, there is a win, or a loss
    //resets random numbers for the target and the hidden items
    function reset(){
        gameOver = false;
        gameRunning = true;
        //resets the player number to 0
        guessNumber = 0;
        $('#guessNumber').text(guessNumber);
        console.log(guessNumber);
        //generates number from 19-120 that is seen and the player tries to equal
        shownNumber = Math.floor(Math.random()*102)+19;
        $('#shownNumber').text(shownNumber);
        console.log(shownNumber);
        //creates an array of 4 random numbers 1-12
        hidden=[];
        for (let i = 0; i < 4; i++){
            hidden.push(Math.floor(Math.random()*12)+1)
        }
        console.log(hidden);
    }

    //adds the player click to their score and checks if they won or lost
    function addPick(index){
        //adds the click number to the player score
        guessNumber = guessNumber + hidden[index];
        console.log(guessNumber);
        //if player score equals shown number add to wins and reset...
        $('#guessNumber').text(guessNumber);
        if(guessNumber === shownNumber){
            wins++;
            $('#wins').text('Wins '+ wins);
            //you winnnn!!!
            gameOver = false;
            reset()
        }
        //else if player score is > the shown number add to losses and reset...
        else if(guessNumber > shownNumber){
            losses++;
            $('#losses').text('Losses '+losses);
            gameOver = false;
            reset()
        }
    }

    //run reset function to ready page for the first game
    reset()

    // set up onclick event for each picture, referencing a different number from the hidden array
    $('#hidden1').on("click", function(){
        addPick(0)
    });
    $('#hidden2').on("click", function(){
        addPick(1)
    });
    $('#hidden3').on("click", function(){
        addPick(2)
    });
    $('#hidden4').on("click", function(){
        addPick(3)
    });
})