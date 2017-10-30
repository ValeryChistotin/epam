function textCapitalize(str){
  for(var i = 0; i < str.length; i++){
    i === 0 ? str = str[i].toUpperCase() + str.slice(1) : '';
    str[i] === ' ' ? str = str.slice(0, i + 1) + str[i + 1].toUpperCase() + str.slice(i + 2) : '';
  }
  return str;
}

console.log(textCapitalize('web is awesome'));