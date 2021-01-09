const myCountry =
{
    'country': 'India',
    'capital': 'Delhi',
    'language': 'Sanskrit',
    'population': 1300000,
    'neighbours': ['Srilanka', 'Maldives', 'Pakistan', 'Chaina', 'Bangladesh'],
    'describe': function () {
        console.log(`${this.country} has ${this.population}  ${this.language}-speaking people, 
    ${this.neighbours.length} countries and a capital called ${this.capital}`);
    },
    'checkIsland': function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
}
myCountry.describe();
console.log(myCountry.checkIsland())
console.log(myCountry)