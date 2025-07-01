# 📚 Detailed DSA Topics Reference Guide
*Comprehensive topic breakdown for each data structure*

---

## 🧱 **ARRAYS**

### **Core Concepts:**
- **Array Fundamentals**
  - Static vs Dynamic arrays
  - Memory layout and contiguous storage
  - Index-based access and bounds checking
  - Array initialization and declaration

- **Basic Operations**
  - Traversal (forward/backward)
  - Insertion (beginning, middle, end)
  - Deletion (by index, by value)
  - Searching (linear search)
  - Updating elements

- **Advanced Array Techniques**
  - Two-pointer technique
  - Sliding window approach
  - Prefix sum arrays
  - Difference arrays
  - Kadane's algorithm (maximum subarray)

### **Sorting Algorithms:**
- **Elementary Sorts**
  - Bubble sort - O(n²)
  - Selection sort - O(n²)
  - Insertion sort - O(n²)
  
- **Efficient Sorts**
  - Merge sort - O(n log n)
  - Quick sort - O(n log n) average
  - Heap sort - O(n log n)
  - Counting sort - O(n+k)
  - Radix sort - O(d×n)

### **Searching Algorithms:**
- Linear search - O(n)
- Binary search - O(log n)
- Jump search - O(√n)
- Interpolation search - O(log log n)

### **Array Variations:**
- Multi-dimensional arrays (2D, 3D)
- Jagged arrays
- Sparse arrays
- Circular arrays
- Dynamic arrays (vectors, lists)

### **Time/Space Complexity:**
- Access: O(1)
- Search: O(n) unsorted, O(log n) sorted
- Insertion: O(1) at end, O(n) at beginning/middle
- Deletion: O(1) at end, O(n) at beginning/middle
- Space: O(n)

---

## 📚 **STACK**

### **Core Concepts:**
- **Stack Fundamentals**
  - LIFO (Last In, First Out) principle
  - Stack ADT (Abstract Data Type)
  - Stack vs other linear structures
  - Stack overflow and underflow

- **Basic Operations**
  - Push - Add element to top
  - Pop - Remove element from top
  - Peek/Top - View top element
  - isEmpty - Check if stack is empty
  - Size - Get number of elements

### **Implementation Methods:**
- **Array-based Stack**
  - Fixed size implementation
  - Dynamic resizing
  - Overflow handling
  
- **Linked List-based Stack**
  - Node structure
  - Dynamic memory allocation
  - No size limitations

### **Advanced Stack Applications:**
- **Expression Evaluation**
  - Infix to postfix conversion
  - Infix to prefix conversion
  - Postfix evaluation
  - Prefix evaluation
  - Bracket matching and validation

- **Parsing and Syntax**
  - Parentheses balancing
  - HTML/XML tag matching
  - Compiler design applications
  - Syntax error detection

### **Algorithm Applications:**
- **Tree Traversals**
  - Iterative DFS (Depth-First Search)
  - Pre-order traversal
  - In-order traversal
  - Post-order traversal

- **Graph Algorithms**
  - DFS implementation
  - Topological sorting
  - Strongly connected components

- **Problem Solving Patterns**
  - Backtracking algorithms
  - Recursive function simulation
  - Undo/Redo operations
  - Function call management

### **Real-World Applications:**
- Browser history management
- Text editor undo/redo
- Function call stack in programming languages
- Memory management in programs
- Calculator applications
- Compiler design

### **Time/Space Complexity:**
- Push: O(1)
- Pop: O(1)
- Peek: O(1)
- Search: O(n)
- Space: O(n)

---

## 📬 **QUEUE**

### **Core Concepts:**
- **Queue Fundamentals**
  - FIFO (First In, First Out) principle
  - Queue ADT (Abstract Data Type)
  - Front and rear pointers
  - Queue vs Stack comparison

- **Basic Operations**
  - Enqueue - Add element to rear
  - Dequeue - Remove element from front
  - Front - View front element
  - Rear - View rear element
  - isEmpty - Check if queue is empty
  - isFull - Check if queue is full

### **Implementation Methods:**
- **Array-based Queue**
  - Linear queue implementation
  - Circular queue implementation
  - Dynamic array queue
  - Overflow and underflow handling

- **Linked List-based Queue**
  - Node structure with front/rear pointers
  - Dynamic memory allocation
  - No size limitations

### **Queue Variations:**
- **Circular Queue**
  - Efficient space utilization
  - Modular arithmetic for indexing
  - Avoiding linear queue limitations

