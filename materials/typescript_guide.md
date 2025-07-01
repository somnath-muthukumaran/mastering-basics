# 🚀 TypeScript Prerequisites for DSA Implementation
*Essential TypeScript concepts you need before implementing data structures and algorithms*

---

## 🎯 **Phase 1: TypeScript Fundamentals (Week 1)**

### **1.1 Basic Types & Type Annotations**
```typescript
// Primitive types
let count: number = 42;
let name: string = "Alice";
let isActive: boolean = true;
let data: null = null;
let value: undefined = undefined;

// Array types
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple types (important for pairs in algorithms)
let coordinate: [number, number] = [10, 20];
let keyValue: [string, number] = ["age", 25];
```

### **1.2 Union Types & Type Guards**
```typescript
// Union types (crucial for flexible DSA implementations)
type ID = string | number;
type DataType = string | number | boolean;

// Type guards (essential for runtime type checking)
function isString(value: any): value is string {
    return typeof value === 'string';
}

function processData(data: string | number) {
    if (typeof data === 'string') {
        // TypeScript knows data is string here
        return data.toUpperCase();
    }
    // TypeScript knows data is number here
    return data * 2;
}
```

### **1.3 Literal Types & Enums**
```typescript
// Literal types (useful for algorithm states)
type Direction = 'up' | 'down' | 'left' | 'right';
type SortOrder = 'asc' | 'desc';

// Enums (great for constants in algorithms)
enum TreeType {
    BINARY = 'binary',
    BST = 'bst',
    AVL = 'avl',
    HEAP = 'heap'
}

enum GraphType {
    DIRECTED,
    UNDIRECTED,
    WEIGHTED,
    UNWEIGHTED
}
```

---

## 🎯 **Phase 2: Advanced Types (Week 1-2)**

### **2.1 Interfaces for Data Structures**
```typescript
// Node interfaces (foundation for linked structures)
interface ListNode<T> {
    data: T;
    next: ListNode<T> | null;
}

interface TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}

interface GraphNode<T> {
    id: string;
    data: T;
    neighbors: GraphNode<T>[];
}

// Data structure interfaces
interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    front(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
```

### **2.2 Generic Types (Critical for DSA)**
```typescript
// Generic functions
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

function findMax<T>(arr: T[], compareFn: (a: T, b: T) => number): T | undefined {
    if (arr.length === 0) return undefined;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (compareFn(arr[i], max) > 0) {
            max = arr[i];
        }
    }
    return max;
}

// Generic classes (essential for data structures)
class ArrayList<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    get(index: number): T | undefined {
        return this.items[index];
    }
    
    size(): number {
        return this.items.length;
    }
}
```

### **2.3 Advanced Generic Patterns**
```typescript
// Constrained generics
interface Comparable<T> {
    compareTo(other: T): number;
}

class SortedList<T extends Comparable<T>> {
    private items: T[] = [];
    
    insert(item: T): void {
        // Binary search insertion
        let left = 0, right = this.items.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.items[mid].compareTo(item) < 0) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        this.items.splice(left, 0, item);
    }
}

// Keyof and mapped types (useful for hash maps)
type KeysOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Utility types for algorithms
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E };
```

---

## 🎯 **Phase 3: Object-Oriented Programming (Week 2)**

### **3.1 Classes & Inheritance**
```typescript
// Abstract base class
abstract class DataStructure<T> {
    protected _size: number = 0;
    
    abstract add(item: T): void;
    abstract remove(item: T): boolean;
    abstract contains(item: T): boolean;
    
    get size(): number {
        return this._size;
    }
    
    isEmpty(): boolean {
        return this._size === 0;
    }
}

// Concrete implementation
class HashSet<T> extends DataStructure<T> {
    private buckets: Map<string, T[]> = new Map();
    
    add(item: T): void {
        const hash = this.hash(item);
        if (!this.buckets.has(hash)) {
            this.buckets.set(hash, []);
        }
        
        const bucket = this.buckets.get(hash)!;
        if (!bucket.includes(item)) {
            bucket.push(item);
            this._size++;
        }
    }
    
    remove(item: T): boolean {
        const hash = this.hash(item);
        const bucket = this.buckets.get(hash);
        
        if (!bucket) return false;
        
        const index = bucket.indexOf(item);
        if (index !== -1) {
            bucket.splice(index, 1);
            this._size--;
            return true;
        }
        
        return false;
    }
    
    contains(item: T): boolean {
        const hash = this.hash(item);
        const bucket = this.buckets.get(hash);
        return bucket ? bucket.includes(item) : false;
    }
    
    private hash(item: T): string {
        return String(item);
    }
}
```

