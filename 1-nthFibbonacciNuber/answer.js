 // my solution (avoiding recursion)
function fibbonacci(n) {

  n = n - 2;
  if(n <= 0){
    return 1
  } else {
  let curruntN = 1; 
  let previousN = 1; 
  let resultN;

  for (i = 0; i < n; i++) {
    resultN = curruntN + previousN;
    previousN = resultN - previousN;
    curruntN = resultN
  }
   return resultN;
  }
}


// teacher's solution with memoization
//  i have to say the solution is very neat. good job you understood the code before teacher even explaind it but
// good job
function fibbonacciMemo(n, memo = {}) {
  if(n in memo) {
    return memo[n];
  } 

   if(n <= 2) {
     return 1;
   }
  memo[n] =  fibbonacciMemo(n-1, memo) + fibbonacciMemo(n-2, memo);  
  return memo[n];
}

console.log(fibbonacciMemo(50));

// 1 1 2 3 5 8 13 21 34 55 89 144 