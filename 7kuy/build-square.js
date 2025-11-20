// I will give you an integer. 
// Give me back a shape that is as long and wide as the integer.
//  The integer will be a whole number between 1 and 50.



function generateShape(integer){
    let symbol = "*";
    let line = symbol.repeat(integer);
    let haight = ""; 

    for (let i = 0; i < integer; i++) {
        haight += line;
        if (i < integer - 1) haight += "\n"
    }

    return hair;
}

