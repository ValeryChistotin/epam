function iterating(arr){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    count++
  }
  console.log('total elements: ' + count);
}

iterating([1, 2, 3]);