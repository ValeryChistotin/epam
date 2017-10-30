function camelCaseNotation(str){
  for(var i = 0; i < str.length; i++){
    i === 0 ? str = str[i].toLowerCase() + str.slice(1) : '';
    str[i] === ' ' ? str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2) : '';
  }
  return str;
}

console.log(camelCaseNotation('User Object'));