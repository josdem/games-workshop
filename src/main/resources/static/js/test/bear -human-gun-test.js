const assert = require('chai').assert;
const {game} = require('../bear-human-gun.js');
const {score} = require('../bear-human-gun.js');
const {userScore} = require('../bear-human-gun.js');
const {computerScore} = require('../bear-human-gun.js');

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

describe('Game updates score', function() {
  it('it should verify user score is updated', function() {
    assert.isTrue(userScore() >= 0, 'should increment user score');
  });

  it('it should verify computer score is updated', function() {
    assert.isTrue(computerScore() >= 0, 'should increment computer score');
  });
});