const assert = require('chai').assert;
const {game} = require('../bear-human-gun.js');

describe('User selects bear, human, gun and invalid', function() {
  it('it should select bear', function() {
    let result = game('bear');
    assert.oneOf(result, ['tie','user','computer'], 'Should be a valid value');
  });

  it('it should select human', function() {
    let result = game('human');
    assert.oneOf(result, ['tie','user','computer'], 'Should be a valid value');
  });

  it('it should select gun', function() {
    let result = game('gun');
    assert.oneOf(result, ['tie','user','computer'], 'Should be a valid value');
  });

  it('it should select undefined', function() {
    let result = game('undefined');
    assert.equal(result, 'nill', 'Should be undefined');
  });
});