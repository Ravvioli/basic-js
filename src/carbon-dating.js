const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Check if the input is a string
  if (typeof sampleActivity !== "string") {
    return false;
  }

  // Parse the activity to a floating-point number
  const parsedActivity = parseFloat(sampleActivity);

  // Check if the parsed activity is a valid number and within the range of possible activities
  if (
    isNaN(parsedActivity) ||
    parsedActivity <= 0 ||
    parsedActivity > MODERN_ACTIVITY
  ) {
    return false;
  }

  // Calculate the age using the formula for radioactive decay
  const k = Math.LN2 / HALF_LIFE_PERIOD; // decay constant
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / parsedActivity) / k);

  return age;
}

module.exports = {
  dateSample,
};
