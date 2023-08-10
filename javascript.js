const gameboard = (() => {
    let board = new Array(9);

    const updateBoard = () => {
        for (let i = 0; i < 9; i++){
            const currentSquare = document.querySelectorAll('.square')[i];
            if (board[i] == 'X' || board[i] == 'O') {
                currentSquare.textContent = board[i];
            }
        }
        if (checkForWin(playerOne.symbol) == true) {
            console.log('1 win')
        } else if (checkForWin(playerTwo.symbol) == true) {
            console.log('2 win');
        }
    };

    const changeBoardboarday = (symbol, boardIndex) => {
        board[boardIndex] = symbol;
        updateBoard();
        logBoard();
    };

    const logBoard = () => {console.log(board)};
    
    const checkEmptySquare = (square) => {
        if (board[square] == undefined){
            return true;
        } else {
            return false;
        }
    };

    const checkHorizontalWin = (symbol, i) => {
        if (board[i] == symbol && board[i+1] == symbol && board[i+2] == symbol) {
            return true;
        }
        return false;
    };

    const checkVerticalWin = (symbol, i) => {
        if (board[i] == symbol && board[i+3] == symbol && board[i+6] == symbol) {
            return true;
        }
        return false;
    };

    const checkBackslashWin = (symbol, i) => {
        if (board[i] == symbol && board[i+4] == symbol && board[i+8] == symbol) {
            return true;
        }
        return false;
    };

    const checkSlashWin = (symbol, i) => {
        if (board[i] == symbol && board[i-2] == symbol && board[i-4] == symbol) {
            return true;
        }
        return false;
    };

    const checkForWin = (symbol) => {
        let win = false;
        for (let i = 0; i <= 6; i += 3) {
            if (checkHorizontalWin(symbol, i) == true) {
                win = true;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (checkVerticalWin(symbol, i) == true) {
                win = true;
            }
        }
        if (checkBackslashWin(symbol, 0) == true) {
            win = true;
        } else if (checkSlashWin(symbol, 6) == true) {
            win = true;
        }
        return win;
    };

    return {changeBoardboarday, checkEmptySquare};
})();

const playerFactory = (symbol) => {
    return {symbol};
}

const playerOne = playerFactory('X');
const playerTwo = playerFactory('O');

let playerOneTurn = true; // If it is true then it's player 1's turn, otherwise it's player 2's turn

squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (gameboard.checkEmptySquare(square.value) == false) {

        } else {
            if (playerOneTurn == true) {
                gameboard.changeBoardboarday(playerOne.symbol, square.value);
                playerOneTurn = false;
            } else if (playerOneTurn == false) {
                gameboard.changeBoardboarday(playerTwo.symbol, square.value);
                playerOneTurn = true;
            }
        }
    });
});

