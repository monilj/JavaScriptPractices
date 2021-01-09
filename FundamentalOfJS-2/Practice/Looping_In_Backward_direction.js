const info = [
    'Mike',
    29,
    'IT Professional',
    ['Sam', 'John']
]
type_array = [];

//Loooping in backward direction 
for (let i = info.length - 1; i >= 0; i--) {
    type_array[i] = (typeof info[i]);
}
console.log(type_array);

// Repetation 3 execercise for 5 time
for (excercise = 1; excercise < 4; excercise++) {
    console.log(`Starting excercise ${excercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting wait repitation ${rep}`);
    }
}