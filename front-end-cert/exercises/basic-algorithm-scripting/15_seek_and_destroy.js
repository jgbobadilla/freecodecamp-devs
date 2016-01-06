function destroyer(arr) {
  
  // Remove all the values
  if (arguments.length > 1) {
    for(var i = 1; i < arguments.length; i++){
      var toDel = arguments[i];
      
      arr = arr.filter(function(val){
        return val !== toDel;
      });
      
      console.log(arr);
    }
  }
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
