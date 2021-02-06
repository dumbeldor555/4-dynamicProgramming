// your attempt 
function countConstructString(targetString, arrOfWord) {

const targetStringArr = Array(targetString.length + 1).fill(0);
targetStringArr[0] = 1;

for(let i = 0; i < targetStringArr.length; i++) {
  if(targetStringArr[i] !== 0) {
    const reaminingStr = targetString.slice(i);
    for(let j = 0; j < arrOfWord.length; j++) {
      if(reaminingStr.indexOf(arrOfWord[j]) === 0) {
        if(targetStringArr[i + arrOfWord[j].length] !== undefined) {
          targetStringArr[i + arrOfWord[j].length] += targetStringArr[i];
        }
      } 
    }  
  }
}

// return targetStringArr;
return targetStringArr[targetStringArr.length - 1];
}
// for understanding 
// ('abcdef', ['abc','abcd','do','ef','de','f','a','bc']);
//                        c
//           [1, 1, 0, 2, 1, 2, 0] 7
//            a  b  c  d  e  f  

// console.log(countConstructString('abcdef', ['abc','abcd','do','ef','de','f']));
// console.log(countConstructString('abcdef', ['abc','abcd','do','ef','de','f', 'abcdef']));
// console.log(countConstructString('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(countConstructString('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(countConstructString('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(countConstructString('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(countConstructString('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
// ['e',
// 'eeeee',
// 'eeeeeee',
// 'eeeeeeeeeeeeee',
// 'eeeeeeeeeeeeeeeeee',
// 'eeeeeeeeeeeeeeeeeeeeeeee']));

// for understanding 
// ('abcdef', ['abc','abcd','do','ef','de','f']);
//                        c
//           [1, 0, 0, 1, 1, 1, 2] 7
//            a  b  c  d  e  f  
// ('abcdef', ['abc','abcd','do','ef','de','f', 'abcdef']);
//            c            
//           [1, 0, 0, 1, 1, 1, 3]
//            a  b  c  d  e  f 