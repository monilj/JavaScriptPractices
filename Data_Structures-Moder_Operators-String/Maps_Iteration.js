'use strict';
const question = new Map([
  ['question', 'What is best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'User is correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer ${key}: ${value}`);
}
const ans = Number(prompt('your answer?'));
// console.log(ans);
// question.get('Correct') === ans
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

console.log(question.get(question.get('Correct') === ans));

// Convert to an array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
