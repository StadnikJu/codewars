// You are going to be given a non-empty 
// string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.


function getMiddle(s) {
    if(s.length % 2 === 0) {
        let str = s.length / 2;
        return s[str-1] + s[str];
    } else if (s.length % 2 !== 0) {
        return s[(s.length - 1) / 2] 
    }
}
