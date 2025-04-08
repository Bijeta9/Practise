//reduce method reduces all the elements into the array into a single value
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (const num of array) sum += num;

console.log(sum);

const newArray = array;

const reducedArray = newArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(reducedArray);
