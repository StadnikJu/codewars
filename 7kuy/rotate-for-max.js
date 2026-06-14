// Write function max_rot(n) which given a positive 
// integer n returns the maximum number you got doing rotations 
// similar to the above example.

function maxRot(n) {
    let str = String(n); 
    let result = str;

    for (let i = 0; i < str.length; i++) {
        let left = str.slice(0, i); 
        let right = str.slice(i);

        right = right.slice(1) + right.slice(0, 1);

        str = left + right;

        if (str > result) {
            result = str;
        }
    }

    return Number(result);
}

