function chunk(arr, size) {
  var newArr = [];
  
  // Break it up.
  /*for(var i = 0, j = 0; i < arr.length; i += size, j++) {
    newArr[j] = arr.slice(i, i + size);
  }*/

  for(var i = 0; i < arr.length; i += size) {
    newArr.push( arr.slice(i, i + size) );
  }

  
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);
