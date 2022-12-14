let playerWins = 0;
let computerWins = 0;
let score = document.querySelector('#current-score');
score.textContent = `Player Wins: ${playerWins} ::: Computer Wins: ${computerWins}`;


function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = ''
    if (randomNum === 0) {
        choice = "ROCK";
    } else if (randomNum === 1) {
        choice = "PAPER";
    } else if (randomNum === 2) {
        choice = "SCISSORS";
    } else {
        choice = "something bad happened";
    }
    return choice;
}

function playRound(playerInput, computerInput = getComputerChoice()) {
    let playerChoice = playerInput.toUpperCase();
    let computerChoice = computerInput.toUpperCase();
    let winner = '';
    let message = 'Player chose ' + playerChoice + '.\n' + 'Computer chose ' + computerChoice + '.\n';

    if (playerChoice === computerChoice) {
        message = message.concat("It's a tie!");
        winner = winner.concat('Tie');
    } else if ((playerChoice === "ROCK" && computerChoice === "PAPER") || (playerChoice === "PAPER" && computerChoice === "SCISSORS") || (playerChoice === "SCISSORS" && computerChoice == "ROCK")) {
        message = message.concat("Computer Wins! " + computerChoice + " beats " + playerChoice + "!");
        winner = winner.concat('Computer');
    } else if ((computerChoice === "ROCK" && playerChoice === "PAPER") || (computerChoice === "PAPER" && playerChoice === "SCISSORS") || (computerChoice === "SCISSORS" && playerChoice == "ROCK")) {
        message = message.concat("Player Wins! " + playerChoice + " beats " + computerChoice + "!");
        winner = winner.concat('Player');
    } else {
        message = message.concat("something unexpected happened.");
        winner = winner.concat('Error');
    }
    //console.log(message);
    const showResultDiv = document.querySelector('#last-round-result');
    showResultDiv.textContent = `${message}`;
    return winner;
}

function game(rounds) {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < rounds; i++) {
        result = playRound(prompt("Please enter 'Rock', 'Paper', or 'Scissors'"), getComputerChoice());
        if (result === "Player") {
            playerWins += 1;
        } else if (result === "Computer") {
            computerWins += 1;
        } else if (result === "Tie") {
            ties += 1;
        } else {
            return "Error";
        }
    }
    return "Rounds played: " + rounds.toString() + '\n' + "Player Wins: " + playerWins.toString() + '\n' + "Computer Wins: " + computerWins.toString() + '\n' + "Ties: " + ties.toString();
}

function playerAction(selection, rounds=5) {
    let winner = playRound(selection);
    let winnerResultDiv = document.querySelector('#final-result');
    winnerResultDiv.textContent = '';
    if (winner === "Player") {
        playerWins += 1;
        score.textContent = `Player Wins: ${playerWins} ::: Computer Wins: ${computerWins}`;
    } else if (winner === "Computer") {
        computerWins += 1;
        score.textContent = `Player Wins: ${playerWins} ::: Computer Wins: ${computerWins}`;
    } else if (winner === "Tie") {
        //ties += 1;
    } else {
        return "Error";
    }
    if (playerWins >= rounds) {
        winnerResultDiv.textContent = "Player Wins!";
        playerWins = 0;
        computerWins = 0;
    } else if (computerWins >= rounds) {
        winnerResultDiv.textContent = "Computer Wins!";
        playerWins = 0;
        computerWins = 0;
    } else {
        winnerResultDiv.removeAttribute(textContent);
    }
}

// let computerSelection = getComputerChoice();
// let playerSelection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");

// console.log(playRound(playerSelection, computerSelection));
//console.log(game(5));
const rpsKeys = document.querySelectorAll('.player-selection');
rpsKeys.forEach(choice => choice.addEventListener("click", () => playerAction(choice.textContent)));


//rpsKeys.forEach(choice => console.log(choice.textContent));
