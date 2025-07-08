const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, [1, 2, 3], [1, 2, 3, [4, 5, 6, [7, 8]]]],
];

function flat(arr: any[], depth: any = 1): any[] {
  const result = [];
  if (depth === 0) return arr;
  for (const item of arr) {
    if (Array.isArray(item)) {
      const subResult = flat(item, depth - 1);
      for (const subItem of subResult) {
        result[result.length] = subItem;
      }
    } else {
      result[result.length] = item;
    }
  }
  return result;
}

const result = flat(arr, 2);
console.log(result);
