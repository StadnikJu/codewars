// You are given an array (which will have a length of at least 3,
//  but could be very large) containing integers. The array is either
//  entirely comprised of odd integers or entirely comprised of even 
// integers except for a single integer N. Write a method that takes 
// the array as an argument and returns this "outlier" N.



function findOutlier(integers){
    let N = []; 
    let M = [];
    for(let i = 0; i < integers.length; i++) {
        if(integers[i] % 2 === 0) {
            N.push(integers[i]);
        } else {
            M.push(integers[i]);
        }
    }

    if(N.length === 1) {
        return N[0]
    } else if (M.length === 1) {
        return M[0]
    }
}




// function findOutlier(integers){
//     return integers.filter(s => s % 2 === 0).length === 1 ? integers.filter(s => s % 2 === 0)[0] : integers.filter(s => s % 2 !== 0)[0];
// }