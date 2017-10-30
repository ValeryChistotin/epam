function cutLetters(str, n){
  if(n <= 3)
    return '...';
  else if(n > str.length + 3)
    return str;

  while(str.length !== n - 3)
    str = str.slice(0, str.length - 1);
  return str + '...';
}

console.log(cutLetters('abcdefg', 5));