function Calculator(){
  this.state = 0;

  this.add = function(){
    var sum = this.getResult(),
      self = this;

    sum += arguments[0];
    this.getResult(sum);
    return function(){
      arguments.length !== 0 ? sum += arguments[0] : '';
      self.getResult(sum);
    }
  },

  this.substract = function(){
    var sub = this.getResult(),
      self = this;

    sub -= arguments[0];
    this.getResult(sub);
    return function(){
      arguments.length !== 0 ? sub -= arguments[0] : '';
      self.getResult(sub);
    }
  },

  this.divide = function(){
    var div = this.getResult(),
      self = this;

    div /= arguments[0];
    this.getResult(div);
    return function(){
      arguments.length !== 0 ? div /= arguments[0] : '';
      self.getResult(div);
    }
  },

  this.multiply = function(){
    var mul = this.getResult(),
      self = this;

    mul *= arguments[0];
    this.getResult(mul);
    return function(){
      arguments.length !== 0 ? mul *= arguments[0] : '';
      self.getResult(mul);
    }
  },

  this.getResult = function(){
    if(arguments.length === 0) return this.state;
    else this.state = arguments[0];
  },

  this.reset = function(){
    return this.state = 0;
  }
}

var myCalculator = new Calculator();

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