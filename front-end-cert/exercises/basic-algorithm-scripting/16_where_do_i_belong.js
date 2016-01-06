function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b){
    return a - b;
  });  //First, sort the array
  
  if(arr[0] >= num)
    return 0;
  
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < num && num <= arr[i+1] ) {
      return i + 1;
    }
  }
  
  return arr.length;
}

where([5, 3, 20, 3], 5);
