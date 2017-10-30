function checkProperty(str, obj){
  if(str in obj) 
    return true;
  return false;
}

var person = {
  name: 'John',
  surname: 'Doe',
  age: 27
}

console.log(checkProperty('age', person));