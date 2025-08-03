export class DoublePointNode<T = any> {
  data!: T;
  next: DoublePointNode<T> | null = null;
  prev: DoublePointNode<T> | null = null;
  constructor(
    value: T,
    prev: DoublePointNode<T> | null = null,
    next: DoublePointNode<T> | null = null
  ) {
    this.data = value;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedListWithoutTail<T = any> {
  head!: DoublePointNode<T> | null;
  constructor(value: T) {
    this.head = new DoublePointNode(value);
  }

  append(value: T) {
    // time complexity is high due to traversal
    const newNode = new DoublePointNode(value);
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

export class DoublyLinkedListWithTail<T = any> {
  head!: DoublePointNode<T> | null;
  tail!: DoublePointNode<T> | null;
  constructor(value: T) {
    const node = new DoublePointNode(value);
    this.head = node;
    this.tail = node;
  }

  append(value: T) {
    // reduced time complexity due to the tail O(1)
    const newNode = new DoublePointNode(value);
    this.tail!.next = newNode;
    this.tail = newNode;
  }
}
