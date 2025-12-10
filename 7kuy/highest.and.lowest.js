// In this little assignment 
// you are given a string of space 
// separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let arrayNumbers = numbers.split(" ");
    let max = arrayNumbers.sort((a, b) => a - b)[0];
    let min = arrayNumbers.sort((a, b) => b - a)[0];
    
    return `${max} ${min}`
}