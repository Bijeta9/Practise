//for in iterates through each element in the array

const array = [1, 2, 3, 4, 5];

//traditional approach
for (inx = 0; inx < array.length; inx++) {
  console.log(inx);
}


//for in
for(let element of array){
    console.log(element);
    
}