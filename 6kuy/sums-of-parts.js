// The function parts_sums (or its variants in other languages) will take as parameter a list ls 
// and return a list of the sums of its parts as defined above.


function partsSums(ls) {
    let newLs = ls;
    let total = 0;
    let result = [];
  
    for(let i = 0; i < newLs.length; i++) {
        total = total + newLs[i];
    }

    result.push(total); 

    for(let i = 0; i < newLs.length; i++) {
        total = total - newLs[i]; 
        result.push(total); 
    }

    return result;
}

console.log(partsSums([1, 2, 3, 4]));