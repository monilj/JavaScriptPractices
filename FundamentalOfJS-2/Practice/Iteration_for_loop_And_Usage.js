const info = [
    'Mike',
    29,
    'IT Professional',
    ['Sam', 'John']
]
type_array = [];

for (let i = 0; i < info.length; i++) {
    // console.log(info[i]);
    type_array[i] = (typeof info[i]);
    // type_array.push(typeof info[i])
}
console.log(type_array)

const years = [1992, 1991, 1982, 1998];
const age = [];
for (let birthyear = 0; birthyear < years.length; birthyear++) {
    age.push(2020 - years[birthyear]);
}

// Continue statment
for (let i = 0; i < info.length; i++) {
    if (typeof info[i] !== 'string')
        continue;
    console.log(typeof info[i]);
}


// Break statment
for (let i = 0; i < info.length; i++) {
    if (typeof info[i] === 'number')
        break;
    console.log(typeof info[i]);


}
// console.log(type_array)
