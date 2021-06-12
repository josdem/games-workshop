const assert = require('chai').assert;
const {canvas} = require('../canvas-modifier.js');

describe('User input an invalid red value', () => {

  it('it should validate red value', () => {
    assert.isFalse(canvas(-1, 1, 1), 'Should validate negative');
    assert.isFalse(canvas(256, 1, 1), 'Should validate huge value');
  });

});