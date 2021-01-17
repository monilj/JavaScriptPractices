function printForecast(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += ` ${array[i]}ºC in ${i + 1} days ...`;
  }
  return "..." + str;
}

// Data 1
const arr = [17, 21, 23];
console.log(printForecast(arr));

console.log("*** Data 2 *** ");
// Data 2
const arr1 = [12, 5, -5, 0, 4];
console.log(printForecast(arr1));
