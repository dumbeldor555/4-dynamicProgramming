// your attampt at tabulation

// make an array 
// assign every element of the arry with the value of 0
// but assign the first elemnt with the value of 0 and the second one with the value of 1
// and from there 
// 0 1 1 2 3 5 8 13 21 34
// 0 1 2 3 4 5 6 7 8 9 10
// this is very neat solution it's even better than recursion

function fibTabulation(n) {

let arrOfFib = new Array(n + 1).fill(0);
arrOfFib[1] = 1;
for(let i = 0; i < arrOfFib.length; i++) {

curruntPosition = arrOfFib[i];
if(arrOfFib[i + 1] !== undefined) arrOfFib[i + 1] +=  curruntPosition;
if( arrOfFib[i + 2] !== undefined) arrOfFib[i + 2] +=  curruntPosition;
}

return arrOfFib[n];
}
console.log(fibTabulation(15));
// teacher's solution was the same as the above function 

// even simpler tabulation  virsion 
function simpleFibTab(n) {

  let arrOfFib = new Array(n + 1).fill(0);
  
  for(let i = 0; i < arrOfFib.length; i++) {
    if(i === 0) {
      arrOfFib[i] = 0;
      continue;
    } else if(i === 1) {
      arrOfFib[i] = 1;
      continue;
    }
    
    arrOfFib[i] = arrOfFib[i - 1] + arrOfFib[i - 2];
  }

  return arrOfFib[n];
}
console.log(simpleFibTab(15));
