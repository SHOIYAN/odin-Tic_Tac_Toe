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

const gameController = (function () {
    let currentPlayer = 1;
    let gameOver = false;
    let roundCount = 0;
    
    function checkGame() {
        if (gameOver) {
            resetGame();
        }else{
            roundCount++;
        }
    }
    function resetGame() {
        gameBoard.reset();
        gameOver = false;
        roundCount = 0;
        currentPlayer = 1;
    }
    function update(index){
        gameBoard.updateBoard(index,players.getSign(currentPlayer));
    }
    function checkStatus(){
        if (roundCount > 9) return;

    }
    function switchPlayer(){
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
    function playRound(index) {
        checkGame();
        update(index);
        if (checkStatus()) {
            gameOver = true;
            return;
        }
        switchPlayer();
    }
    return { playRound, resetGame};
})();