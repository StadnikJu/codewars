// Write a function which takes a number as input 
// and returns the sum of the absolute value of each of the number's decimal digits.




function sumDigits(number) {
    const newNumber = Math.abs(number).toString().split("");
    let sum = 0;

    for(let i = 0; i < newNumber.length; i++) {
        sum  = sum + Number(newNumber[i]);
    }
    
    return sum;
}

