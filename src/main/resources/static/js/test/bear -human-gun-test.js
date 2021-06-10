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
  it('it should update user score', function() {
    result = 'user';
    assert.equal(userScore(), 1, 'should increment user score');
  });

  it('it should update computer score', function() {
      result = 'computer';
      assert.equal(computerScore(), 1, 'should increment computer score');
    });
});