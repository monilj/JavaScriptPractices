// Function declaration
function ageCalculator(birthYear) {
    return 2037 - birthYear;
}
console.log(ageCalculator(1991));

// Function Expression
const age = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = age(1991);
console.log(age2)