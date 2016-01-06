function palindrome(str) {

  //Pruning phase
  str = str.replace(/[^a-z|0-9]/gi, "");
  str = str.toLowerCase();
  
  //Transform into array
  var strArr = str.split("");
  
  //Compare and give answer
  return str === strArr.reverse().join("");
}

palindrome("eye");
