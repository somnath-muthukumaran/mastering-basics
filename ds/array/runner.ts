function mergeSorted(numsM: number[], m: number, numsN: number[], n: number) {
  let last = numsM.length - 1;
  let targetMax = m - 1;
  let valueMax = n - 1;

  while (last >= 0) {
    if (targetMax >= 0 && valueMax >= 0)
      if (numsM[targetMax] > numsN[valueMax]) {
        numsM[last] = numsM[targetMax];
        targetMax--;
      } else {
        numsM[last] = numsN[valueMax];
        valueMax--;
      }
    last--;
  }
}

const target = [1, 2, 3, 0, 0, 0];
const values = [3, 4, 5];
const m = 3;
const n = 3;
mergeSorted(target, m, values, n);
console.log("target", target);
