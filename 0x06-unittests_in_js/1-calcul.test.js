const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests for calculateNumber function:', function () {
  describe('Operation: SUM', function () {
    it('Should correctly calculate the sum of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('Operation: SUBTRACT', function () {
    it('Should correctly subtract b from a after rounding', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('Operation: DIVIDE', function () {
    it('Should correctly divide a by b after rounding', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('Should return "Error" when trying to divide by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Error handling', function () {
    it('Should throw an error for unsupported operation type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), Error);
    });
  });
});
