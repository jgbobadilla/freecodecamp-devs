function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    
    if (num <= 3) {
      str = str.slice(0, num);
    } else {
      str = str.slice(0, num - 3);
    } 
    
    str += "...";
  }
  
  return str;
}

truncate("A-", 1);
