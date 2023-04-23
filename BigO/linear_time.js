// `Linear Time` - Increase data is equal to increase number of operation linear

var nemo = ['nemo'];

/**
 * @param array {string[]}
 */
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('O(n): found Nemo!');
    }
  }
}

findNemo(nemo); // O(n)