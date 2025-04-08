//1. implement a function to accept two numbers and returns the maximum number

function maxNum(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(maxNum(9, 1));

const maxNum2 = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};
console.log(maxNum2(2, 5));

//short and optimized version

function maxNum3(a, b) {
  return a >= b ? a : b;
}
console.log(maxNum3(8, 1));

//2. Implement a function to accept a number. Then return "FizzBuzz" if divisible by 3 and 5 or return "Fizz" if divisible by 3 abd buzz if by 5. return origin if none

function nums(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return `FizzBuzz`;
  } else if (number % 3 === 0) {
    return `Fizz`;
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}
console.log(nums(7));
