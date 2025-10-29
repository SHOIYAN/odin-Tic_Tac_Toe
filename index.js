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

const players = (function () {
    const player1 = {name:'Player 1', sign: 'X'};
    const player2 = {name:'Player 2', sign: 'O'};
    function getName(player) {
        return player.name;
    }
    function getSign (player) {
        return player.sign;
    }
    return {
        player1,
        player2,
        getName,
        getSign
    }
})();

