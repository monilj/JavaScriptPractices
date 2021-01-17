const worldPercent = 3300000;
const population = [110000, 120233, 12122334, 12122232];
const percentages2 = [];
for (let i = 0; i < population.length; i++) {
  percent = percentageOfWorld1(population[i]);
  percentages2.push(percent);
}
console.log(percentages2);
function percentageOfWorld1(population) {
  percent = (population / worldPercent) * 100;
  return percent;
}
