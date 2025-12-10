//To organize your code, make of all your functions methods of a class called HTMLGen. 
// Tag functions should be named after the tag of the element they create. 
// Each function will take one argument, a string, which is the inner HTML of the element to be created. 
// The functions will return the string for the appropriate HTML element.

class HTMLGen {
    a (params) {
        return `<a>${params}</a>`
    }

    b (params) {
        return `<b>${params}</b>`
    }

    p (params) {
        return `<p>${params}</p>`
    }

    body (params) {
        return `<body>${params}</body>`
    }

    div (params) {
        return `<div>${params}</div>`
    }

    span (params) {
        return `<span>${params}</span>`
    }

    title (params) {
        return `<title>${params}</title>`
    }

    comment (params) {
        return `<!--${params}-->`
    }
}


