// const canSum = (sum, ArryOfNum) => {

//   if(MakeArryTotal(ArryOfNum) < sum) {
//     return false
//   } else {
//      let count = 0;



//      for(let j = 0; j < ArryOfNum.length; j++) {
//        let p = j;
//         for(let k = ++p; k < ArryOfNum.length; k++) {
//           let r = k;
//           for(let h = ++r; h < ArryOfNum.length; h++) {
//            count++;
//            let total =  doTotal(ArryOfNum[j], ArryOfNum[k], ArryOfNum[h]);
//            console.log(total, sum);
//             if(total === sum) {
//               console.log(count);
//               return true;
//             }
//           }
//         }
//       }
//       // finally return false it is not possible to add the numbers and get the exect sum
//       return false;
// }
// }
// const doTotal = (x,y,z) => {
//   console.log(x,y,z);
//   return x + y + z;
// }
// function MakeArryTotal(ar) {
//   let total = 0; 
  
//   for(let i = 0; i < ar.length; i++) {
//    total += ar[i];
//   }
//   return total;
// }

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // arry of numbers
// let arry = [];
// for(i = 1; i < 100; i++) {
//   arry.push(i)
// }
// console.log(canSum(45, [3,1,5,7,9,10,13,17,23,]));


//  you found out from the video that you can use an argument from an array as many time as you need
// you did not even consider this solution you need to learn some more stuff bitch

let count = 0;
function canSum(sum, arryOfNum, memo = {}) {
count++;
if(!(sum in memo)) {
  if(sum < 0) {
    return false;
  }
  if(sum === 0) {
    return true;
  } else {
    for(let i = 0; i<arryOfNum.length; i++) {
      if(canSum(sum - arryOfNum[i], arryOfNum, memo)){
        memo[sum] = true;
        return true;
      };
    }
  } 
} else {
  return memo[sum];
}

  // finally return false because there's no way
  memo[sum] = false;
  return false;
}

// litral code from teacher
let countT = 0;
const canSumT = (targetSum, numbers, memo={}) => {
  countT++;
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;

  for(let num of numbers) {
    const remainder = targetSum - num;
    if(canSumT(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
}

console.log('from teacher');
console.log(canSumT(1793, [3,2,4]), countT);
console.log('your attempt');
console.log(canSum(1793, [3,2,4]), count);
