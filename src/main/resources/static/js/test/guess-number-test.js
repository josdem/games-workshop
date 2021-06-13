const assert = require('chai').assert;
const {guess} = require('../guess-number.js');

describe('Game generates a random number', () => {

    it('it should have a valid number', () => {
        let number = guess()
        assert.isTrue(number >=0 && number <= 100, 'should have a valid number');
    });

});