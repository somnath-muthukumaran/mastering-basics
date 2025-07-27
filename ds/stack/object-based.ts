import { StackAbstraction } from "./abstraction";

export class ObjectBasedStack<T> implements StackAbstraction<T> {
  #data: Record<string, T> = {};
  #size = 0;

  /**
   * Returns the top element of the stack without removing it.
   * @returns {T | undefined} The top element or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.#data[this.#size];
  }

  /**
   * Adds an element to the top of the stack.
   * @param {T} item - The element to push onto the stack.
   */
  push(item: T): void {
    this.#size++;
    this.#data[this.#size] = item;
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns {T | undefined} The removed element or undefined if the stack is empty.
   */
  pop(): T | undefined {
    const item = this.#data[this.#size];
    if (item === undefined) {
      throw Error("stack is empty");
    }
    delete this.#data[this.#size];
    this.#size--;
    return item;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.#size === 0;
  }
}
