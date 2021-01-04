// numNeighbours = prompt('How many neighbour countries does your country have?');
// if (numNeighbours == 1) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("Any other value")
// }

numNeighbours = prompt('How many neighbour countries does your country have?');
numNeighboursInt = Number(numNeighbours)
if (numNeighboursInt === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("Any other value")
}