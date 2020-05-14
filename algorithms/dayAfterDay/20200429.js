function isLuckyNumber (number, cache = []) {
  // const char = number.toString().split('')
  // let res = 0,
  //   i = 0
  // while( i< char.length) {
  //   res += char[i] * char[i];
  //   i++
  // }
  
  // if (res !== 1 && !cache.includes(res)) {
  //   cache.push(res)
  //   return isLuckyNumber(res, cache)
  // } else if (res !== 1 && cache.includes(res)) {
  //   console.log(res);
  //   return false
  // } else if (res === 1) {
  //   return true
  // }
  number += ''
  let set = new Set()
  let n="";
  while (condition) {
    
  }
  for(let i =0; i<number.length;i++){
    n = number[i]*number[i]
  }
  if(n==1){
    return true
  }
  if(set.has(number)){
    return false
  }else{
    set.add(number)
  }
}

console.log(isLuckyNumber(19, []));