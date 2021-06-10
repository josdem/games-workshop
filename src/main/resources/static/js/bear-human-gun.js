const MAX_NUMBER = 3;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

const playGame = userSelection => {
  getComputerChoice();
  result = determineWinner(userSelection);
  console.log("result:", result);
  updateUserScore();
  updateComputerScore();
  return result;
}

const getComputerChoice = () => {
  switch(Math.floor(Math.random() * MAX_NUMBER)){
    case 0:
      computerChoice = 'bear';
      break;
    case 1:
      computerChoice = 'human';
      break;
    case 2:
      computerChoice = 'gun';
      break;
  }
}

const determineWinner = userSelection => {
  switch(userSelection + computerChoice){
    case "bearbear": return 'tie';
    case "humanhuman": return 'tie';
    case "gungun": return 'tie';
    case "bearhuman": return 'user';
    case "beargun": return 'computer';
    case "humanbear": return 'computer';
    case "humangun": return 'user';
    case "gunbear": return 'user';
    case "gunhuman": return 'computer';
    default: return 'nill';
  }
}

const updateUserScore = () => {
  if(result === 'user'){
    userScore++;
  }
  return userScore;
}

const updateComputerScore = () => {
  if(result === 'computer'){
    computerScore++;
  }
  return computerScore;
}
exports.game = playGame;
exports.userScore = updateUserScore;
exports.computerScore = updateComputerScore;