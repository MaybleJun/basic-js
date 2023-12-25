const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // Create objects to store character counts for both strings
  const count1 = {};
  const count2 = {};

  // Function to count character occurrences in a string
  const countCharacters = (str, count) => {
    for (const char of str) {
      count[char] = (count[char] || 0) + 1;
    }
  };

  // Count characters in both strings
  countCharacters(s1, count1);
  countCharacters(s2, count2);

  // Find the common characters and calculate the minimum count
  let commonCount = 0;
  for (const char in count1) {
    if (count2[char]) {
      commonCount += Math.min(count1[char], count2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
