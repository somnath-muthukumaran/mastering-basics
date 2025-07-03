class DSArray<T> {
  data: T[];

  constructor(...args: T[]) {
    this.data = args;
  }

  /**
   * push element into the array in last position
   */
  push(element: T): void {
    for (let i = 0; i <= this.length; i++) {
      if (i === this.data.length) {
        this.data[i] = element;
      }
    }
  }

  /**
   * pop element from the last positition
   * @returns value or undefined
   */
  pop(): T | undefined {
    if (!this.length) {
      return;
    }
    const temp = [];
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        return this.data[i];
      } else {
        temp[i] = this.data[i];
      }
    }
    this.data = temp;
  }

  /**
   * remove element from the first positition and return it
   * @returns value or undefined
   */
  shift(): T | undefined {
    if (!this.length) {
      return;
    }
    const temp = [];
    for (let i = this.length - 1; i >= 0; i--) {
      if (i === 0) {
        return this.data[i];
      } else {
        temp[i] = this.data[i];
      }
    }
    this.data = temp;
  }

  /**
   *
   * @param element element that need to be pushed into first position
   */
  unshift(element: T): number {
    const temp = [element];
    for (let i = 0; i < this.length; i++) {
      temp[i + 1] = this.data[i];
    }
    this.data = temp;
    return this.length;
  }

  /**
   *
   * Adds all the elements of an array into a string, separated by the specified separator string.
   * @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
   */
  join(sperator: string) {
    let str = "";
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        str += `${this.data[i]}`;
      } else {
        str += `${this.data[i]}${sperator}`;
      }
    }
    return str;
  }

  /**
   * @description Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start — The zero-based location in the array from which to start removing elements.
   * @param deleteCount — The number of elements to remove.
   * @returns — An array containing the elements that were deleted.
   */
  splice(start: number, deleteCount: number, ...items: T[]) {}

  /**
   * @description Adds/removes elements at a specific index.
   * @Return a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
   * @param start — The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
   * @param end — The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
   */
  slice(start?: number, end?: number) {}

  get length() {
    let count = 0;
    for (let _ in this.data) {
      count++;
    }
    return count;
  }
}
