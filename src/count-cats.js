const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Check if the matrix is not provided
  if (!matrix || !Array.isArray(matrix)) {
    throw new Error('Matrix is required');
  }

  // Flatten the matrix and count occurrences of '^^'
  const catsCount = matrix.flat().reduce((count, element) => {
    return count + (element === '^^' ? 1 : 0);
  }, 0);

  return catsCount;
}

module.exports = {
  countCats
};
