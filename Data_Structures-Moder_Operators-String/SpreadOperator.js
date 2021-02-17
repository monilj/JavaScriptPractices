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
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// join 2 arryas
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);

// const ingrediants = [
//   prompt('Pasta ingrediants 1 '),
//   prompt('Pasta ingrediants 2 '),
//   prompt('Pasta ingrediants 3 '),
// ];

// restaurant.orderPasta(...ingrediants);

// spread operator with object after ES 2018
const newRest = { ...restaurant, fountIn: 1992 };
console.log(newRest);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New resto and bar';
console.log(restaurantCopy.name);
console.log(restaurant.name);
