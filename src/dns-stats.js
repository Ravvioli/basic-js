const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (const domain of domains) {
    const parts = domain.split(".");
    let currentDomain = "";

    for (let i = parts.length - 1; i >= 0; i--) {
      currentDomain += `.${parts[i]}`;
      dnsStats[currentDomain] = (dnsStats[currentDomain] || 0) + 1;
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats,
};
