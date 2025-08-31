/**
 * Reverse String – Reverse characters in place using two pointers.
 * @param {string} s
 * @returns {void}
 */
export function reverseString(str: string): string {
  const result = [];
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    result[left] = str[right];
    result[right] = str[left];
    right--;
    left++;
  }
  return result.join("");
}

/**
 * Palindrome Check – Check if a string is a palindrome.
 * @param {string} s
 * @returns {boolean}
 */
export function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}

/**
 * Remove Duplicates from Sorted Array – In-place removal using two pointers.
 * @param {number[]} nums
 * @returns {number}
 */
export function removeDuplicatesInSortedArray(nums: number[]): number {
  if (!nums.length) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

/**
 * Two Sum (Sorted Array) – Find two numbers that add up to target using two pointers.
 * @param {number[]} numbers
 * @param {number} target
 * @returns {[number, number] | null}
 */
export function twoSumSorted(
  numbers: number[],
  target: number
): [number, number] | null {
  return null;
}

/**
 * 3Sum – Find triplets that sum to zero.
 * @param {number[]} nums
 * @returns {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  // TODO: Implement 3Sum using two pointers
  return [];
}

/**
 * Sort Colors (Dutch National Flag) – Partition array using pointers.
 * @param {number[]} nums
 * @returns {void}
 */
export function sortColors(nums: number[]): void {
  // TODO: Implement sort colors using two pointers
}

/**
 * Move Zeroes – Shift zeroes to end in-place using two pointers.
 * @param {number[]} nums
 * @returns {void}
 */
export function moveZeroes(nums: number[]): void {
  // TODO: Implement move zeroes using two pointers
}

/**
 * Container With Most Water – Maximize area between two lines.
 * @param {number[]} height
 * @returns {number}
 */
export function maxArea(height: number[]): number {
  // TODO: Implement container with most water using two pointers
  return 0;
}

/**
 * Trapping Rain Water – Calculate trapped water using two pointers.
 * @param {number[]} height
 * @returns {number}
 */
export function trap(height: number[]): number {
  // TODO: Implement trapping rain water using two pointers
  return 0;
}

/**
 * Minimum Window Substring – Shrinking window with two pointers.
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
export function minWindow(s: string, t: string): string {
  // TODO: Implement minimum window substring using two pointers
  return "";
}

/**
 * Sliding Window Maximum – Optimize using deque/two-pointer approach.
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  // TODO: Implement sliding window maximum using two pointers
  return [];
}

/**
 * Longest Substring with At Most K Distinct Characters – Apply dynamic sliding window.
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
export function lengthOfLongestSubstringKDistinct(
  s: string,
  k: number
): number {
  // TODO: Implement longest substring with at most K distinct characters using two pointers
  return 0;
}

function mergeSorted(numsM: number[], m: number, numsN: number[], n: number) {
  let last = numsM.length - 1;
  let targetMax = m - 1;
  let valueMax = n - 1;

  while (targetMax >= 0 && valueMax >= 0) {
    if (numsM[targetMax] > numsN[valueMax]) {
      numsM[last] = numsM[targetMax];
      targetMax--;
    } else {
      numsM[last] = numsN[valueMax];
      valueMax--;
    }
    last--;
  }
  while (valueMax >= 0) {
    numsM[last] = numsN[valueMax--];
    last--;
  }
}
