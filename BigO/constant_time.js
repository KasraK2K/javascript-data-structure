// `Constant Time` - No defrences by increase data it takes constant time

var names = Array(1000).fill("Kasra");

function logFirst(array) {
  console.log("O(1):", array[0]);
}

logFirst(names); // O(1)