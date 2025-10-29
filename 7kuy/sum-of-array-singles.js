// In this Kata, you will be given an array 
// of numbers in which two numbers occur once and the 
// rest occur only twice. Your task will be to return the sum of the numbers that occur only once. 
//For example, repeats([4,5,7,5,4,8]) = 15 because only the 
// numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.


function repeats(arr){
    let result = 0;
    let newArr = arr.filter((e, i, arr) => {
        return arr.findIndex(item => item === e) === arr.findLastIndex(item => item === e);
    });

    for(let i = 0; i < newArr.length; i++) {    
        result += newArr[i]
    }

    return result;
};

const arr = [ 1, 1, 2, 3, 4, 5, 6, 6]

// [1, 1, 2, 3, 4, 5, 5] = arr.findIndex(e => {e === 1}) 

console.log(repeats(arr))
