// Write a function that takes an array 
// of strings as an argument and returns a sorted 
// array containing the same strings, ordered from shortest to longest.


function sortByLength (array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length-1; j++) {
            if(array[j].length > array[j + 1].length){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}