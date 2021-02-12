'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'ravet pune',
  mainIndex: 2,
  starterIndex: 2,
});

// default destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuring with users own variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu = [] } = restaurant;
console.log(menu, starterMenu);

// Mutuating Variables
let a = 111;
let b = 923;
const obj = { a: 23, b: 7, c: 14 };
console.log(({ a, b } = obj));

// Nested object
// const { fri } = openingHours;
// console.log(fri);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
