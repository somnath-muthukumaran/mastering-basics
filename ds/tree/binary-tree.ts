export interface IBinaryTreeNode<T> {
  value: T;
  left: IBinaryTreeNode<T> | null;
  right: IBinaryTreeNode<T> | null;
}

export interface IBinaryTree<T> {
  root: IBinaryTreeNode<T> | null;

  // Traversals
  preorder(): T[];
  inorder(): T[];
  postorder(): T[];
  levelOrder(): T[];

  // Utilities
  insert(value: T): void;
  find(value: T): IBinaryTreeNode<T> | null;
  height(): number;
  size(): number;
}

export interface IBST<T> extends IBinaryTree<T> {
  insert(value: T): void;
  delete(value: T): void;
  findMin(): IBinaryTreeNode<T> | null;
  findMax(): IBinaryTreeNode<T> | null;
  search(value: T): IBinaryTreeNode<T> | null;
}
