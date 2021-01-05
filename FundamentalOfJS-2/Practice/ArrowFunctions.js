// Function Expression
const age = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = age(1991);
console.log(age2)

//Arrow Function with inline code
const age3 = birthYear => 2037 - birthYear;
calculatedAge = age3(1991);
console.log(calculatedAge);

//Arrow function with multiline code 
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

//Arrow function with multiparameter code
const yearsUntilRetirementWithFirstName = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirementWithFirstName(1991, 'Pratik'));
