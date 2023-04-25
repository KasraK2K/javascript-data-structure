// `Linear Time O(n)` - Increase data is equal to increase number of operation linear

var nemo = ['nemo'];

/**
 * @param {string[]} array
 */
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('O(n): found Nemo!');
    }
  }
}

findNemo(nemo); // O(n)