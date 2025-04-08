//Sum of all numbers

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((accumulator, index) => {
  return accumulator + index;
}, 0);
console.log(sum);

//Find the maximum number

