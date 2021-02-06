//  your attampt to code
// function CountWays(width, height) {

//   totalSteps = width + height;
  
//    const NumOfWays = Math.ceil(factorial(totalSteps) / (factorial(width) * factorial(height)));
//    return NumOfWays;
// }

// function factorial(n, memo = {}) {
// let result = 1;
// for(i = 1; i <= n; i++) {
// result = i * result; 
// }

// return result;

// }


// your attampt after watching the solution
// teacher's solution 
// again it's neat solution because you did not have to come up with a formula

function countWaysT(width, height, memo = {}) {

const key = width + " " + height;

if( key in memo) {
  return memo[key];
}

if( width === 1 || height === 1) {
  return 1;
}

memo[key] = countWaysT(width-1, height, memo) + countWaysT(width, height-1, memo);

return memo[key];
}

function countWaysT2(width, height, memo = {}) {

  const key = width + " " + height;
  const reverceKey = height + " " + width;

  if( key in memo) {
    return memo[key];
  }
  if( reverceKey in memo) {
    return memo[reverceKey];
  }
  
  if( width === 1 || height === 1) {
    return 1;
  }
  
  memo[key] = countWaysT2(width-1, height, memo) + countWaysT2(width, height-1, memo);
  memo[reverceKey] = memo[key];

  // doesn't matter if you return key or reverce key the value will be the same
  return memo[key];
  }

// the reverce optimization is slightly faster 

  //   const  start1 = Date.now();
  // console.log(countWaysT(13, 11));
  //   const end1  = Date.now();
  //   console.log((end1 - start1)/ 1000);

    //   const  start = Date.now();
    // console.log(countWaysT2(150, 150));
    //   const end = Date.now();
    //   console.log((end - start)/ 1000);

// letiral code from the video with the diffrent name
function temp(m, n, memo = {}) {
  const key = m + ',' + n;
  if(key in memo) return memo[key];
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;
  memo[key] = temp(m-1,n, memo) + temp(m, n-1, memo);
  return memo[key];
}

//  something is fishy..!!
const w = 18;
const h = 18;
console.log(temp(w, h));
// console.log(countWaysT(w, h)); 
// console.log(CountWays(w - 1, h - 1));