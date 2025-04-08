const array = [1, 2, 3, 4, 6, 5, 7, 8, 9];
const newArray = array.map((squaredArray) => squaredArray * squaredArray);
console.log(newArray);

const characters = ["bijeTa", "Gita", "Sita", "Ram", "Hari"];
const newsCharacters = characters.map((newString) =>
  newString.toUpperCase(characters)
);
console.log("🚀 ~ newCharacters:", newsCharacters);

const employees = [
  {
    id: 1,
    name: "Bijeta",
    position: "Developer",
    email: "bijetakunwar17@gmail.com",
  },
  {
    id: 2,
    name: "Ram",
    position: "Developer",
    email: "ram14@gmail.com",
  },
  {
    id: 3,
    name: "Shyam",
    position: "Developer",
    email: "shyam12@gmail.com",
  },
];

const newEmployee = employees.map(a => ({
  ...a,
  email: a.email.toUpperCase(),
}));
console.log(newEmployee);


const arrays = [
  {
    id: 1,
    name: "Ram",
    age: 22,
  },
  {
    id: 2,
    name: "Shyam",
    age: 22,
  },
  {
    id: 3,
    name: "Hari",
    age: 22,
  },
];

const arr = arrays.map(a => a.age);
console.log(arr);

const allValues = arrays.map(obj => Object.values(obj));
console.log(allValues);
