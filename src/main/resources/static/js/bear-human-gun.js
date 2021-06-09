const MAX_NUMBER = 3;

getResult = function(userSelection){
  return getWinner(userSelection);
}

function generateComputerNumber() {
  return Math.floor(Math.random() * MAX_NUMBER);
}

function getComputerChoice() {
  switch(generateComputerNumber()){
    case 0: return 'bear';
    case 1: return 'human';
    case 2: return 'gun';
  }
}

function getWinner(userSelection) {
  switch(userSelection + getComputerChoice()){
    case "bearbear":
      return 'tie';
    case "humanhuman":
      return 'tie';
    case "gungun":
      return 'tie';
    case "bearhuman":
      return 'user';
    case "beargun":
      return 'computer';
    case "humanbear":
      return 'computer';
    case "humangun":
      return 'user';
    case "gunbear":
      return 'user';
    case "gunhuman":
      return 'computer';
    default:
      return 'nill';
  }
}

module.exports.game = getResult;