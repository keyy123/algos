function birthday(s, d, m) {
  // Write your code here
  //console.log(s.length, d, m) //5, 3, 2
  //s = [1,2,1,3,2]
let sum = 0;
let temp = 0;
let results = 0;
if (s.length < m) return null;
for (let i = 0; i < m; i++){
  sum += s[i]; 
}
if(sum === d){
      results++;
  }else{
      results;
  } 
 temp = sum;
 for (let i = m; i < s.length; i++) {
  temp = temp - s[i - m] + s[i]
      if(temp === d){
      results++;
  }else{
      results;
  }
 }
 return results;
}