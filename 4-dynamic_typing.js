/*
Programming languages that allow you to initialize a variable to a datatype and reassign it different type
In C# or Java after specifying the datatype cannot be reassigned to another datatype so they are statically typed

Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
*/
let firstName = 'Biju'
console.log(typeof(firstName));

firstName = 6;
console.log(typeof(firstName));

firstName = true;
console.log(typeof(firstName));

console.log(firstName);

//this can lead to bugs in the longrun so typescript is used which is statically typed version of javascript


