// Given: a sequence of different type of values (number, string, boolean). 
// You should return an object with a separate properties for each of types presented in input. 
// Each property should contain an array of corresponding values.
// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected


function separateTypes(input) {
    const outp = {
        number: [],
        string: [],
        boolean: []
    }

    for(let i = 0; i < input.length; i++) {

        let element = input[i];
        if(typeof element === "number") {
            outp.number.push(element);
        } else if(typeof element === "string") {
            outp.string.push(element);
        } else if(typeof element === "boolean") {
            outp.boolean.push(element);
        } 
    }

    if(outp.number.length === 0) {
        delete outp.number;
    } 

    if(outp.string.length === 0) {
        delete outp.string;
    } 

    if(outp.boolean.length === 0) {
        delete outp.boolean;
    } 

    return outp;
}
