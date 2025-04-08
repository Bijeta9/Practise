//2 uses of functions - to perform some action , -to calculate and return some value
//if we don't supply an explicit value it returns undefined

function multiply(num1 , num2){
    return num1*num2;
}

console.log(multiply(2,2));


//but if return is not explicitly returning value ir gives undefined
function multiplyHere(num1 , num2){
    const product = num1*num2;
}

console.log(multiplyHere(2,2));
