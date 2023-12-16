const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  // Iterate through each column
  for (let j = 0; j < cols; j++) {
    // Iterate through each row in the current column
    for (let i = 0; i < rows; i++) {
      // If the value is not below a "0", add it to the sum
      if (i === 0 || matrix[i - 1][j] !== 0) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
