const worldPopulation = 7900000000;
const percentageOfWorld3 = (country, population) => {
    const populationPercentage = (population / worldPopulation) * 100;
    return `${country} has ${population} people, so it is about ${populationPercentage} % of the world population`

}

const populationPercentageFinland_FunctionExp = percentageOfWorld3('Finland', 3400000);
console.log(populationPercentageFinland_FunctionExp);

const populationPercentageIndia_FunctionExp = percentageOfWorld3('India', 11580000);
console.log(populationPercentageIndia_FunctionExp);

const populationPercentageSrilanka_FunctionExp = percentageOfWorld3('Srilanka', 40560000);
console.log(populationPercentageSrilanka_FunctionExp);
