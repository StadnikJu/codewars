// The function will be given a variable amount of arguments, each one being a letter to add.


function addLetters(...letters) {
    if(letters.length === 0) {
        return "z";
    }

    let sum = 0;
    
    for(let i = 0; i < letters.length; i++) {
        sum = sum + letters[i].charCodeAt(0) - 96;
    }

    sum = (sum - 1) % 26 + 1;

    return String.fromCharCode(sum + 96);
}
