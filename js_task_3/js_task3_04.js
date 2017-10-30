function checkAndAddProperty(prop, obj){
  var modifiedObj = {};
  for(var key in obj){
    modifiedObj[key] = obj[key];
  }
  if(!(prop in obj)){
    modifiedObj[prop] = 'new';
    return modifiedObj;
  } else return obj;
}

var worker = {
  name: 'Peter',
  surname: 'Green'
}

console.log(checkAndAddProperty('age', worker));