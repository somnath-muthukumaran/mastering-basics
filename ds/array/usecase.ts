export function prefixSum(arr: number[]) {
  let sum = 0;
  return arr.map((value) => {
    sum += value;
    return sum;
  });
}
export function suffixSum(arr: number[]) {
  const result = [];
  const len = arr.length - 1;
  let sum = 0;
  for (let i = len; i >= 0; i--) {
    sum += arr[i];
    result[i] = sum;
  }
  return result;
}

/**
 * [2, 4, 6, 8, 10]
 * prefix [ 2, 6, 12, 20, 30 ]
 * Queries:
 * 1) sum(1, 3) → 4 + 6 + 8 = 18
 * 2) sum(0, 4) → 2 + 4 + 6 + 8 + 10 = 30
 * 3) sum(2, 2) → 6
 * @param leftIdx
 * @param rightIdx
 * @returns
 */
export function prefixRangeSumQueries(
  prefixSumArr: number[],
  leftIdx: number,
  rightIdx: number
) {
  if (leftIdx === 0) {
    return prefixSumArr[rightIdx];
  } else {
    return prefixSumArr[rightIdx] - prefixSumArr[leftIdx - 1];
  }
}

(function runner() {
  const input = [2, 4, 6, 8, 10];
  const prefixOutput = prefixSum(input);
  const rangeOfSum = prefixRangeSumQueries(prefixOutput, 1, 3);
  const suffixOutput = suffixSum(input);
  console.log("output", rangeOfSum);
})();
