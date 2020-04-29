/**
 * 判断是否是合法数字
 * @param {string} char
 * @param {number} x
 * char 为字符
 * x 为进制，默认是 10，如果传入 0，则置为 10
 */
function isLegalNumberChar(char, x = 10) {
  const format = x === 0 ? 10 : x;
  if (x === 16) {
    return (
      (char.codePointAt() <= "f".codePointAt() &&
        char.codePointAt() >= "a".codePointAt()) ||
      (char.codePointAt() >= "0".codePointAt() &&
        char.codePointAt() <= "9".codePointAt())
    );
  } else {
    return (
      char.codePointAt() <= (format - 1).toString().codePointAt() &&
      char.codePointAt() >= "0".codePointAt()
    );
  }
}

function convertScientificToNumber(string) {
  const [floatStr, precisionStr] = string.toLocaleLowerCase().split("e"); // 大 E 变小 e
  const floatNumber = convertStringToNumber(floatStr);
  const precision = convertStringToNumber(precisionStr);
  let res = floatNumber,
    i = 1;
  while (i++ <= precision) {
    // 这里还是有精度问题，暂时不知道咋解决
    res *= 10;
  }
  return res;
}

function convertStringToNumber(string, x = 10) {
  const str = string.toLocaleLowerCase();
  if (x === "e" || x === "E") {
    // 科学计数法
    return convertScientificToNumber(str);
  }
  // 进制
  const chars = str.split("");
  let number = 0;
  let i = 0;
  while (i < chars.length && chars[i] !== ".") {
    const flag = isLegalNumberChar(chars[i], x);
    if (!flag) {
      return number;
    }
    number = number * x;
    const code = chars[i].codePointAt();
    number += code >= 97 ? code - 97 + 10 : code - 48;
    i++;
  }
  if (chars[i] === ".") {
    i++;
  }

  let precision = 0, // 小数位数,
    fraction = 0; // 小数先变整数操作,因为浮点数相加会有误差
  while (i < chars.length) {
    const flag = isLegalNumberChar(chars[i], x);
    if (!flag) {
      break;
    }
    fraction = fraction * x;
    const code = chars[i].codePointAt();
    fraction += code >= 97 ? code - 97 + 10 : code - 48;
    precision++;
    i++;
  }
  return number + fraction / 10 ** precision;
}

console.log(convertStringToNumber("abc.12b", 16));   // 2748.299
console.log(convertStringToNumber("123.0123", 4));   // 27.0027
console.log(convertStringToNumber("123.0123", 8));   // 83.0083
console.log(convertStringToNumber("123.0123", 10));  // 123.0123
console.log(convertStringToNumber("123.0123"));      // 123.0123
console.log(convertStringToNumber("1.123e2", "e"));  // 112.30000000000001,存在精度问题
