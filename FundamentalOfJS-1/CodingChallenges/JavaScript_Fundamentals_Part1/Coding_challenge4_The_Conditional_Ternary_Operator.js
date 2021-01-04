//Test fot values 10, 100, 400
const bill = 100;
const tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill);
console.log(`The bill was ${bill}, tip was ${tip}. So total bill needs to be paid ${bill + tip}`);
