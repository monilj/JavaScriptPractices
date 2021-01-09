const calcAverage = (a, b, c) => (a + b + c) / 3

// Test1
let scoreDolphin = calcAverage(44, 23, 71);
let scorekoalas = calcAverage(65, 54, 49);
console.log(scoreDolphin, scorekoalas)

const checkWinner = function (avgDophins, avgKoalas) {
    if (avgDophins > 2 * avgKoalas) {
        console.log(`Dolphins win trophy`)
    }
    else if (avgKoalas > 2 * avgDophins) {
        console.log(`Koalas win trophy`)
    }
    else {
        console.log(`No team wins`)
    }
}
checkWinner(scoreDolphin, scorekoalas);

// Test 2
scoreDolphin = calcAverage(85, 54, 41);
scorekoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scorekoalas)
checkWinner(scoreDolphin, scorekoalas);