function simpleNumber(number){
  var correct;
  number > 1000 || typeof number !== 'number' || number < 2 ? correct = false : correct = true;
  if(correct){
    if(number % 2 === 0 && number !== 2){
      console.log('number is composite');
      return;
    } else {
      var iteration = Math.ceil(Math.sqrt(number));
      for(var i = 3; i <= iteration; i++){
        if(number % i === 0 && i % 2 !== 0 ){
          console.log('number is composite');
          return;
        }
      }
      console.log('number is simple');
      return;
    }
  } else {
    console.log('data is incorrect');
    return;
  }
}

simpleNumber(51)