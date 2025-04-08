//For javascript

const obj = {
  id: 1,
  name: "Bijeta Kunwar",
  age: 22,
};
console.log(obj.id);
console.log(obj.name);
console.log(obj.age);

//instead

for (const key in obj) {
  console.log(obj[key]);
}

