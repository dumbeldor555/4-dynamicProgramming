// your attampt after watching the tabulation video
// have to say that tabulation methode is very neat 
// this tabulation method almost seems like megic very neat solution whoever came up with that
function countWayTab(width, height) {

  // const widthOfArry = Array(width + 1).fill(0);
  // const _2dArry = [];
  // for(let i = 0; i < (height + 1); i++) {
  //  _2dArry[i] = widthOfArry;
  // }
  const _2dArry = [];
  for(let i = 0; i < height+1; i++){
    _2dArry.push(Array(width+1));
    for(let j = 0; j < width+1; j++) {
      if(i===1 && j===1) {
        _2dArry[i][j] = 1;
        continue;
      }
      _2dArry[i][j] = 0;
    }
  }
    
  for(let i = 0; i < _2dArry.length; i++) {
   for(let j = 0; j < _2dArry[i].length; j++) {
     if(_2dArry[i][j + 1] !== undefined)  _2dArry[i][j + 1] += _2dArry[i][j];
     if(_2dArry[i + 1] !== undefined) _2dArry[i + 1][j] += _2dArry[i][j];
   }
  }

  return _2dArry[height][width];
}

console.log(countWayTab(18, 18));
