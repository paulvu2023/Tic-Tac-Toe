const gameboard = (() => {
    let board = new Array(9);
    
    const updateBoard = () => {
        for (let i = 0; i < 9; i++){
            const currentSquare = document.querySelectorAll('.square')[i];
            if (board[i] == 'X' || board[i] == 'O') {
                currentSquare.textContent = board[i];
            }
        }
    };

    const logBoard = () => {console.log(board)};
    
    const changeBoardArray = (symbol, boardIndex) => {
        board[boardIndex] = symbol;
        updateBoard();
        logBoard();
    };

    const checkEmptySquare = (square) => {
        if (board[square] == undefined){
            return true;
        } else {
            return false;
        }
    };

    return {changeBoardArray, checkEmptySquare};
})();

const playerFactory = (symbol) => {
    return {symbol};
}

const playerOne = playerFactory('X');
const playerTwo = playerFactory('O');

let player1Turn = true; // If it is true then it's player 1's turn, otherwise it's player 2's turn

squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (gameboard.checkEmptySquare(square.value) == false) {

        } else {
            if (player1Turn == true) {
                gameboard.changeBoardArray(playerOne.symbol, square.value);
                player1Turn = false;
            } else if (player1Turn == false) {
                gameboard.changeBoardArray(playerTwo.symbol, square.value);
                player1Turn = true;
            }
        }
    });
});

