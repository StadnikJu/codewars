// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


function sumMul(n,m){

    if (n <= 0 || m <= 0) return "INVALID";

    let sum = 0;

      for (let i = n; i < m; i += n) {
        sum += i;
    }  

    return sum;
}