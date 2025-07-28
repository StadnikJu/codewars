// Your task is to make a function that can take 
// any non-negative integer as an argument and return it with its 
// digits in descending order. Essentially, rearrange the
//  digits to create the highest possible number.


function descendingOrder(n){

    let newN = `${n}`.split("");
   
    for(let i = 0; i < newN.length; i++) {
        for(let j = 0; j < newN.length -1; j++) {
            if(Number(newN[j]) < Number(newN[j + 1])) {
                let temp = newN[j];
                newN[j] = newN[j + 1];
                newN[j + 1] = temp;
            }
        }
    }

    return Number(newN.join(""));
}

