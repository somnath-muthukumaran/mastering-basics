export interface IHeap<T> {
  items: T[];
  isMinHeap: boolean;

  insert(value: T): void;
  extract(): T | undefined; // remove min/max
  peek(): T | undefined; // view min/max
  size(): number;
  isEmpty(): boolean;
}
