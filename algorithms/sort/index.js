function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [12, 3, 24, 32, 4, 35, 43, 5, 6, 54];

/**
 * 冒泡排序
 */
function bubbleSort(target) {
  const arr = [...target];
  const len = arr.length;
  let swapFlag = true;
  for (let i = 0; i < len && swapFlag; i++) {
    swapFlag = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        swapFlag = true;
      }
    }
  }
  return arr;
}

console.log("bubbleSort", bubbleSort(arr));

/**
 * 插入排序
 */
function insertSort(target) {
  const arr = [...target];

  const len = arr.length;
  for (let i = 1, j; i < len; i++) {
    const temp = arr[i];
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log("insertSort", insertSort(arr));

/**
 * 归并排序
 */

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const center = Math.floor(left + (right - left) / 2);
  console.log(left, center, right);

  mergeSort(arr, left, center);
  mergeSort(arr, center + 1, right);

  merge(arr, left, center, right);
}
function merge(arr, left, center, right) {
  const copy = [...arr];
  let k = left,
    i = left,
    j = center + 1;

  while (k <= right) {
    if (i > center) {
      arr[k++] = copy[j++];
    } else if (j > right) {
      arr[k++] = copy[i++];
    } else if (copy[i] > copy[j]) {
      arr[k++] = copy[j++];
    } else if (copy[j] > copy[i]) {
      arr[k++] = copy[i++];
    }
  }
}
// mergeSort(arr, 0, arr.length - 1);
// console.log("mergeSort", arr);

function selectSort(arr, left, right) {
  if (left >= right) return;

  const p = partition(arr, left, right);

  selectSort(arr, left, p - 1);
  selectSort(arr, p + 1, right);
}
function partition(arr, left, right) {
  const random = Math.floor(Math.random(0, 1) * (right - left) + left);

  swap(arr, random, right)
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < arr[right]) {
      swap(arr, j, i++)
    }
  }
  swap(arr, i, right)

  return i
}

selectSort(arr, 0, arr.length - 1);
console.log("selectSort", arr);