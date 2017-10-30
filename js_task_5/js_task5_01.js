function calculator(){
  var state = 0;
  var obj = {
    add: function(){
      var sum = this.getResult();
      var val = arguments[0];
      sum += arguments[0];
      this.getResult(sum);
      return function(){
        arguments.length !== 0 ? sum += arguments[0] : '';
        obj.getResult(sum);
        return sum;
      }
    },
    substract: function(){
      var sub = this.getResult();
      sub -= arguments[0];
      this.getResult(sub);
      return function(){
        arguments.length !== 0 ? sub -= arguments[0] : '';
        obj.getResult(sub);
        return sub;
      }
    },
    divide: function(){
      var div = this.getResult();
      div /= arguments[0];
      this.getResult(div);
      return function(){
        arguments.length !== 0 ? div /= arguments[0] : '';
        obj.getResult(div);
        return div;
      }
    },
    multiply: function(){
      var mul = this.getResult();
      mul *= arguments[0];
      this.getResult(mul);
      return function(){
        arguments.length !== 0 ? mul *= arguments[0] : '';
        obj.getResult(mul);
        return mul;
      }
    },
    getResult: function(){
      if(arguments.length === 0){
        return state;
      } else {
        state = arguments[0];
      }
    },
    reset: function(){
      return state = 0;
    }
  }
  return obj;
}

var myCalculator = calculator();
myCalculator.add(5)(5);
myCalculator.substract(4)(1);
console.log(myCalculator.getResult());
console.log(myCalculator.reset());
myCalculator.add(2)(8);
console.log(myCalculator.getResult());
myCalculator.divide(2);
console.log(myCalculator.getResult());
myCalculator.multiply(10)(2);
console.log(myCalculator.getResult());