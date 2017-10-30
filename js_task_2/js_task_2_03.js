function numbersClassification(arr){
  var zeroCount = 0,
    evenCount = 0,
    oddCount = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      if(arr[i] === 0){
        zeroCount++;
      } else if (arr[i] % 2 === 0){
        evenCount++;
      } else if (arr[i] % 2 === 1){
        oddCount++;
      }
    }
  }
  evenCount !== 0 ? console.log('even numbers: ' + evenCount) : '';
  oddCount !== 0 ? console.log('odd numbers: ' + oddCount) : '';
  zeroCount !== 0 ? console.log('zero: ' + zeroCount) : '';
}

numbersClassification([0, 1, 2, 3, 4]);