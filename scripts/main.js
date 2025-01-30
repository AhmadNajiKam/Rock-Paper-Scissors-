
const getComputerChoice = () => {
  const choice = Math.random();
  if (choice >= 0 && choice <= 0.333) return "rock";
  else if (choice > 0.333 && choice <= 0.666) return "paper";
  else return "scissors";
}
/*const getHumanChoice = () => {
  let choice;
  while (true) {
    choice = prompt("Enter your choice: 0.Rock 1.Paper 2.Scissors ? ");
    if (choice.toLocaleLowerCase() === 'rock' || choice.toLocaleLowerCase() === 'paper' || choice.toLocaleLowerCase() === 'scissors')
      break;
  }
  return choice;
}*/

let humanScore = 0, computerScore = 0;
const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock" && computerChoice === "scissors") computerScore++;
  else if (humanChoice === "rock" && computerChoice === "paper") humanScore++;
  else if (humanChoice === "paper" && computerChoice === "scissors") computerScore++;
  else if (humanChoice === "paper" && computerChoice === "rock") humanScore++;
  else if (humanChoice === "scissors" && computerChoice === "rock") computerScore++;
  else if (humanChoice === "scissors" && computerChoice === "paper") humanScore++;
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  checkScore();
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  checkScore();
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  checkScore();
});

const hScore = document.createElement("h1");
const cScore = document.createElement("h1");
const displayResults = document.createElement("div");
const announceWinner = document.createElement("h1");
const playGame = () => {

  const body = document.querySelector("body");
  body.appendChild(rock);
  body.appendChild(paper);
  body.appendChild(scissors);
  body.appendChild(displayResults);
  displayResults.appendChild(hScore);
  displayResults.appendChild(cScore);
  displayResults.appendChild(announceWinner);
}
function checkScore() {

  if (humanScore == 5) { announceWinner.textContent = "Human is the winner"; humanScore = 0; computerScore = 0; }
  else if (computerScore == 5) { announceWinner.textContent = "Computer is the winner"; humanScore = 0; computerScore = 0; }

  hScore.textContent = String(humanScore);
  cScore.textContent = String(computerScore);
}

playGame();
