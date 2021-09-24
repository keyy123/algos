function sockMerchant(n, ar) {
  if(ar.length < 2) return 0;
 
 
 let freqCounter1 = {}
 let sum;
 for(let num of ar){
     freqCounter1[num] = (freqCounter1[num]||0) + 1
 }

let keys = Object.keys(freqCounter1)




 for(let property in freqCounter1){
     if(freqCounter1[property] < 2){
         delete freqCounter1[property]   
     }
 }
 
 
 
 for(let num in freqCounter1){
     if(keys.length >= 2){
         freqCounter1[num] = Math.floor(freqCounter1[num]/2)
     }else{
         freqCounter1[num] = freqCounter1[num];
     }
 }
 
         let values = Object.values(freqCounter1)
         if(values.length >= 2){
             sum = values.reduce((a,b)=> a + b)
         }else if(keys.length === 1){
             sum = Math.floor(ar.length/2) ;
         }else{
             sum = 0
         }
         return sum;
}
