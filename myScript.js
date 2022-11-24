console.log("Hello World");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = ''
    if (randomNum === 0) {
        choice = "Rock";
    } else if (randomNum === 1) {
        choice = "Paper";
    } else if (randomNum === 2) {
        choice = "Scissors";
    } else {
        choice = "something bad happened";
    }
    return choice;
}

function determineWinner(playerInput, computerInput) {
    let playerChoice = playerInput.toUpperCase();
    let computerChoice = computerInput.toUpperCase();
    
    let message = 'Player chose ' + playerChoice + '.\n' + 'Computer chose ' + computerChoice + '.\n';

    if (playerChoice === computerChoice) {
        message = message.concat("It's a tie!");
    } else if ((playerChoice === "Rock" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice == "Rock")) {
        message = message.concat("Computer Wins! " + computerChoice + " beats " + playerChoice + "!");
    } else if ((computerChoice === "Rock" && playerChoice === "Paper") || (computerChoice === "Paper" && playerChoice === "Scissors") || (computerChoice === "Scissors" && playerChoice == "Rock")) {
        message = message.concat("Player Wins! " + playerChoice + " beats " + computerChoice + "!");
    } else {
        message = message.concat("something unexpected happened.");
    }
    return message;
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");

console.log(determineWinner(playerSelection, computerSelection));