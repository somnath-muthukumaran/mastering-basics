import { Node } from "../linked-list/single";
import { StackAbstraction } from "./abstraction";

export class LLBasedStack<T> implements StackAbstraction<T> {
  #top: Node<T> | null = null;
  /**
   * Returns the top element of the stack without removing it.
   * @returns {T | undefined} The top element or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.#top?.data;
  }

  /**
   * Adds an element to the top of the stack.
   * @param {T} item - The element to push onto the stack.
   */
  push(item: T): void {
    const node = new Node(item);
    node.next = this.#top;
    this.#top = node;
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns {T | undefined} The removed element or undefined if the stack is empty.
   */
  pop(): T | undefined {
    if (!this.#top) return;
    const currentTopValue = this.#top.data;
    const nextLastNode = this.#top.next;
    this.#top = nextLastNode;
    return currentTopValue;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.#top === null;
  }
}
