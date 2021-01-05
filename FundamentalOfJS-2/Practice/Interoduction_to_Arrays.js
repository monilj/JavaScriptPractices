const friend1 = 'Mike';
const friend2 = 'Steven';
const friend3 = 'John';

// declare an array using [] 
const friend = ['Mike', 'Steve', 'John'];
console.log(friend);

// declare an array using New keyword
const years = new Array(1991, 1993, 1556);
console.log(years);

// print each element of the array by index
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);

// print length of the array
console.log(friend.length);

// print last element of the array
console.log(friend[friend.length - 1]);

// replace element at the index 2 with new value
friend[2] = 'Jay';
console.log(friend);

// Array can hold values with different types
const info = ['John', '39', '5.6'];
console.log(info);

// Arrays can hold variables inside an array as element
const firstName = 'Samual'
const acInfo = [firstName, '39', '5.6'];
console.log(acInfo);

// Arrays can hold another array inside an array as element
const lastName = 'Kite'
const arInfo = [lastName, '39', '5.6', friend];
console.log(arInfo);

