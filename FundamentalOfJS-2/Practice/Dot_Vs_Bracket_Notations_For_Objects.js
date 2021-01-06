// object 
const mikeInfo = {
    firstName: 'Mike',
    age: 29,
    job: 'IT Professional',
    friends: ['Sam', 'John', 'Jonas']
}

console.log(mikeInfo);
// Retriving property with Dot notation
console.log(mikeInfo.firstName);

// Retriving property with Bracket notation
console.log(mikeInfo['job']);

// retrive value using some expression
const nameKey = 'Name';
// as firstName key already has Name in it we will use concat ops to retirve firstName
console.log(mikeInfo['first' + nameKey]);

// const inputValue = prompt('Which info you want to retrive? firstName, job', 'age', 'friends');
// console.log(inputValue);
// console.log(mikeInfo.inputValue);
// console.log(mikeInfo[inputValue]);


//Add New Properties to object
mikeInfo.location = 'India';
mikeInfo['email'] = 'mike.a@gmail.com'
console.log(mikeInfo)

// Exercise - Print all friends name and print best friend
const bestFriend = prompt("Who is Mike's bestFriend? Sam, John ,Jonas ");
console.log(`${mikeInfo.firstName} has ${mikeInfo.friends.length} friends, ${mikeInfo.friends[0]}, ${mikeInfo.friends[1]},${mikeInfo.friends[2]} 
and his best friend is ${bestFriend}`);