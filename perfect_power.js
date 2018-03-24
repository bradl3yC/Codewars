var isPP = function(n){
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < n; j++) {
      if(Math.pow(i, j) === n) {
        return [i,j];
      }
    }
  }
  return null
}