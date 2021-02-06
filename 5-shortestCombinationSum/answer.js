// my attempt 
let PossibleCombo = [];
function ShortestCombo(targetSum, ArrayOfInt, memo = {}, PossibleNum = 0) {
  
  PossibleCombo.push(PossibleNum);
  if(targetSum in memo) {
    return memo[targetSum];
  }
  if(targetSum === 0) {
    memo[targetSum] = true;
    return true;
  } 
  if(targetSum < 0) {
    memo[targetSum] = false
    PossibleCombo.pop();
    return false;
  }


  for(let i = (ArrayOfInt.length - 1); i > -1; i--){
    if(ShortestCombo(targetSum - ArrayOfInt[i], ArrayOfInt, memo, ArrayOfInt[i])) {  // start reading the funcitn from here
      return PossibleCombo;
    }
  }
  
  memo[targetSum] = false;
  return null;
}

function ShortestCombo2(targetSum, ArrayOfInt) {

  // sort the array in accending order first
  ArrayOfInt = ArrayOfInt.sort((a, b) => {  
    return a - b  // i have no clue how this inner funcitn works inside sort funciton but it sorts the array correctly
  });
  // console.log(ArrayOfInt);
const ShortestArray = ShortestCombo(targetSum, ArrayOfInt, memo = {}, possibleNum = 0)
return ShortestArray;
}

// calling your funciton and masuring time complexity
const start = Date.now();
const ShortCombo = ShortestCombo2(319,[4,2,5,3,100]);
console.log(ShortCombo);
const end = Date.now();
console.log((end - start)/1000);

// makeing sure of the total
let total = 0;
for(let i = 0; i < ShortCombo.length; i++) {
  total += ShortCombo[i];
}
console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// teacher's solution
// be careful in teacher's solution we're not reaturning as soon as we hit the base condition 0 
// we're checking all the combination that might satisfy the sum and and storing that combinaiton in the shortestCombiantion
// variable and making sure that we only get the shortest combination possible
const ShortestComboT = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return [];
  if(targetSum < 0) return null;

  let shortestCombination = null;
  for(let num of numbers) {
   const remainder = targetSum - num;
   const remainderCombination = ShortestComboT(remainder, numbers, memo);
   if(remainderCombination !== null) {
     const combination = [...remainderCombination, num];
     if(shortestCombination === null || combination.length < shortestCombination.length) {
       shortestCombination = combination;
     }
   }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

// calling teacher's funciton and measuring time complexity 
const startT = Date.now();
const shortComboT = ShortestComboT(319,[4,2,5,3,100]);
console.log(shortComboT);
const endT = Date.now();
console.log((endT - startT)/1000);

//  makeing sure of the total
let total1 = 0;
for(let i = 0; i < shortComboT.length; i++) {
total1 += shortComboT[i];
}
console.log(total1);