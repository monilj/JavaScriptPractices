const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill);

}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tip = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    const tips = calcTip(bills[i]);
    tip.push(tips);
    totals.push(tip + bills[i])
}
console.log(bills, tip, totals)

// Bonus
const calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // equivalent to sum = sum + arr[i]
    }
    return sum;
}
console.log(calcAverage(totals));
console.log(calcAverage(tip));
