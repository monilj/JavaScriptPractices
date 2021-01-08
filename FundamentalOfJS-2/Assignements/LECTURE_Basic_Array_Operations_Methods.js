
const neighbours = ['Srilanka', 'Maldives', 'Pakistan', 'Chaina', 'Bangladesh'];

console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

// Check for the neighbouring country
if (neighbours.indexOf('Germany') < 0) {
    console.log('Probably not a central European country')
}
else {
    console.log('Central European country');
}

//Find the index of some country change the neighbour
const indexOfACountry = neighbours.indexOf('Maldives');
neighbours[indexOfACountry] = 'Thailand';
console.log(neighbours);
