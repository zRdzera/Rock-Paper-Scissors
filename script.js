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

    return string;
}

let btn = document.querySelectorAll('.btn');
let showResult = document.querySelector('#result');

Array.from(btn).forEach(element => {
    element.addEventListener('click', 
    () => showResult.textContent = playRound(element.textContent, computerPlay()));
});