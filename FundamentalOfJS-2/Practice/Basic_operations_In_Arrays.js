const friend = ['Mike', 'Steve', 'John'];

// Add elements 
// Add element at last index  
const newLength = friend.push('Jay');
console.log(friend);
console.log(newLength);

// Add element at first index 
const newLengthWithUnshift = friend.unshift('Sam')
console.log(friend);

//Remove elements
// Remove element at last index 
const poppedElement = friend.pop();
console.log(poppedElement);
console.log(friend);

// Remove element at first index 
const poppedElementWithShift = friend.shift()
console.log(poppedElementWithShift);
console.log(friend);

//Search index
console.log(friend.indexOf('John'));
console.log(friend.indexOf('Bob'));

console.log(friend.includes('John'));
console.log(friend.includes('Bob'));