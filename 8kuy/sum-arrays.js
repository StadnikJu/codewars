
let arr = [-1, 54, 64, 2, 4];

function sum (numbers) {

    if(numbers.length === 0) {
        return 0;
    } 

    let sum = 0;

        for(let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }
    
    return sum;
}