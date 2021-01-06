const mikeInfo = {
    firstName: 'Mike',
    birthYear: 1997,
    job: 'IT Professional',
    friends: ['Sam', 'John', 'Jonas'],
    hasDriverLicense: true,
    // calAge: function (birthYear) {
    //     return 2020 - birthYear;
    // }
    // calAge: function () {
    //     console.log(this);
    //     return 2020 - this.birthYear;
    // }
    calAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()} years old ${this.job} and he has ${this.hasDriverLicense ? 'a ' : 'no '} driving lincense`
    }
};

console.log(mikeInfo)
// console.log(mikeInfo.calAge(1992));
// console.log(mikeInfo['calAge'](1992));
console.log(mikeInfo.calAge());
console.log(mikeInfo.getSummary());