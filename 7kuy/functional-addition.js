// Create a function add(n)/Add(n) which returns a function that always adds n to any number
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

function add(n) {
    const callback = (number) => {
        return number + n;
    }

    return callback;
}