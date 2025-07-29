// Given an array of Boolean values and a logical 
// operator, return a Boolean result based on sequentially 
// applying the operator to the values in the array.



let arr = [true, true, false, true];



function logicalCalc(array, op){

    let result = array[0]; 
  
    for(let i = 1; i < array.length; i++) {
        if(op === "AND") {
            result = result && array[i];
        } else if(op === "OR") {
            result = result || array[i];
        } else if(op === "XOR") {
            result = result !== array[i];
        }
    }

    return result;
}

console.log(logicalCalc(arr, "AND")); 

