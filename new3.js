// 3. Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1 

function secondNumber(arr1, arr2) {
  let fullArr = []
  fullArr.push(...arr1, ...arr2)
  fullArr.sort((a,b)=>a - b)
  let res = []
  res.push(fullArr[1])
  res.push(fullArr[fullArr.length - 2])
  return res;
}

console.log(secondNumber([5,3,1, 0, 0], [40, 25, 80, 80]))