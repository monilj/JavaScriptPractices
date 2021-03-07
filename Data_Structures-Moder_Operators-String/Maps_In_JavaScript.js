'use strict';

const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, 'Pune');
rest.set(1, 'Mumbai');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

// const time = 21;
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
rest.size;
// rest.clear()
// rest.set([1, 2], 'Test');
// console.log(rest.get[(1, 2)]);
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
