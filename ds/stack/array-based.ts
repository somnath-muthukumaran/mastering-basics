import { StackAbstraction } from "./abstraction";

export class ArrayBasedStack<T> implements StackAbstraction<T> {
  #data: T[] = [];

  /**
   * Returns the top element of the stack without removing it.
   * @returns {T | undefined} The top element or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.#data[this.#data.length - 1];
  }

  /**
   * Adds an element to the top of the stack.
   * @param {T} item - The element to push onto the stack.
   */
  push(item: T): void {
    this.#data.push(item);
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns {T | undefined} The removed element or undefined if the stack is empty.
   */
  pop(): T | undefined {
    return this.#data.pop();
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.#data.length === 0;
  }

  get temp() {
    return this.#data;
  }
}
