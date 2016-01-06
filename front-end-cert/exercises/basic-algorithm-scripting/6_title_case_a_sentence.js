function titleCase(str) {
  str = str.toLowerCase();  //Clean the sentence
  
  var strArr = str.split(/\s/gi);  //Split using spaces
  
  //Process each word and return as a single sentence
  strArr = strArr.map(function(word){
    w = word.replace(word[0], word[0].toUpperCase());  //Change first letter
    return w;
  });
  
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");
