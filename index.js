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
    function getName(playerNum) {
        return playerNum === 1 ? player1.name : player2.name;
    }
    function getSign (playerNum) {
        return playerNum === 1 ? player1.sign : player2.sign;
    }
    return {
        getName,
        getSign
    }
})();