### **3.2 Access Modifiers & Encapsulation**
```typescript
class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;
    
    // Public interface
    public insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }
    
    public search(value: T): boolean {
        return this.searchNode(this.root, value);
    }
    
    public inOrder(): T[] {
        const result: T[] = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }
    
    // Private helper methods
    private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
        if (node === null) {
            return { value, left: null, right: null };
        }
        
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }
        
        return node;
    }
    
    private searchNode(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) return false;
        if (value === node.value) return true;
        
        return value < node.value 
            ? this.searchNode(node.left, value)
            : this.searchNode(node.right, value);
    }
    
    private inOrderTraversal(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
    }
    
    // Getter for size (computed property)
    public get size(): number {
        return this.countNodes(this.root);
    }
    
    private countNodes(node: TreeNode<T> | null): number {
        if (node === null) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
}
```

---

## 🎯 **Phase 4: Functional Programming Concepts (Week 2)**

### **4.1 Higher-Order Functions**
```typescript
// Function types
type Predicate<T> = (item: T) => boolean;
type Mapper<T, U> = (item: T) => U;
type Reducer<T, U> = (acc: U, current: T) => U;
type Comparator<T> = (a: T, b: T) => number;

// Generic algorithms using HOFs
class Algorithm {
    static filter<T>(arr: T[], predicate: Predicate<T>): T[] {
        const result: T[] = [];
        for (const item of arr) {
            if (predicate(item)) {
                result.push(item);
            }
        }
        return result;
    }
    
    static map<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
        const result: U[] = [];
        for (const item of arr) {
            result.push(mapper(item));
        }
        return result;
    }
    
    static reduce<T, U>(arr: T[], reducer: Reducer<T, U>, initial: U): U {
        let accumulator = initial;
        for (const item of arr) {
            accumulator = reducer(accumulator, item);
        }
        return accumulator;
    }
    
    static sort<T>(arr: T[], compareFn: Comparator<T>): T[] {
        return [...arr].sort(compareFn);
    }
}

// Usage examples
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = Algorithm.filter(numbers, n => n % 2 === 0);
const doubled = Algorithm.map(numbers, n => n * 2);
const sum = Algorithm.reduce(numbers, (acc, n) => acc + n, 0);
```

### **4.2 Function Composition & Currying**
```typescript
// Function composition (useful for complex algorithms)
type UnaryFunction<T, U> = (arg: T) => U;

function compose<A, B, C>(f: UnaryFunction<B, C>, g: UnaryFunction<A, B>): UnaryFunction<A, C> {
    return (arg: A) => f(g(arg));
}

// Currying (useful for configurable algorithms)
function createComparator<T>(
    accessor: (item: T) => number
): Comparator<T> {
    return (a: T, b: T) => accessor(a) - accessor(b);
}

// Usage
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

const ageComparator = createComparator<Person>(p => p.age);
const sortedByAge = Algorithm.sort(people, ageComparator);
```

---

## 🎯 **Phase 5: Error Handling & Validation (Week 2-3)**

### **5.1 Error Types & Custom Errors**
```typescript
// Custom error classes for data structures
class DSError extends Error {
    constructor(message: string, public code: string) {
        super(message);
        this.name = 'DSError';
    }
}

class EmptyStructureError extends DSError {
    constructor(structureName: string) {
        super(`Cannot perform operation on empty ${structureName}`, 'EMPTY_STRUCTURE');
    }
}

class IndexOutOfBoundsError extends DSError {
    constructor(index: number, size: number) {
        super(`Index ${index} is out of bounds for size ${size}`, 'INDEX_OUT_OF_BOUNDS');
    }
}

class DuplicateKeyError extends DSError {
    constructor(key: string) {
        super(`Key '${key}' already exists`, 'DUPLICATE_KEY');
    }
}
```

