const myCountry =
{
    'country': 'India',
    'capital': 'Delhi',
    'language': 'Sanskrit',
    'population': 1300000,
    'neighbours': ['Srilanka', 'Maldives', 'Pakistan', 'Chaina', 'Bangladesh']
}
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population}  ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`)

myCountry.population = myCountry.population + 200000;
console.log(`${myCountry.country} has ${myCountry.population}  ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`)

myCountry['population'] = myCountry['population'] - 200000;
console.log(`${myCountry.country} has ${myCountry.population}  ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`)
