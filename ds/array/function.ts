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

    const itemsLength = items.length;
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