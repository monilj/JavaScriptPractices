'use strict';
const oneWord = function (str) {
  str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWords] = str.split(' ');
  return [first.toUpperCase(), ...others].join();
};
//Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str} `);
  console.log(`Transformed String ${fn(str)}`);
  console.log(`Transformed by: ${fn.name} `);
};
transformer('JavaScript is best', upperFirstWord);
transformer('JavaScript is best', oneWord);