### **5.2 Result Type Pattern**
```typescript
// Result type for safer error handling
type Success<T> = { success: true; data: T };
type Failure<E> = { success: false; error: E };
type Result<T, E = Error> = Success<T> | Failure<E>;

// Safe operations
class SafeStack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): Result<T, EmptyStructureError> {
        if (this.items.length === 0) {
            return {
                success: false,
                error: new EmptyStructureError('Stack')
            };
        }
        
        const item = this.items.pop()!;
        return { success: true, data: item };
    }
    
    peek(): Result<T, EmptyStructureError> {
        if (this.items.length === 0) {
            return {
                success: false,
                error: new EmptyStructureError('Stack')
            };
        }
        
        return { success: true, data: this.items[this.items.length - 1] };
    }
}

// Usage
const stack = new SafeStack<number>();
stack.push(1);
stack.push(2);

const popResult = stack.pop();
if (popResult.success) {
    console.log('Popped:', popResult.data);
} else {
    console.error('Error:', popResult.error.message);
}
```

### **5.3 Input Validation**
```typescript
// Validation utilities
class Validator {
    static isNonNegativeInteger(value: number): boolean {
        return Number.isInteger(value) && value >= 0;
    }
    
    static isValidIndex(index: number, size: number): boolean {
        return this.isNonNegativeInteger(index) && index < size;
    }
    
    static isNotNull<T>(value: T | null): value is T {
        return value !== null;
    }
    
    static isNotUndefined<T>(value: T | undefined): value is T {
        return value !== undefined;
    }
}

// Using validation in data structures
class ValidatedArray<T> {
    private items: T[] = [];
    
    get(index: number): Result<T, IndexOutOfBoundsError> {
        if (!Validator.isValidIndex(index, this.items.length)) {
            return {
                success: false,
                error: new IndexOutOfBoundsError(index, this.items.length)
            };
        }
        
        return { success: true, data: this.items[index] };
    }
    
    set(index: number, value: T): Result<void, IndexOutOfBoundsError> {
        if (!Validator.isValidIndex(index, this.items.length)) {
            return {
                success: false,
                error: new IndexOutOfBoundsError(index, this.items.length)
            };
        }
        
        this.items[index] = value;
        return { success: true, data: undefined };
    }
}
```

---

## 🎯 **Phase 6: Testing & Debugging (Week 3)**

### **6.1 Unit Testing with Jest**
```typescript
// Example test file: stack.test.ts
import { Stack } from './stack';

describe('Stack', () => {
    let stack: Stack<number>;
    
    beforeEach(() => {
        stack = new Stack<number>();
    });
    
    describe('push', () => {
        it('should add item to stack', () => {
            stack.push(1);
            expect(stack.size()).toBe(1);
            expect(stack.peek()).toBe(1);
        });
        
        it('should maintain LIFO order', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            
            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
        });
    });
    
    describe('pop', () => {
        it('should return undefined for empty stack', () => {
            expect(stack.pop()).toBeUndefined();
        });
        
        it('should remove and return top item', () => {
            stack.push(42);
            const popped = stack.pop();
            
            expect(popped).toBe(42);
            expect(stack.size()).toBe(0);
        });
    });
    
    describe('edge cases', () => {
        it('should handle large number of operations', () => {
            const items = Array.from({ length: 1000 }, (_, i) => i);
            
            // Push all items
            items.forEach(item => stack.push(item));
            expect(stack.size()).toBe(1000);
            
            // Pop all items in reverse order
            for (let i = items.length - 1; i >= 0; i--) {
                expect(stack.pop()).toBe(i);
            }
            
            expect(stack.isEmpty()).toBe(true);
        });
    });
});
```

