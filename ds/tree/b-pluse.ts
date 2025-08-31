export interface IBPlusTreeNode<T> {
  keys: T[];
  children: IBPlusTreeNode<T>[]; // empty if leaf
  isLeaf: boolean;
  next?: IBPlusTreeNode<T>; // points to next leaf for range queries
}

export interface IBPlusTree<T> {
  root: IBPlusTreeNode<T> | null;
  order: number; // maximum number of children per node

  // Operations
  insert(value: T): void;
  delete(value: T): void;
  search(value: T): IBPlusTreeNode<T> | null;

  // Utilities
  rangeSearch(start: T, end: T): T[]; // returns all keys in [start, end]
  height(): number;
  size(): number;
}
