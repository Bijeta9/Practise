//we use for loop when we know exactly when to stop the loop to stop executing
//when we don't we use while loop

let numbers = [1, 2, 3, 4, 5, 6, 7];

let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);

  index++;
}


let sum = 0;
while (true) {
    console.log('Loop');
    sum++;

    if (sum === 10)
        break;
    
}