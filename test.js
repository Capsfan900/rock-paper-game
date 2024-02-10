let userScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
//////////////////////

//global scope variables + document references 

const outcomemap = {
  rock: {
    rock: "tie",
    paper: "lose",
    scissors: "win",
  },
  paper: {
    rock: "win",
    paper: "tie",
    scissors: "lose",
  },
  scissors: {
    rock: "lose",
    paper: "win",
    scissors: "tie",
  },
};
//game outcome map

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  let result = choices[randomIndex];
  return result;
}

function endGamePopUp() {
// If the user score or the computer score is 60, show the pop-up-screen
if (userScore === 60 || computerScore === 60) {
  popUpScreen.style.display = "block";
} else {
  // Otherwise, hide the pop-up-screen
  popUpScreen.style.display = "none";
}
}


function updateScoreDisplay() {
  if (userScore === 60) {
    userScore -= 60;
    computerScore = 0;
    console.log('make a screen appear!')
     //game win (best of 5)
  } else if (computerScore === 60) {
    console.log('make a screen appear!')
    userScore = 0;
    computerScore -= 60;
     //game win (best of 5)
  }

}

function game(userChoice) {
  let computerChoice = getComputerChoice();
  const roundResult = outcomemap[userChoice][computerChoice];
  if (roundResult === "win") {
    userScore += 10;
  } else if (roundResult === "lose") {
    computerScore += 10;
  } else if (roundResult === "tie") {
  
  }
  
  console.log(userChoice); 
  console.log(computerChoice); //for degbug yo
  console.log(roundResult); 
  // Update the score display after each round
  updateScoreDisplay();
}
game('rock');
// Display initial scores
updateScoreDisplay();

console.log(computerScore,userScore);






///code without dom for node debugging///



















