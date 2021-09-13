/*
S1.) Understand the problem 


a.) Restate issue in own terms 
Return the array element that appears once in the array


b.) What potential inputs can solve the problem
int?
float?
string?
array - ints, floats, or strings?


c.) What potential outputs can be returned to solve problem
int?
float?
string?
array - ints, floats, or strings?


d.) Is the info given from the inputs alone enough to solve the problem?
Yes, I believe so since the criteria mentions that all elements appear twice 
except for one element


e.) What do we call the important pieces of data?
arr = array parameter, lonelyNum = int, float, string that appearsonce


S2.) Give concrete examples
simple = lonelyNum([1,1,2,2,3,3,4]) //4 
complex = lonelyNum([1,1,2,2,3,4]) //3,4 or //3,
empty = lonelyNum([]), //0 or undefined or []
invalid = lonelyNum(["a,a,c,2,2,3,3"]), //c or //0, or //[], or //"number is required"


S3.) Break It Down - psuedo-code
//console.log array's length
//loop through array
  //filter all elements in array if value = element 

  //if the array length is = to 1 than return the array element 
  }
//return int


*/

//Lesson in objects and arrays working together

function lonelyNum(a) {


//   let freq = {}
//   a.sort()
//   a.map((element, index) => {
//     let number = a[index] //This is setting the number to the element at a specific index 
//     if (freq[number]) { //Sets up a conditional that states if the object freq with its keys set to number is true 
//       freq[number]++; //each time the key aka the number is met in the array the key increments
//     } else {
//       freq[number] = 1;
//     }
//     return freq
//   })
//   let value = Object.values(freq)

//   const loneliest = Object.keys(freq).filter(key => object[key] === value)
//  console.log(value)

  
let b = a.slice().sort();
let arr = []

// for (let i=0; i<b.length; i++) {
//     if (b[i] != b[i+1]) {
//         arr.push(b[i])
//     } else {
//         i++
//     }
  
  b.map()
  
}
return arr;
  
}

console.log(lonelyNum([1,1,2,2,3,3,4]))