- **Double-ended Queue (Deque)**
  - Insertion/deletion at both ends
  - Input-restricted deque
  - Output-restricted deque

- **Priority Queue**
  - Elements with priorities
  - Max-heap and min-heap implementation
  - Applications in scheduling

### **Advanced Applications:**
- **Graph Algorithms**
  - BFS (Breadth-First Search)
  - Level-order tree traversal
  - Shortest path in unweighted graphs
  - Connected components

- **System Applications**
  - CPU scheduling (Round Robin)
  - Process management
  - Print job scheduling
  - Buffer for data streams

- **Real-time Systems**
  - Handling requests in web servers
  - Keyboard buffer
  - Asynchronous data transfer

### **Algorithm Patterns:**
- Level-order traversal
- Shortest path algorithms
- Multi-threading applications
- Producer-consumer problems

### **Time/Space Complexity:**
- Enqueue: O(1)
- Dequeue: O(1)
- Front/Rear: O(1)
- Search: O(n)
- Space: O(n)

---

## 🔗 **LINKED LIST**

### **Core Concepts:**
- **Linked List Fundamentals**
  - Node structure (data + pointer)
  - Dynamic memory allocation
  - Non-contiguous memory storage
  - Head pointer and traversal

- **Basic Operations**
  - Insertion (beginning, middle, end)
  - Deletion (by value, by position)
  - Traversal (forward)
  - Searching
  - Length calculation

### **Types of Linked Lists:**
- **Singly Linked List**
  - Basic implementation
  - One-way traversal
  - Memory efficient

- **Doubly Linked List**
  - Bidirectional traversal
  - Previous and next pointers
  - Easier deletion
  - More memory overhead

- **Circular Linked List**
  - Last node points to first
  - Continuous traversal
  - Applications in round-robin scheduling

- **Circular Doubly Linked List**
  - Combination of circular and doubly
  - Bidirectional circular traversal

### **Advanced Operations:**
- **List Manipulation**
  - Reversing a linked list
  - Merging two sorted lists
  - Finding middle element
  - Detecting and removing duplicates

- **Cycle Detection**
  - Floyd's cycle detection (tortoise and hare)
  - Cycle detection and removal
  - Finding cycle start point

- **Advanced Algorithms**
  - Intersection of two linked lists
  - Palindrome checking
  - Rotating linked list
  - Flattening multilevel linked list

### **Memory Management:**
- Dynamic memory allocation
- Memory leaks prevention
- Garbage collection considerations
- Pointer manipulation safety

### **Applications:**
- **Data Structure Implementation**
  - Stack implementation
  - Queue implementation
  - Hash table collision resolution

- **System Applications**
  - Operating system process lists
  - Memory management
  - Undo functionality in applications
  - Music playlist management

### **Comparison with Arrays:**
- Memory allocation (dynamic vs static)
- Access time (O(n) vs O(1))
- Insertion/deletion efficiency
- Memory overhead
- Cache performance

### **Time/Space Complexity:**
- Access: O(n)
- Search: O(n)
- Insertion: O(1) with reference, O(n) without
- Deletion: O(1) with reference, O(n) without
- Space: O(n) + pointer overhead

---

## 🌳 **TREE**

### **Core Concepts:**
- **Tree Fundamentals**
  - Root, nodes, leaves, edges
  - Parent-child relationships
  - Height, depth, and level
  - Subtrees and tree traversal

- **Tree Terminology**
  - Degree of a node
  - Path and path length
  - Ancestor and descendant
  - Sibling nodes
  - Internal and external nodes

### **Binary Tree:**
- **Basic Properties**
  - Each node has at most 2 children
  - Left and right child distinction
  - Complete vs incomplete trees
  - Full vs complete binary trees

- **Binary Tree Traversals**
  - **Depth-First Traversals**
    - Pre-order (Root → Left → Right)
    - In-order (Left → Root → Right)
    - Post-order (Left → Right → Root)
  - **Breadth-First Traversal**
    - Level-order traversal
    - Using queue for implementation

- **Binary Tree Operations**
  - Insertion and deletion
  - Height calculation
  - Size calculation
  - Mirror/invert tree
  - Diameter calculation

### **Binary Search Tree (BST):**
- **BST Properties**
  - Left subtree < root < right subtree
  - In-order traversal gives sorted sequence
  - Search, insert, delete operations

- **BST Operations**
  - Search operation - O(log n) average
  - Insertion - maintaining BST property
  - Deletion - three cases (leaf, one child, two children)
  - Finding minimum/maximum
  - Successor and predecessor

