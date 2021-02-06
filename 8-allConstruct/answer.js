// your attampt
const allCombination = [];
const runnigWord = [];
function allConstruct(targetString, wordBank, splicedWord = '') {

if(splicedWord !== '') runnigWord.push(splicedWord);
if(targetString === '') {
  return true;
} 

for(let word of wordBank) {
  if(targetString.indexOf(word) === 0) {
    const prefix = word;
    const suffix = targetString.slice(word.length);
    // console.log(word, prefix, suffix); 
    if(allConstruct(suffix, wordBank, prefix)) {
      allCombination.push(runnigWord);
    }
  }
}

return runnigWord.pop();
}
// above function is rubbish it does not return intended output..! don't think too much about it
// allConstruct('ABCDEFG',['A','B','C','D','E','F','G','AB','ABC','CE','DB','EFG']);
// console.log(allCombination);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// teacher's solution start below
// understand the spread opreter properly
// you did not think of this solution but after watching the solution you sure did optimized it by memoization
function allConstructT(targetString, wordBank, memo = {}) {

if(targetString in memo) return memo[targetString];
if(targetString === '') return [[]];
 
const result = [];
for(let word of wordBank) {
  if(targetString.indexOf(word) === 0) {
    const suffix = targetString.slice(word.length);
    const combination = allConstructT(suffix, wordBank, memo);
    const allCombination = combination.map(way => [word , ...way]);
    memo[suffix] = combination;
    // console.log(allCombination);
    result.push(...allCombination);
  }
}

return result;
}

// allConstructT('ABCDEFG',['A','B','C','D','E','F','G','AB','ABC','CE','DB','EFG']);
// console.log(allConstructT('ABCDEFG',['A','B','C','D','E','F','G','AB','ABC','CE','DB','EFG']));
// console.log(allConstructT('purple', ['purp','p','ur','le','purpl']));
// console.log(allConstructT('abcdef', ['ab','abc','cd','def','abcd','ef','c']));
// console.log(allConstructT('skateboard', ['bo','rd','ate','t','ska','sk','boar']));
// console.log(allConstructT('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz',
// [
//   'a',
//   'aa',
//   'aaa',
//   'aaaa',
//   'aaaaa',
//   'aaaaaa',
//   'aaaaaaa',
//   'aaaaaaaa',
// ]
// ));