const worldPopulation = 7900000000;


function percentageOfWorld1(population) {
    const populationPercentage = (population / worldPopulation) * 100;
    return populationPercentage
    // return `${country} has ${population} people, so it is about ${populationPercentage} % of the world population`
}
function describeCountry(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} people which is about ${percentage} % of the world`;
}

const infoFinland = describeCountry('Finland', 330000);
console.log(infoFinland);

const infoIndia = describeCountry('India', 1130000);
console.log(infoIndia);

const infoSrilanka = describeCountry('Srilanka', 4000000);
console.log(infoSrilanka)