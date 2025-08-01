//Implement a function which convert the
//  given boolean value into its string representation.


const str1 = "Hello World";
const str2 = "World";

function confirmEnding(str1, str2) {
  
  const ending = str1.slice(str1.length - str2.length); 
  return ending === str2;
}
console.log(confirmEnding(str1, str2));






 

