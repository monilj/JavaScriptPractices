'use strict';
const airline = 'Tap air india ';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(airline.trim());
console.log(airline.toLocaleLowerCase().trim());

const priceGB = '288,44';
const priceUs = priceGB.replace(',', '.');

// returns boolean
airline.includes('air');
// matches only starts with
airline.startsWith('Tap');

// matches only ends with
airline.endsWith('Tap');
