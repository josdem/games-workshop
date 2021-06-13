const MAX_NUMBER = 101
let tries = 0

class GuessNumberGame {
    constructor() {
        this.numberGenerated = Math.floor(Math.random() * MAX_NUMBER)
    }
}

const guessNumber = () => {
  let userInput = $('#number').val()
  if(define(userInput) === 0){
      $('#message').html('You are correct, the answer is: ' + userInput)
      $('#number').prop('disabled', true)
      return
  }

  if(define(userInput) === -1)
     $('#message').html('Too low')

  if(define(userInput) === 1)
    $('#message').html('Too high')

  $('#tries').html('Tries: ' + ++tries)
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