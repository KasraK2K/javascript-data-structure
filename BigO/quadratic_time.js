// `Quadratic Time O(n^2)` - Number of operation increase very fast by adding each added data

const characters = ['a', 'b', 'c', 'd']

/**
 * @param {string[]} array 
 */
function logAllPairsOfBoxes(array) {
  array.forEach(function (firstIterate) {
    array.forEach(function (secondIterate) {
      console.log(firstIterate, secondIterate)
    })
  })
}

logAllPairsOfBoxes(characters)

