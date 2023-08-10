const gameboard = (() => {
    let board = new Array(9);
    
    const logBoard = () => {console.log(board)};
    
    const changeBoard = (symbol, boardIndex) => {
        board[boardIndex] = symbol;
    };

    return {logBoard, changeBoard};
})();

const playerFactory = (symbol) => {
    return {symbol};
}

const playerOne = playerFactory('X');
const playerTwo = playerFactory('O');

gameboard.changeBoard(playerOne.symbol, 8);
gameboard.logBoard();
