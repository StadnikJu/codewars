// Given an array of numbers and an index, 
// return either the index of the smallest number 
// that is larger than the element at the given index, 
// or -1 if there is no such index ( or, where applicable, 
// Nothing or a similarly empty value ).

// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

function leastLarger(a, i) {
    const num = a[i]; // 2
    let result = -1;
    let minValue = Infinity;

    for (let j = 0; j < a.length; j++) {
        if (a[j] > num && a[j] < minValue) {
            minValue = a[j];
            result = j; 
        }
    }

    return result;
}