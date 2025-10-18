// Write a function that takes an array of unique integers and returns 
// the minimum number of integers needed to make the values of the array consecutive 
// from the lowest number to the highest number.


function consecutive(array) {
    array.sort((a,b) => a-b);
    if(array.length === 0 || array.length === 1) {
      return 0
    }
    let count = 0;
    for(let i = array[0]; i < array[array.length-1]; i++) {
      console.log(i)
        if(!array.includes(i)) {
            count++;
        }
    }
    return count;
}


// [4, 8, 6] --> 2
//Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]
