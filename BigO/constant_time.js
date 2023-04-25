// `Constant Time O(1)` - No defrences by increase data it takes constant time

var names = Array(1000).fill("Kasra");

/**
 * @param {string[]} array 
 */
function logFirst(array) {
  console.log("O(1):", array[0]);
}

logFirst(names); // O(1)