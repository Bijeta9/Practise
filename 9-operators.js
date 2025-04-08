//to operate on our variables we use operators
//An expression is something that produces a value

//1.Arithmetic Operators- Mathematical operators like: -, +, *, /, %
//for power use ** , eg 2**6 = 64

//Increment operator

let a = 10;
a = a + 1;
a += 1;
a++;
++a; // the difference is a++ gives value before incrementing and ++a after(updated value)
//same for decrement

//Assignment Operator: =
let programmingLanguage = "js"; //assigns value to the variable

//Comparison Operators: >, >=, <, <=
let num1 = 14;
let num2 = 10;
const isNum1Greater = num1 > num2;
console.log(isNum1Greater);

//Equality Operators
let x = 2;
let y = "2";

//loose equality - there is type coersion/conversion
console.log(x == y); //compares values between number and string by changing the number to string to make the same datatype
//truthy

//strict equality
console.log(x === y); //no conversion so compares value and type both

console.log(1 == "1");
console.log(true == "1"); //js will convert 1 to bool to compare again; 1 is true and 0 is false

//ternary operator - is a way to conditionally assign a value to a variable

let age = 16;
const canDrive = age >= 16 ? true : false;
console.log(canDrive);

let points = 110;
const customerType = points > 100 ? 'gold':'silver';//it assigns after comparison
console.log(customerType);

//Logical Operators - to make decision based on conditions

//OR: || first always converts to boolean type if not already
console.log(true || true);//true
console.log(false || true);//true
console.log(true || false);//true
console.log(false || false);//false

let hasReservation = true;
let acceptingWalkins = false;

const hasAccessToTable = hasReservation || acceptingWalkins;
console.log(hasAccessToTable);

//AND: && - first always converts to boolean type if not already
//also && operator has higher precedence so it is operated before OR
console.log(true && true); //true
console.log(false && true);//false
console.log(true && false);//false
console.log(false && false);//false

let age_now= 16;
let haaCar = true;

const canDriive =  age_now >=16  && haaCar;
console.log(canDriive); //true

//NOT: ! - first always converts to boolean type if not already

console.log(!true);//false
isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
console.log(isRestaurantOpen); //false

//Nullish Coalescing operator: ?? - Returns the right-hand operand if the left-hand operand is null or undefined
//basically allows to supply default value
let ab = null;
const result = ab ?? false;
//longer ver
//const resultt = (ab!== null && ab!== undefined) ? a:false
console.log(result);


let userChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor = userChosenColor || defaultColor;
console.log(currentWebsiteColor); //first truthy value does not check after it finds one output:blue

//falsy - non boolean value with the boolean value
//falsy values - when converting to boolean value it evaluates to false - '', null,undefined, NAN, 0 , false

let name = 'test';
const here = false || name;
console.log(here); //output: test

//operator precedence
//PEDMAS - so even without the bracket it functions as it should
let n = 5+5*4 // 5+(5*4)
console.log(n);









