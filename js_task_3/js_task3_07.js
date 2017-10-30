function calculator(firstNumber){
  var obj = {
    sum: function(){
      sum = firstNumber;
      for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
      }
      return sum;
    },
    dif: function(){
      dif = firstNumber;
      for(var i = 0; i < arguments.length; i++){
        dif -= arguments[i];
      }
      return dif;
    },
    div: function(){
      div = firstNumber;
      for(var i = 0; i < arguments.length; i++){
        if(arguments[i] === 0){
          console.log('you cannot divide by zero');
          return div;
        } else{
          div /= arguments[i];
        }
      }
      return div;
    },
    mul: function(){
      mul = firstNumber;
      for(var i = 0; i < arguments.length; i++){
        mul *= arguments[i];
      }
      return mul;
    }
  };
  return obj;
}

var myCalculator = calculator(100);
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));