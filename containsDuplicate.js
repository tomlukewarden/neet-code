
// Define a function 'containsDuplicate' that takes an array 'nums' as an argument
var containsDuplicate = function(nums) {
  // Create a new Set to store unique numbers
  const numsSet = new Set();
  
  // Iterate through each number in the 'nums' array
  for (const num of nums) {
      // If the number is already in the set, return true (duplicate found)
      if (numsSet.has(num)) {
          return true;
      }
      // Add the number to the set
      numsSet.add(num);
  }
  
  // If no duplicates are found, return false
  return false;
};

// Example usage:
// Test the function with different inputs and log the results to the console
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true (1 is duplicated)
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false (all elements are unique)
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true (multiple duplicates)


