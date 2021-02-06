// your attampt 

function canConstructTab(targetString, arrOfWords) {

const targetStringArr = Array(targetString.length + 1).fill(false);
// seeding the base value
targetStringArr[0] = true;

for(let i = 0; i < targetStringArr.length; i++) {
  if(targetStringArr[i] === true) {
    const remainingString = targetString.slice(i);
    for(let j = 0; j < arrOfWords.length; j++) {
      if(remainingString.indexOf(arrOfWords[j]) === 0) {
        if(targetStringArr[i + arrOfWords[j].length] !== undefined) {
          targetStringArr[i + arrOfWords[j].length] = true;
        } 
      }
    }    
  }
}

return targetStringArr[targetStringArr.length - 1];
}


// console.log(canConstructTab('abcdef', ['ab', 'abc', 'de', 'ef', 'de', 'fe']));
// console.log(canConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstructTab('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstructTab('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(canConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', 
// ['e', 
// 'eeeee', 
// 'eeeeeee',
// 'eeeeeeeeeeeeee', 
// 'eeeeeeeeeeeeeeeeee', 
// 'eeeeeeeeeeeeeeeeeeeeeeee']));
   
// for understanding
// [abcdef, [ab, abc, de, ef, de, f]];  
//        0      1      2      3     4    5      6
//      [true, false, ture, ture, false, true, true] 
//         a     b      c     d      e    f      ''