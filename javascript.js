const gameboard = (() => {
    let board = new Array(9);

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = undefined;
            const currentSquare = document.querySelectorAll('.square')[i];
            currentSquare.textContent = '';
        }
        document.querySelector('h1').textContent = 'Tic Tac Toe';
    }

    const updateBoard = () => {
        for (let i = 0; i < 9; i++){
            const currentSquare = document.querySelectorAll('.square')[i];
            if (board[i] == 'X' || board[i] == 'O') {
                currentSquare.textContent = board[i];
            }
        }
        if (checkForWin(playerOne.symbol) == true) {
            if (playerOne.name == '') {
                document.querySelector('h1').textContent = 'X Wins!';
            } else {
                document.querySelector('h1').textContent = `${playerOne.name} Wins!`;
            }
        } else if (checkForWin(playerTwo.symbol) == true) {
            if (playerTwo.name == '') {
                document.querySelector('h1').textContent = 'O Wins!';
            } else {
                document.querySelector('h1').textContent = `${playerTwo.name} Wins!`;
            }
        }

        playerOne.name = document.querySelector('#X').value;
        playerTwo.name = document.querySelector('#O').value;
    };

    const changeBoardArray = (symbol, boardIndex) => {
        board[boardIndex] = symbol;
        updateBoard();
    };
    
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

    return {resetBoard, changeBoardArray, checkEmptySquare};
})();

const playerFactory = (symbol) => {
    let name = '';

    const inputField = document.querySelector(`#${symbol}`);
    const form = document.querySelector(`#${symbol}-form`);

    form.onsubmit = (event) => {
        event.preventDefault();
        name = inputField.value;
    };

    if (name == '') {
        name = `Player ${symbol}`;
    }

    return {symbol, name};
}

let playerOneTurn = true; // If it is true then it's player 1's turn, otherwise it's player 2's turn

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (gameboard.checkEmptySquare(square.value) == false) {

        } else {
            if (playerOneTurn == true) {
                gameboard.changeBoardArray(playerOne.symbol, square.value);
                playerOneTurn = false;
            } else if (playerOneTurn == false) {
                gameboard.changeBoardArray(playerTwo.symbol, square.value);
                playerOneTurn = true;
            }
        }
    });
});

const playerOne = playerFactory('X');
const playerTwo = playerFactory('O');
resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', gameboard.resetBoard);