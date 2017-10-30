function reverseString(str){
  var reverseStr = '';
  for(var i = str.length; i--;){
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverseString('abc'));