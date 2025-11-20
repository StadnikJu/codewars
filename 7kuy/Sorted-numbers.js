// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: 
// a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

function isSortedAndHow(array) {
    let sortArrayMax = [...array].sort((a, b) => a - b);
    let sortArrayMin = [...array].sort((a, b) => b - a);

    if (array.every((v, i) => v === sortArrayMax[i])) return "yes, ascending";
    if (array.every((v, i) => v === sortArrayMin[i])) return "yes, descending";
    return "no";
}
