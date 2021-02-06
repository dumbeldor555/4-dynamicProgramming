const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// your attampt

function CanMakeTheWord(targetsWord, arrOfLetters) {

  console.log(targetsWord,arrOfLetters);
  let checker;
  for(let i = 0; i < targetsWord.length; i++) {
    for(let j = 0; j < arrOfLetters.length; j++){
      if(targetsWord[i] === arrOfLetters[j]) {
        checker = true;
        break;
      } else {
        checker = false;
      }
    }
   if(checker === false) {
     return false;
   }
  }

  return checker;
}

// let LetterArray = [];
// for(let i = 0; i < 100; i++) {
// let randomIndex = Math.random();
// randomIndex = Math.ceil((randomIndex*(alphabets.length - 1)));
// console.log(randomIndex);
// LetterArray[i] = alphabets[randomIndex];
// }

// const start = Date.now();
// // function is case sensitive find  out wherter it shour be non case sensitive
// console.log(CanMakeTheWord('helloworld', LetterArray));
// const end = Date.now();
// console.log((end-start)/1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//after watching teacher's solution
let counter = 0;
function CanConstructT(targetString, arrOfWords, memo = {}) {
  // console.log(counter);
  // counter++;
  if(targetString in memo) return memo[targetString];
  // console.log(targetString);
  if(targetString == '') {
    // console.log('yes this is happanning');
    return true;
  }

for(let i = 0; i < arrOfWords.length; i++) {
    //  you were not thinking about this outerMost if statement when writing your own code 
    // your were trying to apply the same code as from the previouse question 
    // although the problem is similler the code must be written with some logic in mind
    // tip: try to phrase what you wanna do in santence by santence and then transform those santences in 
    // code one by one don't try to apply the same code structure everyWhere it's litrelly copying, your goal is to learn
    if(targetString.indexOf(arrOfWords[i]) === 0) {
      const suffix = targetString.slice(arrOfWords[i].length);
      memo[targetString] = true;
      if(CanConstructT(suffix, arrOfWords, memo)) {
        return true;
      }
    } 
}
// no the string cannot be constructed
memo[targetString] = false;
  return false;
}


console.log(CanConstructT('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
 ['e','eee','eeee','eeeee','eeeeee','eeeeeee','eeeeeeee',]));

// console.log(CanConstructT('hello', ['he','o','lll']));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// after you found out that there will be words and letters in the array ,not the single letters
// let count = 0;
// let CapturedString;
// function CanMakeTheWord2(targetString, arryOfWords) {


//   if(count === 0) {
//     CapturedString = targetString; 
//   }
  

//   // not success also the base case of recursion

//   const lenOfElemntWord = targetString.length;
   
//   // slicing the orignal array and compering it with the element of the arryOfWords
//  const slicedString = CapturedString.slice(0, lenOfElemntWord);
//  if(count !== 0) {
//   if(targetString === slicedString) {
//     console.log('running');
//     CapturedString = CapturedString.slice(lenOfElemntWord);
//     return true;
//   }
//      // base case for returning the false value 
//   if(count !== 0 && targetString !== slicedString) {
//     console.log('running');
//     return false;
//   }
//  }
// // this variable is just a heck to get around calling the funciton the first time
//   count++;
//   for(let i = 0; i < arryOfWords.length; i++) {
//    if(CanMakeTheWord2(arryOfWords[i], arryOfWords)) {
//   // success the base case of recursion
//   if(CapturedString.length === 0) {
//     // yes it is possible to get the string
//     return true;
//   }
//    }
//   }
// }

// console.log(CanMakeTheWord2('hello',['he','o', 'll']));


