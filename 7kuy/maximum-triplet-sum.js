// Given an array/list of integers, find the maximum sum of 3 DISTINCT array elements.

function maxTriSum(numbers){
    const array = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(!array.includes(numbers[i])) {
            array.push(numbers[i])
        }
    }

    let lastNum = array.sort((a, b) => a - b).slice(-3);

    for(let i = 0; i < lastNum.length; i++){
        sum = sum + lastNum[i];
    }

    return sum;
}