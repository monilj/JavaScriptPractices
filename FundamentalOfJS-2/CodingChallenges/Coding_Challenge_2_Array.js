const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;
}

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip)

// Create an array with tips and biils to calculate total number
const total = [
    bills[0] + tip[0],
    bills[2] + tip[1],
    bills[2] + tip[2]
]
console.log(total)