- **BST Variations**
  - Self-balancing BSTs
  - AVL trees (height-balanced)
  - Red-Black trees
  - Splay trees

### **Advanced Tree Concepts:**
- **Tree Balancing**
  - Why balancing matters
  - Rotation operations (left, right)
  - AVL tree rotations
  - Red-Black tree properties

- **Tree Applications**
  - Expression trees
  - Decision trees
  - File system hierarchy
  - Syntax trees in compilers

### **Heap (Binary Heap):**
- **Heap Properties**
  - Complete binary tree
  - Heap property (min-heap, max-heap)
  - Parent-child relationship

- **Heap Operations**
  - Insertion (bubble up)
  - Extraction (bubble down)
  - Heapify operation
  - Build heap from array

### **Other Tree Types:**
- **N-ary Trees**
  - More than 2 children per node
  - Generic tree operations
  - Applications in hierarchical data

- **Segment Trees**
  - Range query problems
  - Lazy propagation
  - Update and query operations

- **Binary Indexed Tree (Fenwick Tree)**
  - Efficient range sum queries
  - Point updates
  - Space-efficient implementation

### **Time/Space Complexity:**
- **Binary Tree**: O(n) for most operations
- **BST (balanced)**: O(log n) for search, insert, delete
- **BST (unbalanced)**: O(n) worst case
- **Heap**: O(log n) for insert/extract, O(1) for peek
- **Space**: O(n) for storage + O(h) for recursion stack

---

## 🔤 **TRIE (PREFIX TREE)**

### **Core Concepts:**
- **Trie Fundamentals**
  - Prefix-based storage
  - Character-by-character storage
  - Root represents empty string
  - Path from root to node represents prefix

- **Trie Structure**
  - Node structure with character links
  - End-of-word markers
  - Children array or hash map
  - Space optimization techniques

### **Basic Operations:**
- **Insertion**
  - Character-by-character insertion
  - Creating new nodes as needed
  - Marking end of words
  - Handling duplicate insertions

- **Search Operations**
  - Word search (exact match)
  - Prefix search
  - Wildcard search (with . as any character)
  - Fuzzy search implementations

- **Deletion**
  - Word deletion
  - Node cleanup (removing unused nodes)
  - Handling shared prefixes
  - Maintaining trie integrity

### **Advanced Trie Concepts:**
- **Trie Variations**
  - Compressed trie (radix tree)
  - Suffix trie
  - Ternary search trie
  - Persistent trie

- **Space Optimization**
  - Compressed nodes for single-child paths
  - Bit manipulation for character storage
  - Memory-efficient node representation

### **Trie Applications:**
- **String Processing**
  - Auto-complete systems
  - Spell checkers
  - Word games (Scrabble, Boggle)
  - IP routing tables

- **Text Processing**
  - Dictionary implementations
  - Longest common prefix
  - Word break problems
  - Pattern matching

### **Advanced Algorithms:**
- **Trie-based Sorting**
  - Radix sort using trie
  - Lexicographic ordering
  - String sorting algorithms

- **Pattern Matching**
  - Aho-Corasick algorithm
  - Multiple pattern matching
  - Failure function computation

### **Real-World Applications:**
- Search engines (query suggestions)
- IDE auto-completion
- Contact search in phones
- DNS lookup optimization
- Genome sequence analysis

### **Time/Space Complexity:**
- **Search**: O(m) where m = string length
- **Insert**: O(m) where m = string length
- **Delete**: O(m) where m = string length
- **Space**: O(ALPHABET_SIZE × N × M) worst case
- **Prefix queries**: O(p + k) where p = prefix length, k = results

---

## 🔐 **HASHMAP / HASHSET**

### **Core Concepts:**
- **Hashing Fundamentals**
  - Hash function properties
  - Uniform distribution
  - Deterministic behavior
  - Avalanche effect

- **Hash Table Structure**
  - Array of buckets
  - Key-value pairs
  - Load factor calculation
  - Resizing strategies

### **Hash Functions:**
- **Simple Hash Functions**
  - Division method
  - Mid-square method
  - Folding method
  - Digit analysis

- **Advanced Hash Functions**
  - Multiplication method
  - Universal hashing
  - Cryptographic hash functions
  - Rolling hash (Rabin-Karp)

### **Collision Resolution:**
- **Open Addressing**
  - Linear probing
  - Quadratic probing
  - Double hashing
  - Robin Hood hashing

- **Chaining**
  - Separate chaining with linked lists
  - Separate chaining with trees
  - Coalesced hashing

