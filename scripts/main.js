
const getComputerChoice = () => {
  const choice = Math.random();
  if (choice >= 0 && choice <= 0.333) return "rock";
  else if (choice > 0.333 && choice <= 0.666) return "paper";
  else return "scissors";
}
const getHumanChoice = () => {
  let choice;
  while (true) {
    choice = prompt("Enter your choice: 0.Rock 1.Paper 2.Scissors ? ");
    if (choice.toLocaleLowerCase() === 'rock' || choice.toLocaleLowerCase() === 'paper' || choice.toLocaleLowerCase() === 'scissors')
      break;
  }
  return choice;
}
const playGame = () => {

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

  for (let i = 1; i <= 5; i++)
    playRound(getHumanChoice(), getComputerChoice());
  console.log(humanScore, computerScore);
}
playGame();
