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
