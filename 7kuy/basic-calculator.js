function calculate(a, operator, b) {
    if(operator === "+") {
        return a + b;
    } else if(operator === "-") {
        return a - b;
    } else if(operator === "*") {
        return a * b;
    } else if(operator === "/" ) {
        if(b === 0) {
            return null;
        }
        return a / b; 
    } else {
        return null;
    }
}