
function isAnagram(s, t) {
  // If the strings have different lengths, they cannot be anagrams
  if (s.length !== t.length) {
      return false;
  }

  // Create a map to count the frequency of each character in string s
  const charCount = {};

  // Increment the count for each character in s
  for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement the count for each character in t
  for (const char of t) {
      if (!charCount[char]) {
          return false; // If a character in t is not found in s, or count goes below zero, return false
      }
      charCount[char]--;
  }

  // If we get through both strings without returning false, they are anagrams
  return true;
}

// Example usage:
console.log(isAnagram("racecar", "carrace")); // Output: true
console.log(isAnagram("jar", "jam")); // Output: false
