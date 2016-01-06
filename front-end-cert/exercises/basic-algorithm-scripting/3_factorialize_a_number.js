function factorialize(num) {
  var a = [];
  
  if(num === 0) return 1;
  
  for (var i = 1; i <= num; i++ ){
    a.push(i);
  }
  
  return a.reduce(function(cummulator, curValue){
    return cummulator * curValue;
  });
}

factorialize(5);
