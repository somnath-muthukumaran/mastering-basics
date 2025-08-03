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

export class SingleLinkedListWithTail<T = any> {
  head!: Node<T> | null;
  tail!: Node<T> | null;
  constructor(value: T) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
  }

  append(value: T) {
    // reduced time complexity due to the tail O(1)
    const newNode = new Node(value);
    this.tail!.next = newNode;
    this.tail = newNode;
  }
}