### **6.2 Performance Testing**
```typescript
// Performance utilities
class PerformanceTest {
    static measure<T>(name: string, fn: () => T): T {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${name}: ${(end - start).toFixed(2)}ms`);
        return result;
    }
    
    static async measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
        const start = performance.now();
        const result = await fn();
        const end = performance.now();
        console.log(`${name}: ${(end - start).toFixed(2)}ms`);
        return result;
    }
    
    static compareOperations<T>(
        operations: { name: string; fn: () => T }[]
    ): void {
        console.log('\n=== Performance Comparison ===');
        
        const results = operations.map(({ name, fn }) => {
            const start = performance.now();
            const result = fn();
            const end = performance.now();
            const time = end - start;
            
            return { name, time, result };
        });
        
        results
            .sort((a, b) => a.time - b.time)
            .forEach(({ name, time }, index) => {
                const rank = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
                console.log(`${rank} ${name}: ${time.toFixed(2)}ms`);
            });
    }
}

// Usage example
function testSortingAlgorithms() {
    const data = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));
    
    PerformanceTest.compareOperations([
        {
            name: 'Array.sort()',
            fn: () => [...data].sort((a, b) => a - b)
        },
        {
            name: 'Custom QuickSort',
            fn: () => quickSort([...data])
        },
        {
            name: 'Custom MergeSort',
            fn: () => mergeSort([...data])
        }
    ]);
}
```

---

## 🎯 **Phase 7: Advanced TypeScript Features (Week 3-4)**

### **7.1 Conditional Types & Template Literals**
```typescript
// Conditional types for different data structure behaviors
type DataStructureType<T> = T extends number 
    ? 'NumericStructure'
    : T extends string 
    ? 'StringStructure' 
    : 'GenericStructure';

// Template literal types for dynamic method names
type CRUDOperations<T extends string> = 
    | `create${Capitalize<T>}`
    | `read${Capitalize<T>}`
    | `update${Capitalize<T>}`
    | `delete${Capitalize<T>}`;

type UserOperations = CRUDOperations<'user'>; // 'createUser' | 'readUser' | 'updateUser' | 'deleteUser'

// Utility types for algorithm constraints
type Sortable = string | number | Date;
type Hashable = string | number | boolean;

// Conditional type for choosing implementation
type ChooseImplementation<T, Size extends number> = 
    Size extends 0 ? never :
    Size extends 1 ? T :
    Size extends 2 ? [T, T] :
    T[];
```

### **7.2 Decorators for Algorithm Analysis**
```typescript
// Method decorator for timing
function Timed(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value!;
    
    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = method.apply(this, args);
        const end = performance.now();
        
        console.log(`${target.constructor.name}.${propertyName}: ${(end - start).toFixed(2)}ms`);
        return result;
    };
}

// Class decorator for complexity analysis
function ComplexityAnalysis(timeComplexity: string, spaceComplexity: string) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            readonly timeComplexity = timeComplexity;
            readonly spaceComplexity = spaceComplexity;
            
            getComplexity() {
                return {
                    time: this.timeComplexity,
                    space: this.spaceComplexity
                };
            }
        };
    };
}

// Usage
@ComplexityAnalysis('O(log n)', 'O(n)')
class BinarySearchTreeImplementation<T> {
    private root: TreeNode<T> | null = null;
    
    @Timed
    insert(value: T): void {
        // Implementation
    }
    
    @Timed
    search(value: T): boolean {
        // Implementation
        return false;
    }
}
```

### **7.3 Module System & Namespace Organization**
```typescript
// src/types/index.ts
export interface Comparable<T> {
    compareTo(other: T): number;
}

export interface Hashable {
    hashCode(): string;
}

export interface Cloneable<T> {
    clone(): T;
}

// src/utils/index.ts
export namespace ArrayUtils {
    export function swap<T>(arr: T[], i: number, j: number): void {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    export function partition<T>(
        arr: T[], 
        low: number, 
        high: number, 
        compareFn: (a: T, b: T) => number
    ): number {
        // QuickSort partition logic
        return low;
    }
}

export namespace MathUtils {
    export function isPowerOfTwo(n: number): boolean {
        return n > 0 && (n & (n - 1)) === 0;
    }
    
