function findSubStr(str, word){
  return ~str.indexOf(word) ? true : false;
}

console.log(findSubStr('i love cats', 'cats'));