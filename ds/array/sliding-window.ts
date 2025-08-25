/* conventional sliding window
 * function slidingWindow(arr, k) {
 *  for (let i = 0; i <= arr.length - k; i++) {
 *    let window = arr.slice(i, i + k); // current window
 *    console.log("Window:", window);
 *  }
 *}
 *slidingWindow([1, 2, 3, 4, 5, 6], 3);
 */

/**
 * O(n.k) and we have better way to solve this
 */
// function  firstNegativeNumberInEveryWindowOfSizeK() {
//     const k = 3
//     const targetArr = [-1,2,-3,0,2,3,7,-9]

//     const len = targetArr.length;
//     let window = targetArr.slice(0, k);
//     const result = [];
//     let firstNeg = window.find(x => x < 0);
//   result.push(firstNeg !== undefined ? firstNeg : 0);
//     for (let i = k; i < len; i++) {
//       let entry = targetArr[i];
//       window.shift();
//       window.push(entry);
//       const firstNeg = window.find((x) => x < 0);
//       result.push(firstNeg !== undefined ? firstNeg : 0);
//       console.log("Window:", window, "Entry:", entry);
//     }
//     console.log("result",result)
//   }

class SlindingWindow {
  targetArr!: number[];
  targetStr!: string;
  constructor(str: string = "", arr: Array<number> = []) {
    this.targetArr = arr;
    this.targetStr = str;
  }

  /**
   * const arr = [2, 1, 5, 1, 3, 2];
   * const k = 3;
   *
   * Problem 1: Maximum Sum Subarray of Size K
   */
  maxSumSubArrayOfK(wSize: number) {
    if (this.targetArr.length < wSize) {
      return 0;
    }

    let windowSum = 0;
    let maxSum = 0;
    for (let i = 0; i < wSize; i++) {
      windowSum += this.targetArr[i];
    }
    maxSum = windowSum;
    for (let i = wSize; i < this.targetArr.length; i++) {
      const exit = this.targetArr[i - wSize];
      const entry = this.targetArr[i];
      windowSum += entry - exit;
      if (maxSum < windowSum) {
        maxSum = windowSum;
      }
    }
    return maxSum;
  }

  /**
   *  Problem 2: First Negative Number in Every Window of Size K
   */
  firstNegativeNumberInEveryWindowOfSizeK(k: number) {
    const arr = this.targetArr;
    const queue = [];
    const result = [];
    for (let i = 0; i < k; i++) {
      if (arr[i] < 0) queue.push(i);
    }
    result.push(queue.length ? arr[queue[0]] : 0);

    for (let i = k; i < arr.length; i++) {
      5 - 3;
      while (queue.length > 0 && queue[0] <= i - k) {
        queue.shift();
      }
      if (arr[i] < 0) queue.push(i);

      result.push(queue.length ? arr[queue[0]] : 0);
    }
  }

  /**
   *  Problem 3: Count Distinct Elements in Every Window of Size K
   * frequency map
   * set won't workout if there's a repeatitive element in the array hence map
   */
  countDistinctElementsInEveryWindowOfSizeK(k: number) {
    const arr = this.targetArr;
    const frequency = new Map();
    const result = [];
    for (let i = 0; i < k; i++) {
      const count = frequency.get(arr[i]) || 0;
      frequency.set(arr[i], count + 1);
    }
    result.push(frequency.size);

    for (let i = k; i < arr.length; i++) {
      const exit = arr[i - k];
      const exitCount = frequency.get(exit);
      frequency.set(exit, exitCount - 1);
      if (frequency.get(exit) <= 0) {
        frequency.delete(exit);
      }
      const count = frequency.get(arr[i]) || 0;
      frequency.set(arr[i], count + 1);
      result.push(frequency.size);
    }
    console.log(result);
  }

  /**
   * Problem 1: Longest Substring Without Repeating Characters
   */
  longestSubStringWithoutRepeatingCharacters() {
    const input = this.targetStr;
    let maxSubLen = 0;
    let left = 0;
    const seenList = new Set();
    for (let right = 0; right < input.length; right++) {
      while (seenList.has(input[right])) {
        seenList.delete(input[left]);
        left++;
      }
      seenList.add(input[right]);
      maxSubLen = Math.max(maxSubLen, right - left + 1);
    }
    return maxSubLen;
  }

  /**
   * Problem 2: Smallest Subarray with a Sum ≥ S
   */
  smallestSubArrayWithASum(s: number) {
    const arr = this.targetArr;
    let minSubLen = Infinity;
    let left = 0;
    let windowSum = 0;
    for (let right = 0; right < arr.length; right++) {
      windowSum += arr[right];
      while (windowSum >= s) {
        minSubLen = Math.min(minSubLen, right - left + 1);
        windowSum -= arr[left];
        left++;
      }
    }
    return minSubLen === Infinity ? 0 : minSubLen;
  }

  /**
   * Problem 3: Longest Substring with At Most K Distinct Characters
   */
  longestSubStringWithAtMostKDistinctCharacters(k: number) {
    const input = "abcabcbb";
    let maxLen = 0;
    let left = 0;
    const frequency = new Map();
    for (let right = 0; right < input.length; right++) {
      const letter = input[right];
      frequency.set(letter, (frequency.get(letter) || 0) + 1);
      while (frequency.size > k) {
        const exit = input[left];
        frequency.set(exit, (frequency.get(exit) || 0) - 1);
        if (frequency.get(exit) <= 0) {
          frequency.delete(exit);
        }
        left++;
      }
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
  }
}

const sw = new SlindingWindow(undefined, [2, 1, 5, 1, 3, 2]);
console.log(sw.maxSumSubArrayOfK(3));
