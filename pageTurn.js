function pageCount(n, p) {
  // Write your code here
console.log(n, p)
// Make fxn that takes min to reach p (page)
// n = 6 p =2 => 1 or 6 
// Make pointers for beginning and end 
if(n <= 0)return -1;
let beta =  Array.from(Array(n + 1).keys())
let start = beta[1]; 

let alpha = beta.slice(start)
let page1 = alpha[0]
let lastpage = alpha.length - 1;
let goal = p 
let store = 0;
let store2 = 0; 
for(let i = 0; i < alpha.length; i++){
if(alpha[i] < p ){
  store = Math.min((alpha[i + 1],alpha[i + 2]), store)
  console.log(store)
}   
}

for(let j = alpha.length - 1; j < alpha.length; j--){
  if(alpha[j] > p && alpha[j] === 1){
  store2 = Math.min((alpha[j - 1], alpha[j - 2]))
  console.log(store2)
  }
}

//  [1, 2, 3, 4, 5, 6]
//   ^              ^
// Reach p in minimum # of step/turn 
// Each page has 2 numbers excluding only start

}