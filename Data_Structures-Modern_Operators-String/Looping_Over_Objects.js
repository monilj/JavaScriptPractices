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

const properties = Object.keys(restaurant.openingHours);
console.log(properties);
//this will written an array
// So we are looping over through array only

// Looping over object Keys
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}
// Looping over object Keys
const values = Object.values(restaurant.openingHours);
console.log(values);

// looping over key-values i.e on entries
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
// loop over on entries
for (const x of entries) {
  console.log(x);
}

// we can further destructure it
for (const [key, value] of entries) {
  console.log(`on ${key} our timing is ${value}`);
}
// values are further destructure on open and close
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
