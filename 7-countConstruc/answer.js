// your attempt 
function countConstruct(targetString, arrOfWords, memo = {}) {

if(targetString in memo) return 1;
if(targetString === '') return 1;
 
  // the total variable will be unchend when we make the recursice call to the same funciton however 
  // for the origenal call of the function the total variable will update accordingly 
  // the resone is: every tiem we make a recursive call the total variablel will be re-declared but for the outer 
  // most function it will remain the same variable 
  let total = 0;
  for(let i = 0; i < arrOfWords.length; i++) {
    if(targetString.indexOf(arrOfWords[i]) === 0) {
      const suffix = targetString.slice(arrOfWords[i].length);
      const numOfWays = countConstruct(suffix, arrOfWords, memo);
      total += numOfWays;
    }
  }

  // it took you quite a while to understand below line of code not the return stament
  memo[targetString] = numOfWays;
  return total;
}

// console.log(countConstruct('abcd', ['a','b','c','ab','bc','abc','d','cd']));
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
// ['e','ee','eee','eeee','eeeee','eeeeee','eeeeeee','eeeeeeee','eeeeeeeee','eeeeeeeeee']));
// teacher's solution
function countConstructT(targetString, arrOfWords, memo = {}) {

  if(targetString in memo) return memo[targetString];


  if(targetString === '') return 1;
   
    // the total variable will be unchend when we make the recursice call to the same funciton however 
    // for the origenal call of the function the total variable will update accordingly 
    // the resone is: every tiem we make a recursive call the total variablel will be re-declared but for the outer 
    // most function it will remain the same variable 
    let total = 0;
    for(let i = 0; i < arrOfWords.length; i++) {
      if(targetString.indexOf(arrOfWords[i]) === 0) {
        const suffix = targetString.slice(arrOfWords[i].length);
        const numOfWays = countConstructT(suffix, arrOfWords, memo);
        total += numOfWays;
      }
    }
  
    memo[targetString] = total;
    return total;
  }
// ABCDEFG   A B C D E F G AB AC BC EF 
console.log(countConstructT('ABCDEFG',['A','B','C','D','E','F','G','AB','AC','BC','EF','EFG']));
  //  console.log(countConstructT('abc',['a','b','c','ab']));
  // consolelog(countConstructT('abcd', ['a','b','c','ab','bc','abc','d','cd']));
//   console.log(countConstructT('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
// ['e','ee','eee','eeee','eeeee','eeeeee','eeeeeee','eeeeeeee','eeeeeeeee','eeeeeeeeee']));
