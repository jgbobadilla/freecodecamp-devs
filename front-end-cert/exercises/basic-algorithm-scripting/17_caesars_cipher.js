function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  var disc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var discArr = disc.split("");
  var decodeDiscArr = [];
  var idx = 0;
  
  for(var j = 0; j < discArr.length; j++) {
    decodeDiscArr.push( discArr[(j + 13) % discArr.length] );
  }
  
  for(var i = 0; i < codeArr.length; i++){
    idx = decodeDiscArr.indexOf(codeArr[i]);
    console.log(idx);
    
    decodedArr.push(idx >= 0 ? discArr[idx] : codeArr[i]);
  }
  
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
