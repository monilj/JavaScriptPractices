const firstName = "Monil";
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const info = "I'm " + firstName + ', a' + (year - birthYear) + ' years old' + job
console.log(info)

//with Literal Template
const info_with_template = `I'm ${firstName}, a ${year - birthYear}, years old, ${job}`;
console.log(info_with_template)


// multiline sting without template
console.log('String is \n\
multiple \n\
lines');

console.log(`String is
multiple
lines`);