'use strict';

const flight = 'LH234';
const john = {
  name: 'John Smith',
  passport: 123123123223,
};
const checkIn = function (flightNum, passager) {
  flightNum = 'LH6777';
  passager.name = 'Mr.' + passager.name;
  if (passager.passport === 123123123223) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};
checkIn(flight, john);
console.log(flight);
console.log(john);
