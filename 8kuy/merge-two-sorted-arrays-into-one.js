// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. 
// Your task is to merge them into a single array, ensuring that:
// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

 

function mergeArrays(arr1, arr2) {

    if(arr1.length === 0 && arr2.length === 0 ) {
        return [];
    };

    let marged = arr1.concat(arr2);
    let newArr = [];

    for(let i = 0; i < marged.length; i++) {
        if(!newArr.includes(marged[i])) {
            newArr.push(marged[i]);
        }
    };

    for(let i = 0; i < newArr.length; i++) {

        for(let j = 0; j < newArr.length-1; j++){
            if(newArr[j] > newArr[j+1]){
                let temp = newArr[j]; 
                newArr[j] = newArr[j + 1]; 
                newArr[j + 1] = temp; 
            }
        }
    };
    
    return newArr; 
};


