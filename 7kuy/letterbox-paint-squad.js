// You and a group of friends are earning some extra money in the 
// school holidays by re-painting the numbers on people's letterboxes 
// for a small fee.
// Since there are 10 of you in the group each person just concentrates
//  on painting one digit! For example, somebody will paint only the 1's, 
// somebody else will paint only the 2's and so on...
// But at the end of the day you realise not everybody did the same amount of work.
// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.
// Kata Task
// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.
// Example
// For start = 125, and end = 132


let paintLetterboxes = function(start, end) {
    let arr = [];
    for(let i = start; i <= end; i++) {
        arr.push(String (i));
    }
    let newArr = arr.join("").split("");
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(newArr)
    for(let i = 0; i < newArr.length; i++) {
        result[Number (newArr[i])]++;
    }

    return result;
}

paintLetterboxes(123, 129)