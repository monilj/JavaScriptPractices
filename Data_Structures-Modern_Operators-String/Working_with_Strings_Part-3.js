'use strict';
console.log('a+very+nice+langu'.split('+'));

['Mr.', 'monil', 'Joshi'].join('-');
const [firstName, lastName] = 'John Smith'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  let nameUppar = [];
  for (const n of names) {
    // nameUppar.push(n[0].toUpperCase() + n.slice(1));
    nameUppar.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUppar.join(' '));
};

capitalizeName('Json John David Decon');
capitalizeName('Samual B');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const credCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(credCard(12312443534534));

// repeat method
const messageFlight = 'Bad weather, All departure are delayed ';
console.log(messageFlight.repeat(5));
