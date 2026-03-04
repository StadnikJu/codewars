// In this Kata, you will be given a string that may have mixed 
// uppercase and lowercase letters and your task is to convert that 
// string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.




function solve(words){
    let bigLater = 0;
    let smallLeter = 0;
    let newWords = words.split("");

    for(let i = 0; i < newWords.length; i++) {
        let char = newWords[i];
        if(char.match(/[a-zA-Z]/)) {
            if (char === char.toUpperCase()) {
                bigLater++;
            } else {
                smallLeter++;
            }
        } 
    }

    if(smallLeter >= bigLater) {
        words = words.toLowerCase();
    } else{
        words = words.toUpperCase();
    } 

    return words;
}
