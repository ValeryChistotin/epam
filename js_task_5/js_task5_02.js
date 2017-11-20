function arrayToList(arr){
  var obj = null;
  arr.reverse().forEach(function(item){
    obj = {value: item, rest: obj}
  })
  return obj;
}


function listToArray(list){
  var arr = [];
  for(var node = list; node; node = node.rest){
    arr.push(node.value)
  }
  return arr;
}

function prepend(value, rest){
  return {value: value, rest: rest}
}

function nth(list, pos){
  if(!list) return undefined
  else if(pos === 0) return list.value
  else return nth(list.rest, pos - 1)
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));