
  //S1.) Modify the original array for the max and min  
  // let originalArr = arr
  // let lostValue = originalArr.pop()
  // let min = originalArr.reduce((a, b) => a + b)
  // console.log(min)
  // arr.push(lostValue)

  //S1-2.) restore the array to normal 

  //adjust maximum logic using filter
  
  // arr.push(lostValue)
  // let lostValue2 = arr.shift()
  // let max = originalArr.reduce((a, b) => a + b) 
  // console.log(max)
// let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//   if (arr.includes(...letter) === true ) {
//     console.log(arr)
//     arr.map(element => {
//       let array = arr.filter(x => typeof (element) != typeof String && x != element)
//       console.log(array)
//     })
//   } else {
  
  // function sameNum() {
  //   arr.every(function (currentElement) {
  //     return currentElement === arr.values()
  //   })
  // }

  // if (arr.every((currentElement) => {
  //   return currentElement === arr.values()
  // }) === true) {
  //   arr.map(num => {
  //     sum += num
  //     return sum
  //   })
  // } else {
  //   arr.map(num => {
  //     console.log(arr)
  //     //let a = arr.filter(x => x != num).reduce((b) => b + b)
  //     //return a
  //   })
  // }
  //   //console.log(Math.min(...a), Math.max(...a))
  //   //S3.) Congrats
  // }


// console.log(minMax([1, 2, 3, 4, 5]))

function minMax(arr) {
  let sum = 0
  if (arr[0] === arr[arr.length - 1]) {
    arr.map(num => {
      sum += num
    })
  } else {
    arr.map(num => {
        let a =  arr.filter(x => x != num).reduce((a, b) => a + b)
          return a
        })
  }

  a?console.log(sum,sum):console.log(Math.min(...a), Math.max(...a))
}




console.log(minMax([5, 5, 5, 5]))
