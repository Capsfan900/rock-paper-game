let userScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreanims = document.getElementById("scoreanims");      
let resultanim = document.getElementById("resultanim");  
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
  return result;zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

}
//random picks item from outcome map

function updateScoreDisplay() {
  document.getElementById("playerscore").textContent = userScore;
  document.getElementById("computerscore").textContent = computerScore;
  
  if (userScore === 60) {
    userScore -= 60;
    computerScore = 0;
     //attach events to these instead
  } else if (computerScore === 60) {
    userScore = 0;
    computerScore -= 60;
    
     //attach events to these instead
  }

  
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  const roundResult = outcomemap[userChoice][computerChoice];
  if (roundResult === "win") {
    userScore += 10;
  } else if (roundResult === "lose") {
    computerScore += 10;
  } else if (roundResult === "tie") {
  
  }

  // Update the score display after each round
  updateScoreDisplay();
}

// Display initial scores
updateScoreDisplay();



//animation for computer choice 




////sound effects







//media manipulation and animations
debugger;




// Event listeners
rock.addEventListener("click", function () {
  game("rock");
  this.classList.toggle('spin');
  
});

paper.addEventListener("click", function () {
  this.classList.toggle('spin');
  game("paper");
  
});

scissors.addEventListener("click", function () {
  this.classList.toggle("spin");
  game("scissors");
  
});

scoreanims.addEventListener("click",function(){
this.classList.toggle("rotateSpin")

});





