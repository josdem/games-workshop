const MAX_NUMBER = 101;

class GuessNumberGame {
    constructor() {
        this.numberGenerated = Math.floor(Math.random() * MAX_NUMBER)
        console.log("Number generated: " + this.numberGenerated)
    }
}

const guessNumber = () => {
  let userInput = $('#number').val()
  if(define(userInput) === 0)
    $('#message').html('You are correct, the answer is: ' + userInput)
  if(define(userInput) === -1)
    $('#message').html('Too low')
  if(define(userInput) === 1)
    $('#message').html('Too high')
}

const define = (userInput) => {
    if(userInput < game.numberGenerated)
        return -1
    if(userInput == game.numberGenerated)
        return 0
    return 1
}

let game = new GuessNumberGame()
exports.define = define;