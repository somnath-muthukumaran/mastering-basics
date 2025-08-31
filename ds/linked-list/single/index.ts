/**
 * Interface representing a generic linked list.
 * @template T - The type of elements in the linked list.
 */
export interface ILinkedList<T> {
  /**
   * The head node of the linked list.
   */
  head: Node<T> | null;

  /**
   * The tail node of the linked list.
   */
  tail: Node<T> | null;

  /**
   * The number of elements in the linked list.
   */
  readonly size: number;

  /**
   * Indicates whether the linked list is empty.
   */
  readonly isEmpty: boolean;

  /**
   * Appends a value to the end of the linked list.
   * @param value - The value to append.
   */
  append(value: T): void;

  /**
   * Prepends a value to the beginning of the linked list.
   * @param value - The value to prepend.
   */
  prepend(value: T): void;

  /**
   * Removes and returns the last element of the linked list.
   * @returns The removed value, or null if the list is empty.
   */
  pop(): T | null;

  /**
   * Removes and returns the first element of the linked list.
   * @returns The removed value, or null if the list is empty.
   */
  shift(): T | null;

  /**
   * Clears all elements from the linked list.
   */
  clear(): void;

  /**
   * Finds a node in the linked list based on a predicate function.
   * @param predicate - A function to test each element.
   * @returns The first node that satisfies the predicate, or null if none found.
   */
  find?(predicate: (value: T) => boolean): Node<T> | null;

  /**
   * Converts the linked list to an array.
   * @returns An array containing all elements of the linked list.
   */
  toArray?(): T[];

  /**
   * Prints the elements of the linked list.
   */
  print?(): void;
}

export class Node<T = any> {
  data!: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.data = value;
    this.next = null;
  }
}
export class SingleLinkedListWithoutTail<T = any> {
  head!: Node<T> | null;
  constructor(value: T) {
    this.head = new Node(value);
  }

  append(value: T) {
    // time complexity is high due to traversal
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

export class SingleLinkedListWithTail<T = any> implements ILinkedList<T> {
  head!: Node<T> | null;
  tail!: Node<T> | null;
  private _length = 0;
  constructor(value: T) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
  }

  get size() {
    return this._length;
  }

  get isEmpty() {
    return this._length === 0;
  }

  pop(): T | null {
    throw new Error("Method not implemented.");
  }
  shift(): T | null {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  find?(predicate: (value: T) => boolean): Node<T> | null {
    throw new Error("Method not implemented.");
  }
  toArray?(): T[] {
    throw new Error("Method not implemented.");
  }
  print?(): void {
    throw new Error("Method not implemented.");
  }

  prepend(value: T) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(value: T) {
    // reduced time complexity due to the tail O(1)
    const newNode = new Node(value);
    this.tail!.next = newNode;
    this.tail = newNode;
  }
}
