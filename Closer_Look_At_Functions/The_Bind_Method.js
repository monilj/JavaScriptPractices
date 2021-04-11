'use strict';
const luftansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  book(flighNum, name) {
    console.log(
      ` ${name} booked seat on ${this.airline} flight ${this.iataCode} ${flighNum} `
    );
    this.bookings.push({ flight: `${this.iataCode} ${flighNum}`, name });
  },
};

luftansa.book(239, 'John Smith');
luftansa.book(239, 'Jesan Decon ');
console.log(luftansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = luftansa.book;

const swiss = {
  airline: 'swiss airline',
  iataCode: 'LX',
  bookings: [],
};

const bookEw = book.bind(eurowings);
const bookLh = book.bind(luftansa);
const bookSw = book.bind(swiss);
bookEw(23, 'Steven');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Maria');
const bookEw44 = book.bind(eurowings, 44, 'Yardly');
bookEw44();
// Bind method with Event Listeners
luftansa.planes = 300;
luftansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', luftansa.buyPlane.bind(luftansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
//adVAT =value =>value +value *.23
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATNew = addTaxRate(0.23)(100);
console.log(addVATNew);
