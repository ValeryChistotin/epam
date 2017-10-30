function trim(str){
  console.log(str.length);
  if(str[0] === ' ' && str[str.length - 1] === ' '){
    str = str.slice(1, str.length - 1);
  } else if(str[0] === ' '){
    str = str.slice(1);
  } else if(str[str.length - 1] === ' '){
    str = str.slice(0, str.length - 1);
  } else return str;
  console.log(str.length);
  return str;
}

console.log(trim('abc '));