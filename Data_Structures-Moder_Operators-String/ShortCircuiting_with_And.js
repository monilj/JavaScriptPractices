'use strict';
console.log(0 && 'Monil'); //return 0
console.log(3 && 'Monil'); //retune Monil
console.log('hello' && 23 && null && 'Jonas '); //retun null as it is a falsy value

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrrom', 'spinach');
}
// with Short circuit And
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
