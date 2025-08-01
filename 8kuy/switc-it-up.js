//When provided with a number between 0-9, 
// return it in words. Note that the input is guaranteed
// to be within the range of 0-9.


function switchItUp(number){
    const words = [
        "Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ]

    return words[number];
}