const assert = require('chai').assert;
const {canvas} = require('../canvas-modifier.js');

describe('User input an invalid red value', () => {

  it('it should validate red values', () => {
    assert.isFalse(canvas(-1, 1, 1), 'Should validate negative');
    assert.isFalse(canvas(256, 1, 1), 'Should validate huge value');
  });

  it('it should validate green values', () => {
    assert.isFalse(canvas(1, -1, 1), 'Should validate negative');
    assert.isFalse(canvas(1, 256, 1), 'Should validate huge value');
  });

  it('it should validate blue values', () => {
    assert.isFalse(canvas(1, 1, -1), 'Should validate negative');
    assert.isFalse(canvas(1, 1, 256), 'Should validate huge value');
  });

  it('it should be valid', () => {
    assert.isTrue(canvas(1, 1, 1), 'Should be valid');
  });

  it('it should validate numbers', () => {
    assert.isFalse(canvas('hello', 1, 1), 'Should validate characters on red');
    assert.isFalse(canvas(1, 'hello', 1), 'Should validate characters on green');
    assert.isFalse(canvas(1, 1, 'hello'), 'Should validate characters on blue');
  });

});