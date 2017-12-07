// =============================
//  Object conversions
// =============================
// ===================
//  Task 1
// ===================

function sum(a){
  var currentSum = a;
  function nextIteration(b){
    currentSum += b;
    return nextIteration;
  }

  nextIteration.toString = function(){
    return currentSum;
  }

  return nextIteration;
}

// console.log(sum(1)(2));
// console.log(sum(1)(2)(3));

// =============================
//  Descriptors, get/set
// =============================
// ===================
//  Task 2
// ===================

function User(fullName){
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get: function(){
        return this.fullName.split(' ')[0];
      },

      set: function(newFirstName){
        this.fullName = newFirstName + ' ' + this.lastName
      }
    },

    lastName: {
      get: function(){
        return this.fullName.split(' ')[1];
      },

      set: function(newLastName){
        this.fullName = this.firstName + ' ' + newLastName;
      }
    }
  })
}

var user = new User('John Doe');

// console.log(user.firstName);
// console.log(user.lastName);

user.lastName = 'Johnson';

// console.log(user.fullName);

// =============================
//  Static, Factory methods
// =============================
// ===================
//  Task 3
// ===================

function Article(){
  this.created = new Date();
  Article.count++;
  Article.lastCreated = this.created;
}

Article.count = 0;
Article.showStats = function(){
  return 'total: ' + this.count + '\nlast created: ' + this.lastCreated;
}

new Article();
new Article();

// console.log(Article.showStats());

new Article();

// console.log(Article.showStats());

// =============================
//  Call, Apply
// =============================
// ===================
//  Task 4
// ===================

function sumArgs(){
  return [].reduce.call(arguments, function(a, b){
    return a + b;
  })
}

// console.log(sumArgs(1, 2, 3));

// ===================
//  Task 5
// ===================

function applyAll(func){
  return func.apply(this, [].slice.call(arguments, 1));
}

// console.log(applyAll(Math.max, 2, -2, 3));

// =============================
//  Bind
// =============================
// ===================
//  Task 6
// ===================

function f(){
  // console.log(this);
}

var user = {
  g: f.bind('Hello')
}

user.g();

// ===================
//  Task 7
// ===================

function sayHi(){
  console.log(this.name);
}

sayHi.test = 5;
// console.log(sayHi.test);

var bound = sayHi.bind({ name: 'Ann' });
// console.log(bound.test);

// ===================
//  Task 8
// ===================

function ask(question, answer, ok, fail){
  var result = prompt(question, '');
  if(result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'John',
  password: '1234',

  loginOk: function(){
    console.log(this.login + ' entered the site');
  },

  loginFail: function(){
    console.log(this.login + ' error');
  },

  checkPassword: function(){
    ask('your password?', this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

// user.checkPassword();

// ===================
//  Task 9
// ===================

function askSecond(question, answer, ok, fail){
  var result = prompt(question, '');
  if(result.toLowerCase == answer.toLowerCase()) ok();
  else fail();
}

var user2 = {
  login: 'Helen',
  password: '12345',

  loginDone: function(result){
    alert(this.login + (result ? ' entered the site' : ' error'));
  },

  checkPasswordSecond: function(){
    askSecond('your password?', this.password,
        this.loginDone.bind(this, true),
        this.loginDone.bind(this, false));
  }
}

// console.log(user2.checkPasswordSecond());

// =============================
//  Wrapper functions
// =============================
// ===================
//  Task 10
// ===================

function work(a){};

function makeLogging(f, log){
  return function wrapper(a){
    log.push(a);
    return f.call(this, a);
  }
}

var log = [];
work = makeLogging(work, log);

work(1);
work(5);

for(var i = 0; i < log.length; i++){
  // console.log('log: ' + log[i]);
}

// ===================
//  Task 11
// ===================

function f(x){
  return Math.random() * x;
}

function makeCaching(f){
  var cache = {};

  return function(x){
    if(!(x in cache)){
      cache[x] = f.call(this, x);
    }
    return cache[x];
  }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
// console.log(a == b);

b = f(2);
// console.log(a == b);