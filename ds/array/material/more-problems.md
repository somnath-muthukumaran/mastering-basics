# Advanced Sliding Window Problems & Practice

## Free LeetCode Problems (with numbers)

### Fixed Size Window (Intermediate)

- **LC 438 - Find All Anagrams in a String** (Easy-Medium)

  - Find all start indices of anagrams of pattern `p` in string `s`
  - Example: s = "abab", p = "ab" → Output: [0,2]

- **LC 567 - Permutation in String** (Medium)

  - Check if any permutation of s1 exists as substring in s2
  - Example: s1 = "ab", s2 = "eidbaooo" → Output: true

- **LC 1456 - Maximum Number of Vowels in Substring of Given Length** (Medium)
  - Find max vowels in any substring of length k
  - Example: s = "abciiidef", k = 3 → Output: 3

### Variable Size Window (Medium)

- **LC 904 - Fruit Into Baskets** (Medium)

  - Pick fruits from trees, max 2 types at once
  - Example: fruits = [1,2,1] → Output: 3

- **LC 1004 - Max Consecutive Ones III** (Medium)

  - Longest subarray of 1s after flipping at most k zeros
  - Example: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 → Output: 6

- **LC 424 - Longest Repeating Character Replacement** (Medium)
  - Longest substring with same char after k replacements
  - Example: s = "ABAB", k = 2 → Output: 4

### Variable Size Window (Advanced)

- **LC 76 - Minimum Window Substring** (Hard)

  - Smallest substring containing all chars of pattern
  - Example: s = "ADOBECODEBANC", t = "ABC" → Output: "BANC"

- **LC 239 - Sliding Window Maximum** (Hard)
  - Maximum element in each window of size k
  - Example: nums = [1,3,-1,-3,5,3,6,7], k = 3 → Output: [3,3,5,5,6,7]

## Additional Practice Problems

### Pattern: Two Pointers + Sliding Window

1. **Container With Most Water**

   - Find two lines that form container with most water
   - Variable window, maximize area

2. **Trapping Rain Water**

   - Calculate trapped rainwater between bars
   - Complex sliding window with multiple pointers

3. **Subarray Product Less Than K**
   - Count subarrays where product < k
   - Shrinking window when product ≥ k

### Pattern: Sliding Window + HashMap

4. **Longest Substring with At Most 2 Distinct Characters**

   - Extension of your solved problem with k=2
   - Practice the exact same logic

5. **Replace the Substring for Balanced String**

   - Make string balanced by replacing min characters
   - Track character frequencies in window

6. **Subarrays with K Different Integers**
   - Count subarrays with exactly k distinct elements
   - Trick: exactly k = at most k - at most (k-1)

### Pattern: Sliding Window + Deque

7. **Sliding Window Median**

   - Find median in each window of size k
   - Use two heaps or balanced BST

8. **Constrained Subsequence Sum**
   - Max sum subsequence with constraint on indices
   - Sliding window maximum with DP

## Problem-Solving Patterns

### Fixed Size Pattern

- Calculate initial window sum/state
- Slide window: remove leftmost element, add new rightmost element
- Track maximum/minimum as you slide

### Variable Size Pattern (Maximum Length)

- Use two pointers (left, right)
- Expand window with right pointer
- When condition violated, shrink from left
- Track maximum window size

### Variable Size Pattern (Minimum Length)

- Use two pointers (left, right)
- Expand window with right pointer
- When condition satisfied, try to shrink from left while maintaining condition
- Track minimum window size

## Key Insights to Master

1. **When to use Fixed vs Variable**:

   - Fixed: Problem mentions specific size k
   - Variable: "longest", "shortest", "maximum", "minimum"

2. **Expand vs Shrink Logic**:

   - Always expand with right pointer
   - Shrink when condition violated (max problems)
   - Shrink when condition met (min problems)

3. **State Management**:

   - Use HashMap for character/element counting
   - Use variables for sums, products
   - Use Deque for sliding window maximum/minimum

4. **Edge Cases**:
   - Empty arrays/strings
   - Window size larger than array
   - All elements same
   - Target impossible to achieve

## Next Steps

1. Start with LC 438 (Find Anagrams) - builds on your distinct characters knowledge
2. Try LC 567 (Permutation in String) - similar pattern
3. Challenge yourself with LC 76 (Minimum Window) - the classic hard problem
4. Practice LC 239 (Sliding Window Maximum) for deque technique

Remember: The key is recognizing the pattern, not memorizing solutions!
