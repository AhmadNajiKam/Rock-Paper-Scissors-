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
    if (choice <= 2 && choice >= 0)
      break;
  }
  let decision;
  switch (Number(choice)) {
    case 0: decision = "rock"; break;
    case 1: decision = "paper"; break;
    case 2: decision = "scissors"; break;
  }
  return decision;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
