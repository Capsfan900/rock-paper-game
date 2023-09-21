let userScore = 0;
let computerScore = 0;

// generates a random choice from choices array
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function is responsible for determining the outcome of a single round of the rock-paper-scissors game based on the choices made by the player and the computer
function playRound() {
    const outcomes = {
    "rock": {
        "rock": "tie",
        "paper": "lose",
        "scissors": "win"
    },
    "paper": {
        "rock": "win",
        "paper": "tie",
        "scissors": "lose"
    },
    "scissors": {
        "rock": "lose",
        "paper": "win",
        "scissors": "tie"
    },
};
    const result = outcomes[playerSelection][computerSelection];
    return result;
}

// function  that cumulatively calculates score , win or lose condition & prints the results to the console
function game() {
    for (let round = 1; round <= 5; round++) {
        const userChoice = prompt(`Round ${round}: Enter your choice (rock, paper, or scissors):`).toLowerCase();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(userChoice, computerChoice);
        
        console.log(`Round ${round}: ${userChoice} vs. ${computerChoice} - Result: ${roundResult}`);

        if (roundResult === "win") {
            userScore++;
        } else if (roundResult === "lose") {
            computerScore++;
        } 
    }
    console.log(`Game Over!\nYour Score: ${userScore}, Computer Score: ${computerScore}`);

    if (userScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > userScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

game(); //call the game function to start the game 