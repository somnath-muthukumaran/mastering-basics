class DSArray<T> {
  data: T[];

  constructor(...args: T[]) {
    this.data = args;
  }

  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
   * @param items — New elements to add to the array.
   */
  push(...elements: T[]): number {
    const elemLength = this.#findLength(elements);
    const dataLength = this.length;
    const totalLength = elemLength + dataLength;
    for (let i = dataLength; i < totalLength; i++) {
      this.data[i] = elements[i - dataLength];
    }
    return this.length;
  }

  /**
   * pop element from the last positition
   * @returns value or undefined
   */
  pop(): T | undefined {
    const length = this.length;
    if (!length) {
      return;
    }
    const temp = [];
    let value;
    for (let i = 0; i < length; i++) {
      if (i === length - 1) {
        value = this.data[i];
      } else {
        temp[i] = this.data[i];
      }
    }
    this.data = temp;
    return value;
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
  unshift(...elements: T[]): number {
    const temp = [];
    const elemLength = this.#findLength(elements);
    const length = this.length;
    const totalLength = elemLength + length;
    for (let i = 0; i < totalLength; i++) {
      if (i < elemLength) {
        temp[i] = elements[i];
      } else {
        temp[i] = this.data[i - length - 1];
      }
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
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (i === length - 1) {
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
  splice(start: number, deleteCount?: number, ...items: T[]) {
    const length = this.length;
    const result = [];
    const removed = [];

    if (start < 0) {
      start = Math.max(length + start, 0);
    } else {
      start = Math.min(start, length);
    }

    const actualDelete =
      deleteCount === undefined
        ? length - start
        : Math.min(deleteCount, length - start);

    const deleteTil = start + actualDelete;
    for (let i = 0; i < length; i++) {
      if (i < start) {
        result[i] = this.data[i];
      } else if (i >= start && i < deleteTil) {
        removed[i - start] = this.data[i];
      }
    }

    const itemsLength = this.#findLength(items);
    const balanceLength = length - actualDelete;
    const fillLength = itemsLength + balanceLength;

    let sourceIndex = deleteTil;
    for (let i = 0; i < fillLength; i++) {
      if (i < itemsLength) {
        result[i + deleteTil] = items[i];
      } else {
        result[i + deleteTil] = this.data[sourceIndex++];
      }
    }

    this.data = result;
    return removed;
  }

  /**
   * @description Adds/removes elements at a specific index.
   * @Return a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
   * @param start — The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
   * @param end — The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
   */
  slice(start?: number, end?: number) {
    const temp = [];
    for (let i = start || 0; i < (end || this.length); i++) {
      temp[i] = this.data[i];
    }
    return temp;
  }

  /**
   *
   * Combines two or more arrays. This method returns a new array without modifying any existing arrays.
   * @param items — Additional arrays and/or items to add to the end of the array.
   */
  concat(elements: T[]): T[] {
    const temp = [];
    const totalLength = elements.length + this.length;
    for (let i = 0; i < totalLength; i++) {
      if (i < this.length) {
        temp[i] = this.data[i];
      } else {
        temp[i] = elements[i - this.length - 1];
      }
    }
    return temp;
  }

  /**
   * Returns a string representation of an array.
   */
  toString() {
    return this.join(",");
  }

  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement — The element to search for.
   * @param fromIndex — The position in this array at which to begin searching for searchElement
   */
  includes(searchElement: T, fromIndex?: number) {
    for (const idx in this.data) {
      if (fromIndex !== undefined) {
        return this.data[idx] === searchElement;
      } else {
        return this.data[idx] === searchElement;
      }
    }
  }

  /**
   * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
   * @param searchElement — The value to locate in the array.
   * @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number) {
    for (const idx in this.data) {
      const result = this.data[idx];
      if (fromIndex !== undefined) {
        return result === searchElement ? idx : -1;
      } else {
        return result === searchElement ? idx : -1;
      }
    }
  }

  /**
   * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
   * @param searchElement — The value to locate in the array.
   * @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  lastIndexOf(searchElement: T, fromIndex?: number) {
    const length = this.length;
    for (let idx = length; idx >= 0; idx--) {
      const result = this.data[idx];
      if (fromIndex !== undefined) {
        return result === searchElement ? idx : -1;
      } else {
        return result === searchElement ? idx : -1;
      }
    }
  }

  /**
   * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
   * @param predicate — find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg — If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  find(
    predicate: (value: T, index: number, obj: T[]) => T | undefined,
    thisArg?: any
  ) {
    for (let i = 0; i < this.length; i++) {
      const flag = predicate.call(thisArg, this.data[i], i, this.data);
      if (flag) {
        return this.data[i];
      }
    }
    return;
  }

  /**
   * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
   * @param predicate — find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg — If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: T[]) => number,
    thisArg?: any
  ) {
    for (let i = 0; i < this.length; i++) {
      const flag = predicate.call(thisArg, this.data[i], i, this.data);
      if (flag) {
        return i;
      }
    }
    return -1;
  }

  /**
   *
   * @param arr target array we are finding the length of
   * @returns count of the target
   */
  #findLength(arr: T[]) {
    let count = 0;
    for (let _ in arr) {
      count++;
    }
    return count;
  }

  static isArray(target: any) {
    const value = Object.prototype.toString.call(target);
    return "[object Array]" === value;
  }

  /**
   * Returns a new array from a set of elements.
   * @param items — A set of elements to include in the new array object.
   */
  static of(...items: unknown[]) {
    const arr = [];
    for (const [index, value] of items.entries()) {
      arr[index] = value;
    }
    return arr;
  }

  /**
   * Returns a new array from a set of elements.
   * @param items — A set of elements to include in the new array object.
   */
  static from(iterable: Iterable<unknown> | ArrayLike<unknown>): unknown[] {
    const temp: unknown[] = [];
    if (Symbol.iterator in Object(iterable)) {
      let idx = 0;
      for (const item of iterable as Iterable<unknown>) {
        temp[idx] = item;
        idx++;
      }
    } else {
      if ("length" in iterable && typeof iterable["length"] === "number") {
        for (let i = 0; i < iterable["length"]; i++) {
          temp[i] = iterable[i];
        }
      }
    }
    return temp;
  }

  get length() {
    return this.#findLength(this.data);
  }
}
