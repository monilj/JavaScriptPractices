const worldPopulation = 7900000000;


const populations = [30000, 4340000, 133000, 32000, 32000];
console.log(populations.length === 4 ? 'true' : 'false');

const percentagArray =
    [
        percentageOfWorld1(populations[0]),
        percentageOfWorld1(populations[1]),
        percentageOfWorld1(populations[2]),
        percentageOfWorld1(populations[3]),
    ]

function percentageOfWorld1(population) {
    const populationPercentage = (population / worldPopulation) * 100;
    return populationPercentage;

}

const populationPercentageFinland = percentageOfWorld1(33000000);
console.log(populationPercentageFinland);

const populationPercentageIndia = percentageOfWorld1(11300000);
console.log(populationPercentageIndia);

const populationPercentageSrilanka = percentageOfWorld1(40000000);
console.log(populationPercentageSrilanka);