const { assert } = require('chai');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should correctly calculate the sum of two rounded numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', function () {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should return NaN if any argument is NaN', function () {
    assert.isNaN(calculateNumber(NaN, 3));
    assert.isNaN(calculateNumber(1, NaN));
  });
});