    export function nextPowerOfTwo(n: number): number {
        if (n <= 1) return 1;
        return Math.pow(2, Math.ceil(Math.log2(n)));
    }
}

// src/data-structures/index.ts
export { Stack } from './stack';
export { Queue } from './queue';
export { LinkedList } from './linked-list';
export { BinarySearchTree } from './binary-search-tree';
export { HashMap } from './hash-map';
export { Heap } from './heap';
export { Graph } from './graph';
```

---

## 📚 **Essential Built-in Types & Utilities**

### **Built-in Utility Types You'll Need:**
```typescript
// Partial - make all properties optional
interface TreeConfig {
    maxDepth: number;
    allowDuplicates: boolean;
    compareFn: (a: any, b: any) => number;
}

type OptionalTreeConfig = Partial<TreeConfig>;

// Required - make all properties required
type RequiredTreeConfig = Required<OptionalTreeConfig>;

// Pick - select specific properties
type BasicTreeConfig = Pick<TreeConfig, 'maxDepth' | 'allowDuplicates'>;

// Omit - exclude specific properties
type SimpleTreeConfig = Omit<TreeConfig, 'compareFn'>;

// Record - create object type with specific keys and values
type GraphAdjacencyList<T> = Record<string, T[]>;

// Extract and Exclude - work with union types
type GraphType = 'directed' | 'undirected' | 'weighted' | 'unweighted';
type SimpleGraphType = Extract<GraphType, 'directed' | 'undirected'>;
type NonWeightedGraphType = Exclude<GraphType, 'weighted'>;
```

---

## ⚡ **Performance Optimization Patterns**

### **Memory Management:**
```typescript
// Object pooling for frequent allocations
class NodePool<T> {
    private pool: TreeNode<T>[] = [];
    
    acquire(value: T): TreeNode<T> {
        const node = this.pool.pop();
        if (node) {
            node.value = value;
            node.left = null;
            node.right = null;
            return node;
        }
        return { value, left: null, right: null };
    }
    
    release(node: TreeNode<T>): void {
        // Clear references to prevent memory leaks
        node.left = null;
        node.right = null;
        this.pool.push(node);
    }
}

// Lazy initialization
class LazyBinaryTree<T> {
    private _root: TreeNode<T> | null = null;
    private _size: number | null = null;
    
    get root(): TreeNode<T> | null {
        return this._root;
    }
    
    get size(): number {
        if (this._size === null) {
            this._size = this.calculateSize();
        }
        return this._size;
    }
    
    private calculateSize(): number {
        // Expensive calculation
        return this.countNodes(this._root);
    }
    
    private countNodes(node: TreeNode<T> | null): number {
        if (!node) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
    
    insert(value: T): void {
        this._root = this.insertNode(this._root, value);
        this._size = null; // Invalidate cached size
    }
    
    private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
        // Implementation
        return node || { value, left: null, right: null };
    }
}
```

---

## 🎯 **Study Timeline & Milestones**

### **Week 1: Fundamentals**
- [ ] Master basic types, unions, and type guards
- [ ] Understand interfaces and type aliases
- [ ] Practice with generic functions and constraints
- [ ] Build simple generic classes

### **Week 2: Advanced Types & OOP**
- [ ] Implement inheritance hierarchies for data structures
- [ ] Use advanced generic patterns
- [ ] Master function types and higher-order functions
- [ ] Practice with mapped and conditional types

### **Week 3: Error Handling & Testing**
- [ ] Implement Result type pattern
- [ ] Create custom error classes
- [ ] Write comprehensive unit tests
- [ ] Set up performance benchmarking

### **Week 4: Advanced Features & Integration**
- [ ] Use decorators for method enhancement
- [ ] Organize code with modules and namespaces
- [ ] Implement optimization patterns
- [ ] Practice with utility types

### **Success Criteria:**
- Can implement type-safe generic data structures
- Comfortable with advanced TypeScript patterns
- Can write comprehensive tests for algorithms
- Understands performance implications of type choices
- Ready to implement complex DSA problems with full type safety

---

## 🛠️ **Recommended Setup**

### **tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### **Essential Dev Dependencies**
```json
{
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/jest": "^29.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "ts-node": "^10.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "prettier": "^3.0.0"
  }
}
```

---

*Master these TypeScript concepts, and you'll be well-prepared to implement robust, type-safe data structures and algorithms! The strong typing will help you catch errors early and make your DSA implementations more maintainable and reliable.*