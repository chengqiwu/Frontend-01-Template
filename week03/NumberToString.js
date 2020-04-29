const hexMap = {
  "10": "a",
  "11": "b",
  "12": "c",
  "13": "d",
  "14": "e",
  "15": "f",
};

function convertScientificToString(number, x) {
  let precision = 0,
    integer = number
  while (integer > 2) {
    integer = integer / 10;
    precision++
  }
  return `${convertNumberToString(integer)}${x}${precision}`;
} 

function convertNumberToString(number, x = 10) {
  if (x === "e" || x === "E") {
    return convertScientificToString(number, x);
  }
  let num = number;
  let fraction = num - Math.floor(num); // 浮点数有精度问题
  let str = "",
    precision = 0;
  while (fraction !== 0) {
    num *= x;
    fraction = num - Math.floor(num);
    precision++;
  }

  while (num > 0) {
    if (x == 16) {
      str = (num % x >= 10 ? hexMap[num % x] : num % x) + str;
    } else {
      str = (num % x) + str;
    }
    num = Math.floor(num / x);
  }
  if (precision === 0) {
    return str;
  }
  // 转字符串，插入字符串`.`
  const chars = str.split("");
  chars.splice(str.length - precision, 0, ".");
  return chars.join("");
}

// 跟 number.toString(进制) 一样
console.log(convertNumberToString(2748.299, 16));  // abc.4c8b439581
console.log(convertNumberToString(27.0027, 4));    // 123.000023003302132323023333
console.log(convertNumberToString(83.0083, 8));    // 123.0041776271107214
console.log(convertNumberToString(123.0123, 10));  // 123.0123
console.log(convertNumberToString(123.0123));      // 123.0123
console.log(convertNumberToString("112.3", "e"));  // 1.123e2