# Multi-Dimensional Arrays & In-Place Operations - Practice Questions

## Multi-dimensional Arrays - Traversing 2D Arrays

### Row-Major Traversal

1. **Basic Row-Major Print**: Given a 2D array, print all elements in row-major order.
2. **Row-Major Sum**: Calculate the sum of all elements in a 2D array using row-major traversal.
3. **Row-Major Search**: Find the first occurrence of a target value using row-major traversal.
4. **Diagonal Traversal**: Print elements of the main diagonal, then anti-diagonal of a square matrix.
5. **Zigzag Row Traversal**: Traverse odd-numbered rows left-to-right and even-numbered rows right-to-left.

### Column-Major Traversal

6. **Basic Column-Major Print**: Given a 2D array, print all elements in column-major order.
7. **Column Sums**: Calculate the sum of each column and return as an array.
8. **Column-Major Maximum**: Find the maximum element using column-major traversal.
9. **Transpose Using Column Traversal**: Create the transpose of a matrix using column-major access.
10. **Column-wise Sorting**: Sort each column of a 2D array independently.

## Matrix Rotation

### 90 Degrees Clockwise

11. **Rotate 90° Clockwise In-Place**: Rotate an n×n matrix 90 degrees clockwise without extra space.
12. **Rotate 90° Clockwise with Extra Space**: Rotate any m×n matrix 90 degrees clockwise using additional space.
13. **Multiple 90° Rotations**: Given a matrix and number k, rotate it k times by 90 degrees clockwise.
14. **Ring-by-Ring Rotation**: Rotate each concentric ring of a matrix 90 degrees clockwise.

### 90 Degrees Counter-Clockwise

15. **Rotate 90° Counter-Clockwise In-Place**: Rotate an n×n matrix 90 degrees counter-clockwise without extra space.
16. **Rotate 90° Counter-Clockwise with Extra Space**: Rotate any m×n matrix 90 degrees counter-clockwise.
17. **Image Rotation**: Given a 2D array representing an image, rotate it 90 degrees counter-clockwise.

### Other Rotations

18. **Rotate 180 Degrees**: Rotate a matrix 180 degrees in-place.
19. **Arbitrary Angle Rotation**: Implement rotation by any multiple of 90 degrees (0°, 90°, 180°, 270°).
20. **Rotate and Flip**: Rotate a matrix 90 degrees clockwise, then flip it horizontally.

## Spiral Matrix Traversal

### Basic Spiral Traversal

21. **Clockwise Spiral**: Given an m×n matrix, return elements in spiral order (clockwise from outside to inside).
22. **Counter-Clockwise Spiral**: Traverse a matrix in counter-clockwise spiral order.
23. **Spiral Print**: Print a matrix in spiral order with proper formatting.
24. **Spiral Sum**: Calculate the sum of elements encountered in spiral traversal order.

### Generate Spiral Matrices

25. **Generate Spiral Matrix**: Create an n×n matrix filled with numbers 1 to n² in spiral order.
26. **Generate Rectangular Spiral**: Create an m×n matrix filled with consecutive numbers in spiral order.
27. **Custom Spiral Fill**: Fill a matrix in spiral order with a given array of values.

### Advanced Spiral Problems

28. **Spiral Matrix II**: Fill an empty n×n matrix with numbers 1 to n² in spiral order.
29. **Multi-layer Spiral**: Extract each spiral layer of a matrix as separate arrays.
30. **Spiral Coordinates**: Given a position in spiral traversal order, find its (row, col) coordinates.

## Searching in Sorted 2D Matrix

### Row and Column Sorted

31. **Search in Row-Column Sorted Matrix**: Search for a target in a matrix where each row and column is sorted.
32. **Count Elements Less Than Target**: Count elements smaller than a given value in a sorted 2D matrix.
33. **Kth Smallest Element**: Find the kth smallest element in a row and column sorted matrix.
34. **Range Count**: Count elements within a given range [low, high] in a sorted 2D matrix.

### Fully Sorted (Row-wise)

35. **Binary Search in 2D**: Search in a matrix where rows are sorted and first element of each row > last element of previous row.
36. **Find Peak Element 2D**: Find a peak element in a 2D array where each element is greater than its neighbors.
37. **Search in Rotated Sorted Matrix**: Search in a 2D matrix that was originally sorted but then rotated.
38. **Median in Sorted Matrix**: Find the median of all elements in a row-wise sorted matrix.

### Advanced Searching

39. **Search Range in 2D**: Find the first and last occurrence of a target in a sorted 2D matrix.
40. **Closest Element**: Find the element closest to a given target value in a sorted 2D matrix.

