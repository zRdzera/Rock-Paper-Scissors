let showResult = document.querySelector('#round-result');
let pComputer = document.querySelector('#computer-count');
let pPlayer = document.querySelector('#player-count');
let btn = document.querySelectorAll('.btn');
let playAgain = document.querySelector('#play-again');

let playerWins = 0;
let computerWins = 0;

// WHEN ONE OF THE BUTTONS IS CLICKED THE executeFunc() IS TRIGGERED
Array.from(btn).forEach(element => {
    element.addEventListener('click', () => executePlayRound(element));
});

// FUNCTION FOR THE COMPUTER CHOICE
function computerPlay(){
    let items = ["Rock", "Paper", "Scissors"];

    return items[Math.floor(Math.random() * items.length)];
}

// FUNCTION THAT PLAYS THE ROUND BETWEEN THE USER AND THE COMPUTER
function playRound(playerSelection, computerSelection){
    let showWinner;
    let roundWinner;

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection){
        showWinner = "Tie!";
    }
    else if 
    (
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Rock" && computerSelection === "Scissors"
    ){
        showWinner = `You won the round! ${playerSelection} beats ${computerSelection}`;
        roundWinner = 1;
    }
    else {
        showWinner = `Computer won the round! ${computerSelection} beats ${playerSelection}`;
        roundWinner = 2;
    }

    showResult.textContent = showWinner;
    return roundWinner;
}

function executePlayRound(parameter){
    let roundResult;

    roundResult = playRound(parameter.value, computerPlay());
    switch (roundResult) {
        case 1:
            playerWins++;
            pPlayer.textContent = "YOU: " + playerWins;
            break;
        
        case 2:
            computerWins++;
            pComputer.textContent = "COMP: " + computerWins;
            break;

        default:
            break;
    }

    if(computerWins == 5 || playerWins == 5){
        if(playerWins == 5){
            showResult.textContent = "YOU WON!";
            disableEvent(true);
        } 
        else {
            showResult.textContent = "YOU LOSE!";
            disableEvent(true);
        }

        playAgain.style.cssText = "display: inline-block";
        playAgain.addEventListener('click', () => 
        {
            disableEvent(false);
            restartGame();
        });
    }
}

// FUNCTION TO DISABLE ALL BUTTONS AFTER 5 ROUNDS
function disableEvent(parameter){
    if (parameter == true){
        Array.from(btn).forEach(element => {
            element.disabled = true;
        });
    }
    else {
        Array.from(btn).forEach(element => {
            element.disabled = false;
        });
    }
}

// FUNCTION TO RESET ALL PARAMETERS AND RESTART THE GAME
function restartGame(){
    showResult.textContent = '';

    computerWins = 0;
    pComputer.textContent = "Comp: 0";

    playerWins = 0;
    pPlayer.textContent = "You: 0";

    playAgain.style.cssText = "display: none";
}