$(document).ready(function() {

    let wins = 0;
    let losses = 0;
    let maxNumber;
    let healthNumber;
    let hidden;
    let enemies = [
        {
            id:'murloc',
            name:'Tinyfin',
        },
        {
            id:'archmage',
            name:'Archmage',
        },
        {
            id:'deathknight',
            name:'Death Knight',
        },
        {
            id:'blademaster',
            name:'Blade Master',
        },
        {
            id:'kotg',
            name:'Keeper of the Grove',
        },
    ]
    let foe;
    let gameRunning = false;
    let gameOver = true;
    let audio = new Audio('assets/sounds/TheCalm.mp3')
    // let enemyAudio = new Audio('assets/sounds/'+foe+'.mp3')

    //reset the game when the page loads, there is a win, or a loss
    //resets random numbers for the target and the hidden items
    function reset(){
        gameOver = false;
        gameRunning = true;
        $('#gameOver').hide()
        //generates number from 19-120 that is seen and the player tries to equal
        maxNumber = Math.floor(Math.random()*102)+19;
        $('#maxNumber').text(maxNumber);
        console.log(maxNumber);
            //resets the health to max
            healthNumber = maxNumber;
            $('#healthNumber').text(healthNumber);
            console.log(healthNumber);
        //creates an array of 4 random numbers 1-12
        hidden=[];
        for (let i = 0; i < 4; i++){
            hidden.push(Math.floor(Math.random()*12)+1)
        }
        console.log(hidden);
        audio.play()
        updateDisplay()
    }

    function enemyAppears(foe){
        $('#foe').attr('src', 'assets/images/'+foe.id+'.png');
        let enemyAudio = new Audio('assets/sounds/'+foe.id+'.wav');
        enemyAudio.play()
        $('#name').text(foe.name);
    }   

    function updateDisplay(){
        //set a different foe for ranges of 20, could have had foes appear randomly for random numbers but i wanted to do it this way
        if (gameRunning === true){
            $('#foe').show();
            if (maxNumber <= 40){
                foe = enemies[0];
            }
            else if(maxNumber <= 60){
                foe = enemies[1];
            }
            else if(maxNumber <= 80){
                foe = enemies[2];
            }
            else if(maxNumber <= 100){
                foe = enemies[3];
            }
            else if(maxNumber <= 120){
                foe = enemies[4];
            }
            enemyAppears(foe)
        }
    }

    //adds the player click to their score and checks if they won or lost
    function addPick(index){
        //adds the click number to the player score
        healthNumber = healthNumber - hidden[index];
        console.log(healthNumber);
        //if player score equals shown number add to wins and reset...
        $('#shownNumber').text(healthNumber+'/'+maxNumber);
        if(healthNumber === 0){
            wins++;
            $('#wins').text('Wins '+ wins);
            //you winnnn!!!
            $('#gameOver').attr('src', 'assets/images/victory.png');
            $('#gameOver').show();
            $('#start').show();
            gameOver = true;
        }
        //else if player score is > the shown number add to losses and reset...
        else if(healthNumber < 0){
            losses++;
            $('#losses').text('Losses '+losses);
            $('#gameOver').attr('src', 'assets/images/lose.png');
            $('#gameOver').show();
            $('#start').show();
            gameOver = true;
        }
    }

    audio.play()
    $('#gameOver').hide()
    $('#health').hide()
    $('#enemy').hide()
    $('#tracker').hide()
    $('#foe').hide()

    $('#start').on('click', function(){
        reset();
        updateDisplay();
        $('#health').show()
        $('#enemy').show()
        $('#tracker').show()
        $('#shownNumber').text(healthNumber+'/'+maxNumber);
        $('#start').hide();
    })

    //randomly selected worker sound function
    function workerSound(worker){
        let workerAudio = new Audio('assets/sounds/'+worker+'/'+Math.floor(Math.random()*11)+'.wav');
        workerAudio.play();
    }
    // set up onclick event for each picture, referencing a different number from the hidden array
    $('#hidden1').on("click", function(){
        workerSound('acolyte')
        if(gameOver === false){
        addPick(0);
        }
    });
    $('#hidden2').on("click", function(){
        workerSound('peon');
        if(gameOver === false){
        addPick(1);
        }
    });
    $('#hidden3').on("click", function(){
        workerSound('peasant');
        if(gameOver === false){
        addPick(2);
        }
    });
    $('#hidden4').on("click", function(){
        workerSound('wisp');
        if(gameOver === false){
        addPick(3);
        }
    });
})