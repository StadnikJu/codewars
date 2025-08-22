// Please write a function that sums a list, but ignores any duplicated items in the list.
// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

let arr = [1, 10, 3, 10, 10, 5, 5, 5];

function sumNoDuplicates(numList) {
    let sum = 0;
    let newArr = [];
    for(let i = 0; i < numList.length; i++){
        for(let j = 1; j < numList.length; j++){
            if(numList[i] === numList[j] && i !== j) {
                newArr.push(numList[i])
            } 
        }
    }
    numList = numList.filter(el => !newArr.includes(el))
    return numList.reduce((acc, curr) => acc+curr, 0)

}


console.log(sumNoDuplicates(arr));





