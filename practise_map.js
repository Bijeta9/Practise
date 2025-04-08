//Beginner level
//Double the Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Capitalize Words
const words = ["apple", "banana", "cherry"];

const newWord = words.map((capitalizedWords) => capitalizedWords.toUpperCase());
console.log(newWord);

//Convert to Strings

const nums = [10, 20, 30];

const newString = nums.map((numsToString) => numsToString.toString());
console.log(newString);

//Add 5 to Each Number

const number = [5, 10, 15];

const newAddedNumber = number.map((afterAddition) => afterAddition + 5);
console.log(newAddedNumber);

//Intermediate Level
//Extract Names

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const newArrayObject = people.map((newPeople) => newPeople.name);
console.log(newArrayObject);

//Format Strings- Return an array of strings like "Alice is 25 years old".(Use same people array as above.)

const fullNewSentence = people.map((newSentence) => {
  return newSentence.name + ` is` + ` ` + newSentence.age + ` years old.`;
});
console.log(fullNewSentence);

//Get Lengths of Words

const word = ["map", "filter", "reduce", "forEach"];

const wordLength = word.map((newWord) => newWord.length);
console.log(wordLength);

//Round Prices

const prices = [10.99, 5.75, 99.99];

const roundedPrices = prices.map((newPrices) => Math.round(newPrices));
console.log(roundedPrices);

//Advanced Level
//Add Index to Elements

const items = ["Pen", "Pencil", "Eraser"];
const indexAdded = items.map((item, index) => {
  return index + ` :` + item;
});
console.log(indexAdded);

//Convert Temperature (C to F) F = C * 9/5 + 32

const temps = [0, 20, 37, 100];

const newTempInF = temps.map((newTemp) => {
  return (newTemp * 9) / 5 + 32;
});
console.log(newTempInF);

//Mark Even or Odd

const arrayNums = [1, 2, 3, 4, 5];

const evenOrOdd = arrayNums.map((newArray) => {
  if (newArray % 2 == 0) {
    return `Even: ` + newArray;
  } else {
    return `Odd: ` + newArray;
  }
});
console.log(evenOrOdd);

//Nested Object Transform
const users = [
  { name: "John", address: { city: "New York" } },
  { name: "Jane", address: { city: "London" } },
  { name: "Mark", address: { city: "Paris" } },
];

const newUsers = users.map(addresses => addresses.address.city);
console.log(newUsers);

