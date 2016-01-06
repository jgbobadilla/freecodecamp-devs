function findLongestWord(str) {
  
  //Convert into array
  var strArr = str.split(/\s/g);
  
  return strArr.reduce(function(record, word){
    console.log(record + ", WL: " + word.length + ", word: " + word);
    return record > word.length ? record : word.length;
  }, 0);
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
