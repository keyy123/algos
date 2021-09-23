function xor(s, t) {
  let result = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      result.push('0')
    } else {
      result.push('1')
    }
  }
  return result
}
console.log(xor('10101', '00101'))
