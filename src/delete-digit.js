const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Convert the number to a string to manipulate digits
  const numStr = n.toString();
  
  // Initialize the maximum number to the first digit
  let maxNum = parseInt(numStr.substring(1), 10);

  // Iterate through each digit and find the maximum number by deleting it
  for (let i = 1; i < numStr.length; i++) {
    const currentNum = parseInt(numStr.substring(0, i) + numStr.substring(i + 1), 10);
    maxNum = Math.max(maxNum, currentNum);
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
