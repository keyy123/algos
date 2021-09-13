function plusMinus(arr) {
  let positiveArr = ((arr.filter(x => x > 0)).length/arr.length)
  console.log(positiveArr.toFixed(6))
  let negativeArr = ((arr.filter(x => x < 0)).length / arr.length)
  console.log(negativeArr.toFixed(6))
  let zeroArr = ((arr.filter(x => x === 0)).length / arr.length)
  console.log(zeroArr.toFixed(6))
}

console.log(plusMinus([5,3,0,-1,-5]))