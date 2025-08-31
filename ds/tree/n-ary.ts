export interface INaryTreeNode<T> {
  value: T;
  children: INaryTreeNode<T>[];
}

export interface INaryTree<T> {
  root: INaryTreeNode<T> | null;

  addChild(parentValue: T, value: T): boolean;
  find(value: T): INaryTreeNode<T> | null;

  // Traversals
  preorder(): T[];
  postorder(): T[];
  levelOrder(): T[];
}
