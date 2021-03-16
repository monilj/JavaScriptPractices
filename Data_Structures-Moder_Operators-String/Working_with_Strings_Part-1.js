'use strict';
const airline = 'Tap air India';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
// we can use properties
console.log('B737'.length);
// we can use methods
console.log('B737'.indexOf('B'));
console.log('B737'.indexOf('7'));
console.log('B737'.lastIndexOf('7'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// identify index using data
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// negative argument
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got middle seat');
  } else console.log('You are lucjy');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Monil'));
console.log(typeof new String('Monil'));
