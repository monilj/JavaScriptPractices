'use strict';

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'cheeze pasta', 'pasta']);
console.log(orderSet);

console.log(new Set('Hello'));

console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('pasta');
console.log(orderSet);
// orderSet.clear();
for (const order of orderSet) console.log(order);

const staff = [
  'waiter',
  'manager',
  'chef',
  'waiter',
  'manager',
  'chef',
  'waiter',
  'manager',
  'chef',
];

const uniqDes = [...new Set(staff)];
console.log(uniqDes);
