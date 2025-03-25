function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (const number of array) {
    // Calculate the complement that would sum to the target
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair sums to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time complexity: O(n), where n is the length of the array.
  Space complexity: O(n), due to the storage of numbers in the set.
*/

/* 
  Add your pseudocode here:
  1. Create an empty set to store numbers we've seen.
  2. Loop through each number in the array:
     a. Calculate the complement (target - current number).
     b. If the complement exists in the set, return true.
     c. Otherwise, add the current number to the set.
  3. If no pair is found, return false.
*/

/*
  Add written explanation of your solution here:
  The function uses a set to keep track of numbers we've seen so far. For each number in the array, 
  it calculates the complement needed to reach the target. If the complement is already in the set, 
  it means we've found a pair of numbers that sum to the target, so we return true. If we finish 
  iterating through the array without finding such a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
