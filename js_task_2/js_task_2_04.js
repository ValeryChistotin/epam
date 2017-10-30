function identical(arr){
  for(var i = 0; i < arr.length - 1; i++){
    if(arr[i] !== arr[i + 1]){
      console.log('false');
      return;
    }
  }
  console.log('true');
  return;
}

identical([1, 2, 3]);