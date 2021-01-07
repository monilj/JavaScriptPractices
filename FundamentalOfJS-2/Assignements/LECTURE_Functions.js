function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const infoFinland = describeCountry('Finland', 330000, 'Helsinki');
console.log(infoFinland);

const infoIndia = describeCountry('India', 1130000, 'Delhi');
console.log(infoIndia);

const infoSrilanka = describeCountry('Srilanka', 4000000, 'Colombo');
console.log(infoSrilanka)