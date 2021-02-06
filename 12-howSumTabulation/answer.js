// your attempt before watching the solution 
// try some combinotorics tricks
// code is complicated and not working as intended checkout this example with the code you'll get it
//canSumTab(13,[ 2, 2, 2, 3, 2 ,7]);
// the algorithem is not correct anyway good try.
// ********************* however it will work if you need a target sum and each number of the array cannot be used multiple time*************

// checks if the the obtains sum is factor of targets sum if it is then it returns true otherwise false
function isFactorOf(obtainSum, targetsSum) {
  console.log(obtainSum);
  let total = 0;
  for(let i = 0; i < obtainSum.length; i++) {
    total += obtainSum[i];
  }

  if(targetsSum === total)  {
    return true
  }else {
    return false;
  }
}


function canSumTab(targetSum, arrOfNum) {
// checking all the element at once
  // if(isFactorOf(arrOfNum, targetSum)) {
  //   return true
  // }
// checking all the element one by one
for(let i = 0; i < arrOfNum.length; i++) {
  if(isFactorOf(arrOfNum[i], targetSum)) {
    return true;
  }
}
// from here we will check element dynamically starting with length of 2 and untill length-1 
  numCombo = []; 
  // [1 2 3 5 2 4 55 3] this is the array i will use to explain the code 
  // the i is responsible for how many elements are we taking  0 means we are taking 2 elements 1 means we are taking 3 elements and so on
  // when i is 0 [1 2] [1 3] [1 5] etc... when i is 1 [1 2 3] [1 3 5] [1 5 2] etc...
  for(let i = 0; i <= arrOfNum.length - 2; i++) {
    // let i = 2;  
    // k is responsible for holding down one value and then j will itrate over the entire array like if k = 0 then the output will look like this
    // 1 2, 1 3, 1 5, 1 2 and so on when k = 1 the out put will look like this
    // 2 3, 2 5, 2 2, 2 4 and so on 
    for(let k = 0; k < arrOfNum.length; k++) {
      // and finally the j is responsible for itarteting over the entiar remaining array like so
      // 1 2, 1 3, 1 5, this changing second position number is due to the j vairable
      for(let j = 0; j < arrOfNum.length - k; j++) {
          if(arrOfNum[j + (k + (i + 1))] !== undefined) {
          // for loop that adds element to numComboArry dynamically
          // the crux of the code is this for loop
          for(let p = 0; p < i + 2; p++) {
            if(p === 0) {
              numCombo[p] = arrOfNum[k];
              continue;
            } else {
              numCombo[p] = arrOfNum[j + (k + p)];
            }
          }
          // now check if the sum can be obtain 
          const result = isFactorOf(numCombo, targetSum);
          if(result) {
            return true;
          }
          } else {
            continue;
          }
      }
    }
    }   

// finally return false the sum can't be obtain
return false;
}



// console.log(canSumTab(13,[ 3, 4, 7]));
// make a variable that keeps the count of how many element do you need

// this is after watcing teacher's solution 
// very elegant and neat i have to say so simple 
// 10 [ 2 5 ];
function howSumTeachers(targetSum, numArry) {

  const targetSumArr = Array(targetSum + 1).fill(null);
  targetSumArr[0] = [];

  // making the value of the targetSumArr true if that exists in numArr
  for(let i = 1; i <= targetSumArr.length; i++) {
   for(let j = 0; j < numArry.length; j++) {
     if(numArry[j] === i) {
       targetSumArr[i] = [i]; 
       break; 
     } 
   }
  }

  for(let i = 0; i < targetSumArr.length; i++) {
    if(targetSumArr[i] !== null) {
      for(let j = 0; j < numArry.length; j++) {
        if(targetSumArr[i + numArry[j]] !== undefined) {
          // copying the array and then pushing new item into the new array
          targetSumArr[i + numArry[j]] = targetSumArr[i].slice(0);
          targetSumArr[i + numArry[j]].push(numArry[j]); 
          
        }
      }
    }   
  } 

  return targetSumArr;
  // return targetSumArr[targetSumArr.length - 1];
}
// [0 1 [2] [3] 4 5 6 ];
// [[] null null null null null null]
console.log(howSumTeachers(7, [1,3,4])); 