"use strict";

const gameBoard = (function() {
    let board = [null,null,null,null,null,null,null,null];
    function updateBoard (index,sign){
        board[index] = sign;
    }
    function getBoard () {
        return board;
    };
    function reset () {
        board.forEach((square,index,arr) => arr[index] = null);
    }
    return {
        board,
        updateBoard,
        getBoard,
        reset 
    }
    
})();