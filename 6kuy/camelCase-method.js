// Write a method (or function, depending on the language)
// that converts a string to camelCase, that is, all words must have 
// their first letter capitalized and spaces must be removed.


function camelCase (sentence){
  let result = sentence.split(" ");
  for(let i = 0; i < result.length; i++) {
    if(result[i]) {
        result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }
  }
  return result.join("");
}

console.log(camelCase ("hello case"))