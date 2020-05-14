// 力扣 1099，小于 K 的两数之和

function foo(arr, k) {
  let max = -1,
    len = arr.length;
  // 暴力破解法
  // for (let i = 0; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     max = Math.max(max, arr[i] + arr[j] > k ? max : arr[i] + arr[j]);
  //   }
  // }

  const sortedArray = arr.sort((a, b)=> a - b)
  let i = 0, j = len -1
  if (sortedArray[0] * 2 > k) {
    return -1
  }
  while (i < j) {
    const res = sortedArray[i] + sortedArray[j]
    if (res < k) {
      max = Math.max(res, max);
      i++;
    } else if (res > k) {
      j--;
    } else if (res === k) {
      return k
    }
  }
  return max;
}

console.log(foo([34, 23, 1, 24, 75, 33, 54, 8], 60));
console.log(foo([10, 20, 30], 15));
