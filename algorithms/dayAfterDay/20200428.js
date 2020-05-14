/**
 * 删除字符串中出现次数 >= 2 次的相邻字符
 * 输入："abbbaca"
 * 输出："ca"
 * 解释："abbbaca" => "aaca"=>"ca"
 *       0123456
 *       11234
 * 
 */

//解法一：存一个 map，key 是对应的下标，  遍历数组（字符串转数组），判断map[i]与 map[i+1]是否相等，如果相等就 splice 删除相同数据，
const func = (str) => {
  const arr = [...str]
  if (arr.length === 0) {
    return ''
  }
  const map = {}
  map[0] = 1
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] === arr[i-1]) {
      map[i] = map[i-1] + 1
    } else {
      map[i] = 1
      if (map[i-1]>=2) {
        arr.splice(i-map[i-1], map[i-1])
        i=0
      }
    }
  }
  return arr.join('')
}



//解法二：利用栈,遍历字符串依次进栈，比较栈顶和当前元素的大小，如果相等，则重置栈顶元素,如果不等，判断栈顶的元素长度是不是>=2，如果<2则push 当前元素，否则弹出，将索引停留在当前索引
const fun2 = (str) => {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (stack.length === 0) {
      stack.push(s)
      continue
    }
    const top = stack.pop()
    if(top[0] === s) {
      stack.push(top+s)
    } else if (top.length < 2) {
      stack.push(top)
      stack.push(s)
    } else {
      i = i-1
    }
  }
  const top = stack.pop();
  if (top.length < 2) {
    stack.push(top);
  }
  return stack.join('')
}
console.log(fun2("deeedbbcccbdaa"));