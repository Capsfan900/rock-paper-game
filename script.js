let userScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
//////////////////////
let winscreen = document.getElementById("winscreen");
let losescreen = document.getElementById("losescreen");
let tiescreen = document.getElementById("tiescreen");
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
  return result;
}

function updateScoreDisplay() {
  if (userScore === 60) {
    userScore -= 60;
    computerScore = 0;
    winscreen.style.opacity = 1;
     //game win (best of 5)
  } else if (computerScore === 60) {
   losescreen.style.opacity = 1;
    userScore = 0;
    computerScore -= 60;
     //game win (best of 5)
  }

  setTimeout(() => {
  document.getElementById("playerscore").textContent = userScore;
  document.getElementById("computerscore").textContent = computerScore; 
  }, 1200)

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
  scoreanims.className = 'rotateSpin';
  setTimeout(() => {
    resultanim.className = computerChoice;   
    scoreanims.className = 'clear';  
    if(roundResult ==="win"){
      let audio2 = new Audio("sounds/win.mp3");
      audio2.play();
    } else if (roundResult ==="lose"){
      let audio3 = new Audio("sounds/fail.mp3");
      audio3.play();
    } else if(roundResult ==="tie") {
      let audio4 = new Audio("sounds/clickpop.mp3");
      audio4.play();

    }
   
  }, 1010)
  
  console.log(userChoice); 
  console.log(computerChoice); //for degbug yo
  console.log(roundResult); 
  // Update the score display after each round
  updateScoreDisplay();
}

// Display initial scores
updateScoreDisplay();


























//animation for computer choice 




////sound effects
            





//media manipulation and animations




// Event listeners

rock.addEventListener("click", function () {
  let audio = new Audio('sounds/clicksound.mp3');
  audio.play();
  rock.className = 'spin';
  game("rock");
});


paper.addEventListener("click", function () {
  let audio = new Audio('sounds/clicksound.mp3');
  audio.play();
  paper.className = 'spin';
  game("paper");
});

scissors.addEventListener("click", function () {
  let audio = new Audio('sounds/clicksound.mp3');
  audio.play();
  scissors.className = 'spin';
  game("scissors");
});





