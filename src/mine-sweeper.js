const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Initialize the result matrix with zeros
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Helper function to check if a cell is valid and contains a mine
  const hasMine = (i, j) =>
    i >= 0 && i < rows && j >= 0 && j < cols && matrix[i][j];

  // Iterate through each cell in the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check the eight neighboring cells for mines
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x !== 0 || y !== 0) {
            // If the neighboring cell has a mine, increment the count
            if (hasMine(i + x, j + y)) {
              result[i][j]++;
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
