// ====================================
//   Constructor Calculator
// ====================================

function Calculator(){
  this.state = 0;
}

// ============================
//   Calculator Methods
// ============================

Calculator.prototype.add = function(){
  var sum = this.state,
    self = this;

  sum += arguments[0];
  this.getResult(sum);
  return function(){
    arguments.length !== 0 ? sum += arguments[0] : '';
    self.getResult(sum);
  }
}

Calculator.prototype.substract = function(){
  var sub = this.state,
    self = this;

  sub -= arguments[0];
  this.getResult(sub);
  return function(){
    arguments.length !== 0 ? sub -= arguments[0] : '';
    self.getResult(sub);
  }
}

Calculator.prototype.divide = function(){
  var div = this.state,
    self = this;

  div /= arguments[0];
  this.getResult(div);
  return function(){
    arguments.length !== 0 ? div /= arguments[0] : '';
    self.getResult(div);
  }
}

Calculator.prototype.multiply = function(){
  var mul = this.state,
    self = this;

  mul *= arguments[0];
  this.getResult(mul);
  return function(){
    arguments.length !== 0 ? mul *= arguments[0] : '';
    self.getResult(mul);
  }
}

Calculator.prototype.getResult = function(){
  if(arguments.length) this.state = arguments[0]
  else return this.state;
}

Calculator.prototype.reset = function(){
  return this.state = 0;
}

// ====================================
//   Constructor ExtendedCalcalculator
// ====================================

function ExtendedCalculator(userName){
  Calculator.apply(this, arguments);
  this.userName = userName;
}

// ============================
//   Inheritance
// ============================

ExtendedCalculator.prototype = Object.create(Calculator.prototype);
ExtendedCalculator.prototype.constructor = ExtendedCalculator;

// ============================
//   ExtendedCalculator Methods
// ============================

ExtendedCalculator.prototype.logarithm = function(number){
  var logResult = 0,
    rowMember = number - 1,
    current = rowMember,
    eps = 0.000001,
    i = 1;

  while(Math.abs(current) >= eps){
    logResult += current;
    rowMember = -rowMember * (number - 1);
    current = rowMember / ++i;
  }
  return logResult;
}

ExtendedCalculator.prototype.pow = function(number, power){
  var powResult = 1;
  for(var i = 0; i < power; i++) powResult *= number;
  return powResult;
}

ExtendedCalculator.prototype.getResult = function(){
  Calculator.prototype.getResult.apply(this, arguments);
  return this.userName + "'s result: " + this.state;
}

// =====================
//   Tests
// =====================

var myCalculator = new Calculator(),
  myExtendedCalculator = new ExtendedCalculator('John');

console.log('Parent class');

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

console.log('Inherit class');

myExtendedCalculator.add(20)(10);
myExtendedCalculator.add(40)(10);
myExtendedCalculator.substract(20);

console.log(myExtendedCalculator.logarithm(2));
console.log(myExtendedCalculator.pow(4, 2));
console.log(myExtendedCalculator.getResult());