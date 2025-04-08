const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = array.filter((newArray) => newArray % 2 === 0);
console.log(filteredArray);

const newObject = [
  {
    id: 1,
    name: "Bijeta",
    age: 22,
    position: "Developer"
  },
  {
    id: 2,
    name: "Geeta",
    age: 23,
    position: "Designer"
  },
  {
    id: 2,
    name: "Ram",
    age: 23,
    position: "Developer"
  },
  {
    id: 2,
    name: "Sita",
    age: 23,
    position: "Tester"
  },
];

const colleagues = newObject.filter(colleague => colleague.position === 'Developer');
console.log(colleagues);

