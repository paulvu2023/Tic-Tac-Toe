const gameboard = (() => {
    let board = new Array(9);
    
    const updateBoard = () => {
        for (let i = 0; i < 9; i++){
            const currentSquare = document.querySelectorAll('.square')[i];
            if (board[i] == 'X' || board[i] == 'O') {
                currentSquare.textContent = board[i];
            }
        }
    }

    const logBoard = () => {console.log(board)};
    
    const changeBoardArray = (symbol, boardIndex) => {
        board[boardIndex] = symbol;
    };

    return {updateBoard, logBoard, changeBoardArray};
})();

const playerFactory = (symbol) => {
    return {symbol};
}

const playerOne = playerFactory('X');
const playerTwo = playerFactory('O');

gameboard.changeBoardArray(playerOne.symbol, 8);
gameboard.changeBoardArray(playerTwo.symbol, 7);
gameboard.logBoard();
gameboard.updateBoard();
