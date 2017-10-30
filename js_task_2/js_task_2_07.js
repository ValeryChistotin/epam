function convertArr(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number') newArr.push(arr[i])
    else if(typeof arr[i] === 'string') newArr.push(Number(arr[i]));
  }
  console.log(newArr);
}

convertArr([1, 2, '3', '10']);