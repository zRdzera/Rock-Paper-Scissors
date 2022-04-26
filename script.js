function computerPlay(){
    let items = ["Rock", "Paper", "Scissors"];

    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection){
    let string;
    let number;

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection){
        string = "Draw!";
        number = 0;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        string = "User won! Paper beats rock!";
        number = 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        string = "User won! Scissors beats paper!";
        number = 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        string = "User won! Rock beats scissors!";
        number = 1;
    }

    if (computerSelection === "Paper" && playerSelection === "Rock"){
        string = "Computer won! Paper beats rock!";
        number = 2;
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        string = "Computer won! Scissors beats paper!";
        number = 2;
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        string = "Computer won! Rock beats scissors!";
        number = 2;
    }

    console.log(string);

    return number;
}

function game(){
    let playerWon = 0;
    let computerWon = 0;
    let result;

    for (let i = 0; i < 5; i ++){
        const playerSelection = prompt("Choose between rock, paper and scissors: ", "Paper");
        const computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);

        if (result === 1){
            playerWon++;
        } else if (result === 2){
            computerWon++;
        } 
    }

    if (playerWon > computerWon){
        console.log("The winner in 5 rounds is the User!");
    }
    else if (computerWon > playerWon){
        console.log("The winner in 5 rounds is the Computer!");
    }
    else {
        console.log("There's no winner!");
    }
}

game();