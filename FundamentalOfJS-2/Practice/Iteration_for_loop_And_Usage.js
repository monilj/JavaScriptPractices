const info = [
    'Mike',
    29,
    'IT Professional',
    ['Sam', 'John']
]
type_array = [];

for (let i = 1; i < info.length; i++) {
    // console.log(info[i]);
    type_array[i] = (typeof info[i]);
}
console.log(type_array)
