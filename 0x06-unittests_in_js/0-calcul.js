/**
 * Function to round two numbers and return their sum.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Rounded sum of a and b
 */
function calculateNumber(a, b) {
  firstInt = Math.round(a);
  secondInt = Math.round(b);
  return firstInt + secondInt;
}

module.exports = calculateNumber;
