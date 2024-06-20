/**
 * Function to perform different operations on two numbers based on type.
 * @param {string} type - Operation type: 'SUM', 'SUBTRACT', 'DIVIDE'
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number|string} Result of the operation or 'Error' if division by zero
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Unsupported operation type');
  }
}

module.exports = calculateNumber;
