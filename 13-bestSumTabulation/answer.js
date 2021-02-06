// your attampt
function BestSumTab(targetSum, arrOfNum) {

  const SumCombinationArr = Array(targetSum + 1).fill(null);
  SumCombinationArr[0] = [];

  // storing all possible ways we can get the sum
  let possiblaCombination = [];
for(let i = 0; i < SumCombinationArr.length; i++) {
  if(SumCombinationArr[i] !== null) {
    for(let j = 0; j < arrOfNum.length; j++) {
      if(SumCombinationArr[i+arrOfNum[j]] !== undefined) {
        // check for the currunt arrays length and then the next arrays lentgth whichever is shorter keep that

        // if its the first time you are making an sub array then the value will be null so
        if(SumCombinationArr[i+arrOfNum[j]] === null) {
          SumCombinationArr[i+arrOfNum[j]] = SumCombinationArr[i].slice(0);
                  SumCombinationArr[i+arrOfNum[j]].push(arrOfNum[j]);
        }else if(SumCombinationArr[i+arrOfNum[j]].length > SumCombinationArr[i].slice(0)) {
          SumCombinationArr[i+arrOfNum[j]] = SumCombinationArr[i].slice(0);
                  SumCombinationArr[i+arrOfNum[j]].push(arrOfNum[j]);
        }
      }
    }
  }
}
 
  return SumCombinationArr[SumCombinationArr.length - 1]; 
}

console.log(BestSumTab(20, [10, 7, 3, 4, 5])); 
// [[] [1], [1, 1], [3], [4], [4, 1], [3, 3], [4, 3] ,[4, 4]];   
// [[], [1], null, [3], [4]] [2,3]