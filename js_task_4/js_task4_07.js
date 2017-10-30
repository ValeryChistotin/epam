function additionalWord(str, pos, word){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    str[i] === ' ' ? count++ : '';
    if(count === pos + 1){
      return str = str.slice(0, i + 1) + word + str.slice(i);
    }
  }
  return str;
}

console.log(additionalWord('Web Is Awesome', 1, 'Super'));