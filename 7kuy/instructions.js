// Complete the function that returns the lyrics 
// for the song 99 Bottles of Beer as an array of strings: 
// each line should be a separate element - see the example at the bottom.

let sing = function () {
    let newArr = []
    for(let i = 99; i >= 3; i--) {
        newArr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
        newArr.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }

    newArr.push('2 bottles of beer on the wall, 2 bottles of beer.', 
                'Take one down and pass it around, 1 bottle of beer on the wall.', 
                '1 bottle of beer on the wall, 1 bottle of beer.',
                'Take one down and pass it around, no more bottles of beer on the wall.',
                'No more bottles of beer on the wall, no more bottles of beer.',
                'Go to the store and buy some more, 99 bottles of beer on the wall.'
            )
    return newArr;
};