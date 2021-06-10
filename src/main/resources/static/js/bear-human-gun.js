const MAX_NUMBER = 3;
var computerChoice;
var result;

const playGame = function(userSelection){
  getComputerChoice();
  result = determineWinner(userSelection);
  console.log("result:", result);
  return result;
}

const generateComputerNumber = function() {
  return Math.floor(Math.random() * MAX_NUMBER);
}

const getComputerChoice = function() {
  switch(generateComputerNumber()){
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

const determineWinner = function(userSelection) {
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

exports.game = playGame;