function deepClone(obj){
  var copiedObj = {};
  for(var key in obj){
    if(typeof obj[key] === 'object'){
      copiedObj[key] = deepClone(obj[key]);
    } else {
      copiedObj[key] = obj[key];
    }
  }
  return copiedObj;
}

var obj = {a:1,b:{c:0},e:{f:{g:1 }}};
var copyObj = deepClone(obj);
console.log(obj.a === copyObj.a);
console.log(obj.b === copyObj.b);
console.log(obj.e === copyObj.e);
console.log(obj.e.f === copyObj.e.f);