### **Advanced Concepts:**
- **Dynamic Resizing**
  - Load factor thresholds
  - Rehashing strategies
  - Amortized analysis
  - Incremental resizing

- **Hash Table Variations**
  - Robin Hood hashing
  - Cuckoo hashing
  - Hopscotch hashing
  - Consistent hashing

### **HashMap vs HashSet:**
- **HashMap**
  - Key-value storage
  - Duplicate keys not allowed
  - Value retrieval by key
  - Applications in caching

- **HashSet**
  - Unique element storage
  - No duplicate elements
  - Set operations (union, intersection)
  - Applications in deduplication

### **Applications:**
- **Caching Systems**
  - LRU cache implementation
  - Database query caching
  - Web page caching
  - Memory management

- **Database Systems**
  - Index structures
  - Join operations
  - Query optimization
  - Distributed databases

- **System Design**
  - Load balancing
  - Sharding strategies
  - Session management
  - Rate limiting

### **Performance Optimization:**
- Choosing good hash functions
- Managing load factors
- Minimizing cache misses
- Memory layout optimization

### **Time/Space Complexity:**
- **Average Case**: O(1) for all operations
- **Worst Case**: O(n) with poor hash function
- **Space**: O(n) plus table overhead
- **Resizing**: O(n) amortized

---

## 🏔️ **HEAP (PRIORITY QUEUE)**

### **Core Concepts:**
- **Heap Fundamentals**
  - Complete binary tree property
  - Heap property (min-heap/max-heap)
  - Parent-child relationships
  - Array representation

- **Heap Types**
  - Min-heap (smallest at root)
  - Max-heap (largest at root)
  - Binary heap vs d-ary heap
  - Fibonacci heap

### **Basic Operations:**
- **Insertion (Bubble Up)**
  - Add element at end
  - Compare with parent
  - Swap if heap property violated
  - Continue until heap property restored

- **Extraction (Bubble Down)**
  - Remove root element
  - Replace with last element
  - Compare with children
  - Swap with appropriate child
  - Continue until heap property restored

- **Heapify**
  - Convert array to heap
  - Bottom-up heapification
  - Top-down heapification
  - Build heap from unsorted array

### **Advanced Heap Operations:**
- **Decrease/Increase Key**
  - Modify element priority
  - Restore heap property
  - Applications in algorithms

- **Delete Arbitrary Element**
  - Replace with last element
  - Restore heap property
  - Handle both directions

- **Merge Heaps**
  - Combine two heaps
  - Maintain heap property
  - Efficient merge strategies

### **Heap Variations:**
- **Binary Heap**
  - Standard implementation
  - Array-based storage
  - Good cache performance

- **Binomial Heap**
  - Collection of binomial trees
  - Efficient merge operations
  - Lazy evaluation

- **Fibonacci Heap**
  - Amortized constant time operations
  - Complex implementation
  - Theoretical importance

- **Leftist Heap**
  - Biased towards left
  - Efficient merge
  - Path-based operations

### **Applications:**
- **Algorithm Implementation**
  - Dijkstra's shortest path
  - Prim's minimum spanning tree
  - Huffman coding
  - A* search algorithm

- **System Applications**
  - Task scheduling
  - Process prioritization
  - Event simulation
  - Memory management

- **Data Processing**
  - Top-K problems
  - Median finding
  - Stream processing
  - Order statistics

### **Heap Sort:**
- Build max-heap from array
- Repeatedly extract maximum
- Place at end of array
- Time complexity: O(n log n)
- Space complexity: O(1)

### **Real-World Applications:**
- Operating system schedulers
- Network routing protocols
- Graphics rendering (z-buffer)
- Simulation systems
- Medical emergency systems

### **Time/Space Complexity:**
- **Insert**: O(log n)
- **Extract Min/Max**: O(log n)
- **Peek**: O(1)
- **Build Heap**: O(n)
- **Heap Sort**: O(n log n)
- **Space**: O(1) auxiliary space

---

## 🌐 **GRAPH**

### **Core Concepts:**
- **Graph Fundamentals**
  - Vertices (nodes) and edges
  - Directed vs undirected graphs
  - Weighted vs unweighted graphs
  - Graph terminology

- **Graph Terminology**
  - Degree of vertex
  - Path, cycle, circuit
  - Connected vs disconnected
  - Strongly connected components

### **Graph Representations:**
- **Adjacency Matrix**
  - 2D array representation
  - Space: O(V²)
  - Fast edge lookup: O(1)
  - Dense graph representation

