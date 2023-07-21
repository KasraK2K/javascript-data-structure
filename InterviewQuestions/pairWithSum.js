// [1, 2, 3, 9] - sum = 8 - NO
// [1, 2, 4, 4] - sum = 8 - YES

function sortedHasPairWithSum(arr, sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sumLeftRight = arr[left] + arr[right];

    if (sumLeftRight === sum)
      return { found: true, position: [arr[left], arr[right]] };
    else if (sumLeftRight > sum) right = right - 1;
    else if (sumLeftRight < sum) left = left + 1;
  }

  return { found: false, position: [] };
}

const resultOne = sortedHasPairWithSum([1, 2, 4, 4], 8);
console.log(resultOne);

function unsortedHasPairWithSum(data, sum) {
  let complements = new Set();
  for (let value of data) {
    if (complements.has(value))
      return { found: true, values: [sum - value, value] };
    complements.add(sum - value);
  }
  return { found: false, values: [] };
}

const resultTwo = unsortedHasPairWithSum([1, 2, 4, 4], 8);
console.log(resultTwo);
