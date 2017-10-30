function maxElement(arr){
  var max = 0;
  for(var i = 0; i < arr.length; i++){
    max < arr[i] ? max = arr[i] : '';
  }
  console.log(max);
}

maxElement([1, 2, 3, 4]);