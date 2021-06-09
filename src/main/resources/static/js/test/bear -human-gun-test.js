const assert = require('chai').assert;
const {game} = require('../bear-human-gun.js');

describe('User selects bear', function() {
  it('it should get a valid result', function() {
    let result = game('bear');
    assert.oneOf(result, ['tie','user','computer'], 'Should be a valid value');
  });
});