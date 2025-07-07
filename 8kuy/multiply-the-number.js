/* Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹) */


// SOLUTION

function multiply(number){
   let aps = Math.abs(number);
   let count = 0;
   while(aps > 0) {
     aps = Math.floor(aps/10);
     count = count + 1;
   }
  return number * 5**count;
}