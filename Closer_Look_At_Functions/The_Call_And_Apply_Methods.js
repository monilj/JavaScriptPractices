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
// book(23, 'Sarah William');

// Call Method
book.call(luftansa, 23, 'Sarah William');
book.call(eurowings, 23, 'Sarah William');

const swiss = {
  airline: 'swiss airline',
  iataCode: 'LX',
  bookings: [],
};
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
