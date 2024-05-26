/*
 * Problem Statement: Array Manipulation**
 * Write a function `findMaxConsecutiveOnes` that
 * takes a binary array `nums`  and
 * returns the maximum number of consecutive 1s in the array.
 */

function findMaxConsecutiveOnes(nums) {
  let match = 0; // keep track the current match
  let maxMatches = 0; // keep track the maximum matches

  for (const value of nums) {
    if (value === 1) {
      match++;

      // Update the max if current match is greater
      if (match > maxMatches) {
        maxMatches = match;
      }
    } else {
      // Reset to 0 if it's not 1
      match = 0;
    }
  }

  return maxMatches;
}

// Example usage
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
