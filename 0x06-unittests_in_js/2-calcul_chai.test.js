const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('Tests for calculateNumber function:', function () {
  describe('Operation: SUM', function () {
    it('Should correctly calculate the sum of two rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('Operation: SUBTRACT', function () {
    it('Should correctly subtract b from a after rounding', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('Operation: DIVIDE', function () {
    it('Should correctly divide a by b after rounding', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('Should return "Error" when trying to divide by zero', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Error handling', function () {
    it('Should throw an error for unsupported operation type', function () {
      expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw(Error);
    });
  });
});
