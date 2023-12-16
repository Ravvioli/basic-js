const { NotImplementedError } = require("../extensions/index.js");

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
  let striiing = n.toString();

  let result = -10000000;

  for (let i = 0; i < striiing.length; i++) {
    let x = parseInt(
      String(striiing).slice(0, i) + String(striiing).slice(i + 1)
    );
    console.log(x);
    if (x > result) {
      result = x;
    }
  }
  return result;
}

module.exports = {
  deleteDigit,
};
