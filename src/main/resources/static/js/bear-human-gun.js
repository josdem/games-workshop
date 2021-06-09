const MAX_NUMBER = 3;

const playGame = function(userSelection){
  let result = determineWinner(userSelection);
  console.log("result:", result);
  return result;
}

const generateComputerNumber = function() {
  return Math.floor(Math.random() * MAX_NUMBER);
}

const getComputerChoice = function() {
  switch(generateComputerNumber()){
    case 0: return 'bear';
    case 1: return 'human';
    case 2: return 'gun';
  }
}

const determineWinner = function(userSelection) {
  switch(userSelection + getComputerChoice()){
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