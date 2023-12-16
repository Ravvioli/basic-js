const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Base case: if arr does not contain any nested arrays
    if (!Array.isArray(arr)) {
      return 0;
    }

    // Recursive case: calculate the depth for each nested array
    const depths = arr.map((item) => this.calculateDepth(item));

    // The depth of the current array is one more than the maximum depth of its nested arrays
    return 1 + (depths.length > 0 ? Math.max(...depths) : 0);
  }
}

module.exports = {
  DepthCalculator,
};
