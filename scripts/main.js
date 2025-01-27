const getComputerChoice = () => {
  const choice = Math.random();
  if (choice >= 0 && choice <= 0.333) return "rock";
  else if (choice > 0.333 && choice <= 0.666) return "paper";
  else return "scissors";
}

console.log(getComputerChoice());
