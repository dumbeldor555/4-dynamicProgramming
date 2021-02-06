// your attempt 
// your algorithem was correct after watching so many previvouse solution you got the algorithem without 
// watching the solution but it took some time to implement it into code because the peculier nature of javascript
function allConstruct(targetString, arrOfWord) {

  const targetStringArr = new Array(targetString.length + 1).fill().map(() => []);
  // seeding the value
  targetStringArr[0] = [[]];

  for(let i = 0; i < targetStringArr.length; i++) {
    
    if(targetStringArr[i] !== []) {
      const remainingStr = targetString.slice(i);
      for(let j = 0; j < arrOfWord.length; j++) {
        if(remainingStr.indexOf(arrOfWord[j]) === 0) {
        const tempArr = targetStringArr[i].map(subArr => [ ...subArr, arrOfWord[j]]);
        targetStringArr[i + arrOfWord[j].length].push(...tempArr); 
        }
      }
    }
  }

return targetStringArr[targetStringArr.length - 1];
}

console.log(allConstruct('abcdef', ['ab', 'abc','a','cd','ef','d'])) // ab cd ef, abc d ef

// [ [[]], [['a']], [['ab']], [['abc']], [['ab','cd'],['abc','d']], [], [['ab','cd','ef'],['abc','d','ef']]];
//  [[['ab']]]