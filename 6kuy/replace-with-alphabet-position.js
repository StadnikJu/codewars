// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.



function alphabetPosition(text) {
    text = text.toLowerCase().split("");
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const result = [];

    for(let i = 0; i < text.length; i++){
       const letter = alphabet.findIndex((e) => e === text[i]);
       if(letter !== -1) {
        result.push(letter + 1);
       }
    }
    
    return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));