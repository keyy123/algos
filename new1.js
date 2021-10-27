// 1.Program to find the most repeated word in a string and the count of the word
// “Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on. ” 

function repeatedWord(str) {
  let a = str.split(" ") //turn each work into an array element
  let freqCounter = {} //hold the words and numbers
  for (let num of a) {
    freqCounter[num] = (freqCounter[num] || 0) + 1 
  }
 let entry = Object.values(freqCounter)

  let i = 0
  let max = 0
   while (i < entry.length) {
     max = Math.max(max,entry[i])
     i++
  }
  // let mostRepeatedWord = freqCounter.reduce(max, num => max > num ? max : num)
  
  console.log(freqCounter)
  // for (let num in freqCounter) {
  //   max = Math.max(num)
  // }
  function maxKey(o) { //function uses a argument of o as an object

    let keys = Object.keys(o); //variable store keys of the object
    keys.sort((a, b) =>{ //sort keys in descending order
      return o[b] - o[a];
    })
    return keys.slice(0, 1); //return  only the 1st element aka the highest word
  }
  let res = [];
  res.push(...maxKey(freqCounter)); 
  res.push(max);
  
  return res;
}

console.log(repeatedWord("wasted Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on."))





