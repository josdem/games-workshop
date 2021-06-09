const MAX_NUMBER = 3;
var result;

function getResult(userSelection){
  getWinner(userSelection);
  console.log("result: " + result);
  return result;
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
  let toEval = userSelection + getComputerChoice();
  console.log("eval: " + toEval);
  switch(toEval){
    case "bearbear":
      result = 'tie';
      break;
    case "humanhuman":
      result = 'tie';
      break;
    case "gungun":
      result = 'tie';
      break;
    case "bearhuman":
      result = 'user';
      break;
    case "beargun":
      result = 'computer';
      break;
    case "humanbear":
      result = 'computer';
      break;
    case "humangun":
      result = 'user';
      break;
    case "gunbear":
      result = 'computer';
      break;
    case "gunhuman":
      result = 'user';
      break;
    default:
      result = 'nill';
  }

}
