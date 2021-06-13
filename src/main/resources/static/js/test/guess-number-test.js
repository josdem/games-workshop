const assert = require('chai').assert
const {guess, define} = require('../guess-number.js')

describe('Game generates a random number', () => {

    it('it should define is too low', () => {
        let userInput = -1
        assert.equal(-1, define(userInput), 'should define is too low');
    })

    it('it should define is too high', () => {
        let userInput = 101
        assert.equal(1, define(userInput), 'should define is too high');
    })

})