const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /@(.+)$/;
  const match = email.match(regex);

  // Check if the regex match is found
  if (match) {
    return match[1]; // The domain is captured by the group in the regex
  } else {
    throw new Error("Invalid email address");
  }
}

module.exports = {
  getEmailDomain,
};
