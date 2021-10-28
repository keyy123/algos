function superDigit(n, k) {
let b = n.split('')['1','4','8']
let c = b.map(Number) [1,4,8]
k = c.length 

let sum = 0; 
if(k === 0){
  return sum; 
}else{
  sum += c[0]
  superDigit(n = c.slice(1).join(''),k = c.slice(1).join('').length)
}

}
