const worldPopulation = 7900000000;

// Function Declaration
function percentageOfWorld1(country, population) {
    const populationPercentage = (population / worldPopulation) * 100;
    return `${country} has ${population} people, so it is about ${populationPercentage} % of the world population`
}

const populationPercentageFinland = percentageOfWorld1('Finland', 33000000);
console.log(populationPercentageFinland);

const populationPercentageIndia = percentageOfWorld1('India', 11300000);
console.log(populationPercentageIndia);

const populationPercentageSrilanka = percentageOfWorld1('Srilanka', 40000000);
console.log(populationPercentageSrilanka);


//Function Expression


const percentageOfWorld2 = function (country, population) {
    const populationPercentage = (population / worldPopulation) * 100;
    return `${country} has ${population} people, so it is about ${populationPercentage} % of the world population`

}

const populationPercentageFinland_FunctionExp = percentageOfWorld2('Finland', 3400000);
console.log(populationPercentageFinland_FunctionExp);

const populationPercentageIndia_FunctionExp = percentageOfWorld2('India', 11580000);
console.log(populationPercentageIndia_FunctionExp);

const populationPercentageSrilanka_FunctionExp = percentageOfWorld2('Srilanka', 40560000);
console.log(populationPercentageSrilanka_FunctionExp);
