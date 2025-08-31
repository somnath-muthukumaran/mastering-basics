import { SingleLinkedListWithTail } from "../linked-list/single";

export class ArrayBasedLinearQueue<T> {
  items: Array<T> = [];

  constructor(initialElements?: T[]) {
    if (initialElements) {
      initialElements.forEach((x) => this.enqueue(x));
    }
  }
  get size() {
    return this.items.length;
  }

  peekFront(): T | undefined {
    return this.items[0];
  }

  peekRear(): T | undefined {
    return this.items[this.size - 1];
  }

  get isEmpty() {
    return this.size == 0;
  }

  enqueue(item: T): void {
    this.items.push(item);
    return;
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  clear() {
    this.items = [];
  }
}

class LLBasedLinearQueue<T> {
  items = new SingleLinkedListWithTail<T>();
}

class CircularQueue {}

class PriorityQueue {}

class DoubleEndedQueue {}

class CircularDeque {}

class MultipleQueue {}

class DoubleEndedPriorityQueue {}
