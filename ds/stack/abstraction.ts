/**
 * A generic interface for stack data structures.
 * Provides methods to interact with the stack, such as adding, removing, and inspecting elements.
 * @template T - The type of elements stored in the stack.
 */
export interface StackAbstraction<T> {
  /**
   * Returns the top element of the stack without removing it.
   * @returns {T | undefined} The top element or undefined if the stack is empty.
   */
  peek(): T | undefined;

  /**
   * Adds an element to the top of the stack.
   * @param {T} item - The element to push onto the stack.
   */
  push(item: T): void;

  /**
   * Removes and returns the top element of the stack.
   * @returns {T | undefined} The removed element or undefined if the stack is empty.
   */
  pop(): T | undefined;

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean;
}
