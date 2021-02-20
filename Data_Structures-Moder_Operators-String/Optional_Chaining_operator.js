'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    mon: {
      open: 0,
      close: 22,
    },
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// With Optional Chaining Operator
// console.log(restaurant.openingHours.mon?.open);
// Property before ? exist  then next preoprty read fromm there if not then undefined will be returned
// Exist means nullish proerpty exist and not null
// Check by adding opening hours as '' for mon

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   //   const open = restaurant.openingHours[day]?.open || 'closed';
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day} we open at ${open}`);
// }

// On method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderVadaPav?.(0, 1) ?? 'Method does not exist');

// On Arrays
const users = [{ name: 'jonas', email: 'ellow@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

const user = [];
console.log(user[0]?.name ?? 'User array empty');
