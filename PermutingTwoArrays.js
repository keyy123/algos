function twoArrays(k, A, B) {

let letterA = A.sort((a, b) => a - b);
let letterB = B.sort((a, b)=> b - a);
let ayo;

for(let i = 0; i < letterA.length; i++){
     if(letterA[i] + letterB[i] >= k){     
     ayo = "YES";
     }else {
       ayo = "NO";
         return ayo 
     }
}
return ayo
}
