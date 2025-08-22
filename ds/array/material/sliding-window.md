# Sliding Window – Fixed Size Problems

---

### Problem 1: Maximum Sum Subarray of Size K

Given an array of integers `arr` and an integer `k`.  
Find the maximum sum of any contiguous subarray of size `k`.

**Example:**
Input: arr = [2, 1, 5, 1, 3, 2], k = 3
Output: 9 // subarray [5, 1, 3]

---

### Problem 2: First Negative Number in Every Window of Size K

Given an array of integers `arr` and an integer `k`.  
For every contiguous window of size `k`, find the first negative number in that window.  
If a window has no negative number, return `0` for that window.

**Example:**
Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
Output: [-1, -1, -7, -15, -15, 0]

---

### Problem 3: Count Distinct Elements in Every Window of Size K

Given an array of integers `arr` and an integer `k`.  
For every contiguous window of size `k`, count how many distinct elements are in that window.

**Example:**
Input: arr = [1, 2, 1, 3, 4, 2, 3], k = 4
Output: [3, 4, 4, 3]

# Sliding Window – Dynamic Size Problems

---

### Problem 1: Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring without repeating characters.

**Example:**
Input: s = "abcabcbb"
Output: 3 // "abc"

---

### Problem 2: Smallest Subarray with a Sum ≥ S

Given an array of positive integers `arr` and a number `S`, find the length of the smallest contiguous subarray whose sum is greater than or equal to `S`.  
If no such subarray exists, return `0`.

**Example:**
Input: arr = [2, 1, 5, 2, 3, 2], S = 7
Output: 2 // subarray [5, 2]

---

### Problem 3: Longest Substring with At Most K Distinct Characters

Given a string `s` and an integer `k`, find the length of the longest substring that contains at most `k` distinct characters.

**Example:**

Input: s = "araaci", k = 2
Output: 4 // "araa"