## In-Place Operations

### Array Modification Without Extra Space

41. **Reverse 2D Array In-Place**: Reverse the entire 2D array without using extra space.
42. **Move Zeros to End**: Move all zeros in a 2D array to the end of each row in-place.
43. **Remove Duplicates 2D**: Remove duplicate elements from each row of a 2D array in-place.
44. **Sort Rows In-Place**: Sort each row of a 2D array in-place.

### Matrix Transformations

45. **Transpose Square Matrix In-Place**: Transpose an n×n matrix without using extra space.
46. **Flip Matrix Horizontally**: Flip each row of a matrix horizontally in-place.
47. **Flip Matrix Vertically**: Flip the matrix vertically (reverse row order) in-place.
48. **Reverse Diagonal**: Reverse the elements along the main diagonal in-place.

### Value Modifications

49. **Double Even Elements**: Double all even numbers in a 2D array in-place.
50. **Replace with Row Max**: Replace each element with the maximum element in its row.
51. **Increment Border Elements**: Increment all border elements of a matrix by 1.
52. **Set Matrix Zeros**: If an element is 0, set its entire row and column to 0 in-place.

## Handling Edge Cases

### Empty and Single Element Arrays

53. **Handle Empty 2D Array**: Implement all above operations with proper handling for empty arrays.
54. **Single Element Matrix**: Handle matrices with only one element (1×1).
55. **Single Row/Column**: Handle matrices that are essentially 1D (1×n or n×1).
56. **Empty Rows**: Handle matrices with some empty rows.

### Duplicate Values

57. **Matrix with All Same Values**: Handle operations on matrices where all elements are identical.
58. **Search in Matrix with Duplicates**: Modify search algorithms to handle multiple occurrences.
59. **Remove All Duplicates**: Remove all duplicate values from entire matrix, keeping only unique elements.
60. **Count Unique Elements**: Count unique elements in each row/column/entire matrix.

### Extreme Values

61. **Large Matrix Operations**: Optimize operations for very large matrices (memory considerations).
62. **Integer Overflow Handling**: Handle operations that might cause integer overflow.
63. **Negative Value Matrices**: Ensure algorithms work correctly with negative numbers.
64. **Mixed Data Types**: Handle matrices with various numeric types (int, float, etc.).

### Boundary Conditions

65. **Maximum Size Matrix**: Handle the largest possible matrix your system can support.
66. **Minimum Valid Input**: Handle the smallest valid inputs for each operation.
67. **Invalid Dimensions**: Properly handle and report invalid matrix dimensions.
68. **Null/Undefined Elements**: Handle matrices that might contain null or undefined values.

## Combined Challenge Problems

### Integration Problems

69. **Spiral Rotate Search**: Rotate a matrix, then search for an element in spiral order.
70. **In-Place Spiral Fill**: Fill a pre-existing matrix with spiral pattern without extra space.
71. **Rotate and Search**: After rotating a sorted matrix, search for a target element efficiently.
72. **Multi-operation Pipeline**: Chain multiple operations (rotate → transpose → spiral traverse).

### Performance Optimization

73. **Memory-Efficient Traversal**: Traverse very large matrices with minimal memory usage.
74. **Cache-Friendly Operations**: Optimize 2D array operations for better cache performance.
75. **Parallel Matrix Operations**: Design thread-safe versions of matrix operations.
76. **Streaming Matrix Processing**: Process matrices that don't fit entirely in memory.

### Real-World Applications

77. **Image Processing**: Apply rotation and traversal to image pixel arrays.
78. **Game Board Operations**: Implement operations on game boards (chess, tic-tac-toe, etc.).
79. **Spreadsheet Operations**: Simulate spreadsheet operations on 2D data.
80. **Graph Adjacency Matrix**: Perform operations on adjacency matrix representations of graphs.

## Complexity Analysis Questions

81. **Time Complexity Analysis**: Analyze time complexity for each traversal method.
82. **Space Complexity Optimization**: Compare space usage of in-place vs. extra space solutions.
83. **Best/Worst Case Analysis**: Identify best and worst-case scenarios for each algorithm.
84. **Asymptotic Comparison**: Compare different approaches for the same problem asymptotically.

## Implementation Variations

85. **Recursive vs Iterative**: Implement both recursive and iterative versions of traversals.
86. **Different Data Structures**: Implement operations using different underlying data structures.
87. **Generic Implementation**: Create template/generic versions that work with any data type.
88. **Error Handling**: Add comprehensive error handling and input validation.

These questions progress from basic concepts to advanced implementations, covering all the specified topics while emphasizing practical problem-solving skills and edge case handling.
