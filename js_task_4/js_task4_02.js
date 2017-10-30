function firstLetterCapitalize(str){
  var transformedStr = str.charAt(0).toUpperCase() + str.slice(1);
  return transformedStr;
}

console.log(firstLetterCapitalize('abc'));