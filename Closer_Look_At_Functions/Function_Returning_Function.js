'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('John');

greet('Hello')('John');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Smith');
console.log('commiting again');
