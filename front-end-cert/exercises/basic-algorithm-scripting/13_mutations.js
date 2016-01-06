function mutation(arr) {
  var contains = true;
  
  for (var w = 0; w < arr.length; w++){
    arr[w] = arr[w].toLowerCase();
  }

  for(var i = 0; i < arr[1].length; i++){
    contains = contains && ( arr[0].indexOf(arr[1][i]) !== -1 );
  }
  
  return contains;
}

mutation(["hello", "hey"]);
