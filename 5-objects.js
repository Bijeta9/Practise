//objects are reference types - lets us group related values
//key-value pairs are the properties of the objects
//All the keys are internally represented as string

let course = {
    name: "Python",
    hours: 3
};

console.log(course);

//to access it - 2 ways

//First
console.log(course.name);
console.log(course.hours);
//to reassign it
course.name = 'Javascript';
console.log(course.name);

//Second
console.log(course['name']);
//to reassign it 
course['name'] = 'Typescript';
console.log(course['name']);


let property = 'hours';
console.log(course[property]);



