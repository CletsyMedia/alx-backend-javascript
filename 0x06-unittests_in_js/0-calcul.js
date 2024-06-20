/**
 * Function to round two numbers and return their sum.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Rounded sum of a and b
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
