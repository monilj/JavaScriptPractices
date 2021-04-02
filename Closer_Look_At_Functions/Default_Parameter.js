'use strict ';

const bookings = [];
const createBooking = function (
  flightNumber,
  numberofPassanger = 1,
  price = 199
) {
  // till ES5
  // numberofPassanger = numberofPassanger || 1;
  // price = price || 199;
  const booking = {
    flightNumber,
    numberofPassanger,
    price,
  };

  console.log(booking);
  booking.push(booking);
};
createBooking('LF123');
