function computerPlay(){
    let items = ["Rock", "Paper", "Scissors"];

    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection){
    let string;

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection){
        string = "Draw!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        string = "Player won! Paper beats rock!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        string = "Player won! Scissors beats paper!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        string = "Player won! Rock beats scissors!";
    }

    if (computerSelection === "Paper" && playerSelection === "Rock"){
        string = "Computer won! Paper beats rock!";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        string = "Computer won! Scissors beats paper!";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        string = "Computer won! Rock beats scissors!";
    }

    return string;
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));