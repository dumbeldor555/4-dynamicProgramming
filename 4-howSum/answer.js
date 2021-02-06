// my attampt 
const possibleCom = [];
let count = 0;
function HowSum(targetSum, arryOfInt, memo ={}, possibleNum = 0) {
 count++;
  possibleCom.push(possibleNum);
  if( targetSum < 0) {
    possibleCom.pop();
    return false;
  }
  if( targetSum === 0) {
    return true;
  }

  if(targetSum in memo) {
    return memo[targetSum];
  } else {
  for(let i = 0; i < arryOfInt.length; i++) {
    if(HowSum(targetSum - arryOfInt[i], arryOfInt, memo, arryOfInt[i])) {

      memo[targetSum] = true;
      return possibleCom;
    }
  }
  }

  memo[targetSum] =false;
  return null;
}

// const possibleOut = HowSum(379, [2,2,2]);
// let total = 0;
// for (let i = 0; i < possibleOut.length; i++) {
//  total += possibleCom[i];
// }
// // checking the result
// console.log(total);
// const start = Date.now();
console.log(HowSum(16, [1, 2, 3, 4]));
// const end = Date.now();
// console.log((end - start)/1000);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// teacher's solution 
// you did not pay attention to teacher's solution because you figered it out it was correct infact your execution 
// time is faster then teacher's code 
const HowSumT = (targetSum, numbers, memo = {}) => {

if(targetSum in memo) return memo[targetSum];
if(targetSum === 0) return [];
if(targetSum < 0) return null;

for(let num of numbers) {
  const remainder = targetSum - num;
  const remainderResult = HowSumT(remainder, numbers, memo);
  if(remainderResult !== null) {
    memo[targetSum] = [...remainderResult, num];
    return memo[targetSum];
  }
}

memo[targetSum] = null;
return null;
}
// const startT = Date.now();
console.log(HowSumT(2234, [1, 2]));
// const endT = Date.now();
// console.log((endT - startT)/1000);