- **Adjacency List**
  - Array of lists
  - Space: O(V + E)
  - Memory efficient for sparse graphs
  - Dynamic size

- **Edge List**
  - List of all edges
  - Simple representation
  - Good for some algorithms
  - Space: O(E)

### **Graph Traversal Algorithms:**
- **Depth-First Search (DFS)**
  - Recursive implementation
  - Stack-based implementation
  - Applications: cycle detection, topological sort
  - Time: O(V + E), Space: O(V)

- **Breadth-First Search (BFS)**
  - Queue-based implementation
  - Level-by-level exploration
  - Applications: shortest path, level-order
  - Time: O(V + E), Space: O(V)

### **Shortest Path Algorithms:**
- **Single Source Shortest Path**
  - Dijkstra's algorithm (non-negative weights)
  - Bellman-Ford algorithm (negative weights)
  - Applications in routing protocols

- **All Pairs Shortest Path**
  - Floyd-Warshall algorithm
  - Matrix multiplication approach
  - Transitive closure

### **Minimum Spanning Tree:**
- **Kruskal's Algorithm**
  - Edge-based approach
  - Uses Union-Find data structure
  - Greedy algorithm
  - Time: O(E log E)

- **Prim's Algorithm**
  - Vertex-based approach
  - Uses priority queue
  - Greedy algorithm
  - Time: O(E log V)

### **Advanced Graph Algorithms:**
- **Topological Sorting**
  - DFS-based approach
  - Kahn's algorithm (BFS-based)
  - Applications in scheduling
  - Cycle detection

- **Strongly Connected Components**
  - Kosaraju's algorithm
  - Tarjan's algorithm
  - Applications in social networks

- **Network Flow**
  - Max flow min cut theorem
  - Ford-Fulkerson algorithm
  - Edmonds-Karp algorithm
  - Applications in transportation

### **Graph Types:**
- **Special Graphs**
  - Trees (connected acyclic graphs)
  - DAG (Directed Acyclic Graph)
  - Bipartite graphs
  - Complete graphs

- **Weighted Graphs**
  - Positive weights
  - Negative weights
  - Negative cycles

### **Applications:**
- **Social Networks**
  - Friend recommendations
  - Community detection
  - Influence propagation
  - Social media analysis

- **Transportation Systems**
  - Route planning
  - Traffic optimization
  - Public transport networks
  - Navigation systems

- **Computer Networks**
  - Internet routing
  - Network topology
  - Load balancing
  - Fault tolerance

- **Dependency Management**
  - Package managers
  - Build systems
  - Task scheduling
  - Project management

### **Graph Problems:**
- **Classic Problems**
  - Traveling Salesman Problem
  - Graph coloring
  - Hamiltonian path/cycle
  - Maximum clique

- **Matching Problems**
  - Bipartite matching
  - Maximum matching
  - Stable marriage problem
  - Assignment problems

### **Time/Space Complexity:**
- **Adjacency Matrix**: Space O(V²), Edge lookup O(1)
- **Adjacency List**: Space O(V+E), Edge lookup O(degree)
- **DFS/BFS**: Time O(V+E), Space O(V)
- **Dijkstra**: Time O((V+E) log V), Space O(V)
- **Floyd-Warshall**: Time O(V³), Space O(V²)

---

## 🔄 **ADVANCED TOPICS & COMBINATIONS**

### **Hybrid Data Structures:**
- **LRU Cache**
  - HashMap + Doubly Linked List
  - O(1) access and eviction
  - Real-world caching systems

- **Trie + Heap**
  - Auto-complete with ranking
  - Search suggestions with frequency
  - Real-time search systems

- **Graph + Priority Queue**
  - Dijkstra's algorithm implementation
  - A* pathfinding
  - Network routing protocols

### **Advanced Algorithms:**
- **Dynamic Programming on Trees**
  - Tree DP problems
  - Lowest Common Ancestor
  - Heavy-light decomposition

- **Advanced Graph Algorithms**
  - Articulation points and bridges
  - Minimum cut maximum flow
  - Planar graph algorithms

### **System Design Applications:**
- **Distributed Systems**
  - Consistent hashing
  - Distributed hash tables
  - Load balancing algorithms

- **Database Systems**
  - B-trees and B+ trees
  - LSM trees
  - Index structures

### **Complexity Analysis:**
- **Amortized Analysis**
  - Aggregate method
  - Accounting method
  - Potential method

- **Space-Time Tradeoffs**
  - When to optimize for space vs time
  - Cache-friendly algorithms
  - Memory hierarchy considerations