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

gameboard.changeBoard('X', 8);
gameboard.logBoard();
