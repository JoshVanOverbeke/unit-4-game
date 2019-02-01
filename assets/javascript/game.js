$(document).ready(function() {

    let wins = 0;
    let losses = 0;
    let shownNumber;
    let guessNumber;
    let hidden = [];
    let gameRunning = false;
    let gameOver = false;


    //reset the game when the page loads, there is a win, or a loss
    //resets random numbers for the target and the hidden items
    function reset(){
        gameOver = false;
        gameRunning = true;
        shownNumber = Math.floor(Math.random()*102)+19;
        $('#shownNumber').text(shownNumber);
        console.log(shownNumber);
        for (let i = 0; i < 4; i++){
            hidden.push(Math.floor(Math.random()*12)+1)
            console.log(hidden)
        }
        guessNumber = 0;
        console.log(guessNumber);
        $('#guessNumber').text(guessNumber);
    }
    reset()
    function addPick(index){
        guessNumber = guessNumber + hidden[index];
        console.log(guessNumber);
        $('#guessNumber').text(guessNumber);
        if(guessNumber === shownNumber){
            wins++;
            $('#wins').text('Wins '+ wins);
            //you winnnn!!!
            gameOver = false;
            reset()
        }

        else if(guessNumber > shownNumber){
            losses++;
            $('#losses').text('Losses '+losses);
            gameOver = false;
            reset()
        }
    }

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
    console.log(guessNumber + hidden[0]);
})