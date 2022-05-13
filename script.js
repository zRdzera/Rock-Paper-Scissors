let showRoundResult = document.querySelector('#round-result');
let pComputer = document.querySelector('#computer-count');
let pPlayer = document.querySelector('#player-count');
let pDraw = document.getElementById('draw-count');
let btn = document.querySelectorAll('.btn');
let container = document.getElementById('result');
let inFiveRounds = document.createElement('p'); // USED TO SHOW WHO'S THE WINNER AFTER 5 ROUNDS
inFiveRounds.setAttribute('id', 'show-winner');

let playerWins = 0;
let computerWins = 0;
let draw = 0;
let roundCount = 0;

// FUNCTION FOR THE COMPUTER CHOICE
function computerPlay(){
    let items = ["Rock", "Paper", "Scissors"];

    return items[Math.floor(Math.random() * items.length)];
}

// FUNCTION THAT PLAYS THE ROUND BETWEEN THE USER AND THE COMPUTER
function playRound(playerSelection, computerSelection){
    let showRoundWinner;
    let roundWinner;

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection){
        showRoundWinner = "Draw!";
        roundWinner = 0;
    }
    else if 
    (
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Rock" && computerSelection === "Scissors"
    ){
        showRoundWinner = "User won the round!";
        roundWinner = 1;
    }
    else {
        showRoundWinner = "Computer won the round!";
        roundWinner = 2;
    }

    roundCount++;
    showRoundResult.textContent = showRoundWinner;
    return roundWinner;
}

function executeFunc(parameter){
    let roundResult;

    roundResult = playRound(parameter.textContent, computerPlay());
    switch (roundResult) {
        case 1:
            playerWins++;
            pPlayer.textContent = "Player rounds win count: " + playerWins;
            break;
        
        case 2:
            computerWins++;
            pComputer.textContent = "Computer rounds win count: " + computerWins;
            break;

        default:
            draw++;
            pDraw.textContent = "Draw count: " + draw;
            break;
    }

    if(playerWins == 5 && inFiveRounds.textContent.length == 0){
        inFiveRounds.textContent = "The winner in 5 rounds is the Player!";
        container.appendChild(inFiveRounds);
    }

    if(computerWins == 5 && inFiveRounds.textContent.length == 0){
        inFiveRounds.textContent = "The winner in 5 rounds is the Computer!";
        container.appendChild(inFiveRounds);
    }
}

// WHEN ONE OF THE BUTTONS IS CLICKED THE executeFunc() IS TRIGGERED
Array.from(btn).forEach(element => {
    element.addEventListener('click', () => executeFunc(element));
});