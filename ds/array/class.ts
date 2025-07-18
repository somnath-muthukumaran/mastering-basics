class DSArray<
  T extends { toString(): string; toLocaleString(): string } = any
> {
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
      const flag = predicate.call(thisArg || this, this.data[i], i, this.data);
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
      const flag = predicate.call(thisArg || this, this.data[i], i, this.data);
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

  #checkisArray(target: any) {
    const value = Object.prototype.toString.call(target);
    return "[object Array]" === value;
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

  // Iteration

  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void {
    for (let i = 0; i < this.length; i++) {
      callbackfn.call(thisArg || this, this.data[i], i, this.data);
    }
  }

  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
   * @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  filter(
    predicate: (value: T, index: number, array: T[]) => value is T,
    thisArg?: any
  ) {
    const temp = [];
    let idx = 0;
    for (let i = 0; i < this.length; i++) {
      if (predicate.call(thisArg || this, this.data[i], i, this.data)) {
        temp[idx] = this.data[i];
        idx++;
      }
    }
    return temp;
  }

  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map(
    callbackfn: (value: T, index: number, array: T[]) => value is any,
    thisArg?: any
  ) {
    const temp = [];
    for (let i = 0; i < this.length; i++) {
      temp[i] = callbackfn.call(thisArg || this, this.data[i], i, this.data);
    }
    return temp;
  }

  /**
   *Determines whether all the members of an array satisfy the specified test.
   @paramp redicate — A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.
   @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  every(
    predicate: (value: T, index: number, array: T[]) => value is T,
    thisArg?: any
  ) {
    for (let i = 0; i < this.length; i++) {
      if (!predicate.call(thisArg || this, this.data[i], i, this.data)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param predicate — A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  some(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ) {
    for (let i = 0; i < this.length; i++) {
      if (!!predicate.call(thisArg || this, this.data[i], i, this.data)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   */
  reduce(
    callbackfn: (
      accumulator: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T;
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   * @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   */
  reduce(
    callbackfn: (
      accumulator: any,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => any,
    initialValue: any
  ): any;
  reduce(callbackfn: any, initialValue?: any): any {
    if (!this.length && initialValue === undefined) {
      throw TypeError("Reduce of empty array with no initial value");
    }

    let acc;
    let startIndex;
    if (initialValue === undefined) {
      startIndex = 1;
      acc = this.data[0];
    } else {
      startIndex = 0;
      acc = initialValue;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = callbackfn(acc, this.data[i], i, this.data);
    }
    return acc;
  }

  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;
  reduceRight<T, U>(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U
  ): T;
  reduceRight<U = any>(
    callbackfn: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U {
    if (!this.length && initialValue === undefined) {
      throw TypeError("Reduce of empty array with no initial value");
    }

    let acc: any;
    let startIndex: number;

    if (initialValue === undefined) {
      startIndex = this.length - 2;
      acc = this.data[this.length - 1];
    } else {
      startIndex = this.data.length - 1;
      acc = initialValue;
    }

    for (let i = startIndex; i >= 0; i--) {
      acc = callbackfn(acc, this.data[i], i, this.data);
    }

    return acc;
  }

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat(depth: number = 1, arr: any = this.data): any[] {
    const result = [];
    if (depth === 0) return arr;
    for (const item of arr) {
      if (this.#checkisArray(item)) {
        const subResult = this.flat(depth - 1, item);
        for (const subItem of subResult) {
          result[result.length] = subItem;
        }
      } else {
        result[result.length] = item;
      }
    }
    return result;
  }

  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (this: This, value: T, index: number, array: T[]) => U,
    thisArg?: This
  ): U[] {
    const temp = [];
    thisArg = (thisArg || this) as This;
    for (let i = 0; i < this.length; i++) {
      temp[temp.length] = callback.call(thisArg, this.data[i], i, this.data);
    }
    return this.flat(1, temp);
  }

  /**
   * Reverses the elements in an array in place.
   * This method mutates the array and returns a reference to the same array.
   */
  reverse() {
    const temp = [];
    for (let i = this.length - 1; i >= 0; i++) {
      temp[i] = this.data[i];
    }
    this.data = temp;
    return this.data;
  }

  /**
   * Returns an iterable of keys in the array
   */
  keys(): IterableIterator<number> {
    const self = this;
    let index = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next(): IteratorResult<number> {
        if (index < self.length) {
          return { value: index++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  /**
   * Returns an iterable of key, value pairs for every entry in the array
   */
  entries(): IterableIterator<[number, T]> {
    const self = this;
    let index = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next(): IteratorResult<[number, T]> {
        if (index < self.length) {
          const value: [number, T] = [index, self.data[index]];
          index++;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  /**
   * Returns an iterable of values in the array
   */
  values(): IterableIterator<T> {
    const self = this;
    let index = 0;
    return {
      [Symbol.iterator]() {
        return this;
      },
      next(): IteratorResult<T> {
        if (index < self.length) {
          return { value: self.data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  /**
   * Returns a string representation of an array.
   */
  toString(): string {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += (this.data[i] ?? "").toString();
      if (i < this.data.length - 1) result += ",";
    }
    return result;
  }

  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
   */
  toLocaleString(): string {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += (this.data[i] ?? "").toLocaleString();
      if (i < this.data.length - 1) result += ",";
    }
    return result;
  }

  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param value value to fill array section with
   * @param start index to start filling the array at. If start is negative, it is treated as
   * length+start where length is the length of the array.
   * @param end index to stop filling the array at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: T, start: number = 0, end: number = this.length) {
    const startIndex =
      start < 0
        ? Math.max(this.length + start, 0)
        : Math.min(start, this.length);
    const endIndex =
      end < 0 ? Math.max(this.length + end, 0) : Math.min(end, this.length);
    for (let i = startIndex; i < endIndex && i < this.length; i++) {
      this.data[i] = value;
    }
    return this.data;
  }

  /**
   * Returns the this object after copying a section of the array identified by start and end
   * to the same array starting at position target
   * @param target If target is negative, it is treated as length+target where length is the
   * length of the array.
   * @param start If start is negative, it is treated as length+start. If end is negative, it
   * is treated as length+end.
   * @param end If not specified, length of the this object is used as its default value.
   */
  copyWithin(target: number, start: number, end: number = this.length) {
    const len = this.length;
    let from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    let to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
    let finalEnd = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
    let count = Math.min(finalEnd - from, len - to);
    let direction = 1;

    if (from < to && to < from + count) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count > 0) {
      if (from in this.data) {
        this.data[to] = this.data[from];
      } else {
        delete this.data[to];
      }
      to += direction;
      from += direction;
      count--;
    }
    return this.data;
  }

  /**
   * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
   */
  get length() {
    return this.#findLength(this.data);
  }
}

[].copyWithin;
