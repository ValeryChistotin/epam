function encountersNumber(str){
  var arr = str.split(''),
    obj = {};
  for(var i = 0; i < arr.length; i++){
    var pos = -1,
      count = 0,
      target = arr[i];
    while(~(pos = str.indexOf(target, pos + 1))){
      count++;
      obj[target] = target;
      obj[target] = count;
    }
  }
  return obj;
};

console.log(encountersNumber('abbac'));