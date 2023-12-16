const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Фильтруем значения, не равные -1, и сортируем их
  const sortedHeights = arr
    .filter((height) => height !== -1)
    .sort((a, b) => a - b);

  // Создаем новый массив с отсортированными значениями и вставляем -1 на свои места
  const result = arr.map((height) =>
    height === -1 ? -1 : sortedHeights.shift()
  );

  return result;
}

module.exports = {
  sortByHeight,
};
