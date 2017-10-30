function copyObject(obj){
  var copiedObj = {};
  for(var key in obj){
    copiedObj[key] = obj[key];
  }
  return copiedObj;
}

var obj = {
  name: 'ObjectToCopy',
  mutable: true
}

console.log(copyObject(obj));