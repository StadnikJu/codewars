// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).
// Making a digital chessboard I think is an interesting way of visualising how loops can work together.
// Your task is to write a function that takes two integers rows and columns and 
// returns a chessboard pattern as a two dimensional array.


function chessBoard(rows, columns) {
    let newArr = [];
    for(let i = 0; i < rows; i++) {
        newArr[i] = [];
        for(let j = 0; j < columns; j++) {
            if(i % 2 === 0 && j % 2 === 0) {
                newArr[i].push('O');
            } else if(i % 2 === 0 && j % 2 !== 0){
                newArr[i].push('X');
            } else if(i % 2 !== 0 && j % 2 === 0) {
                newArr[i].push('X');
            } else {
                newArr[i].push('O');
            }
        }
    }

    return newArr;
}

chessBoard(3, 4)