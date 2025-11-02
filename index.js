"use strict";

const gameBoard = (function() {
    let board = [null,null,null,null,null,null,null,null,null];
    function updateBoard (index,sign){
        if (index > 9 || index < 0) return;
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
    let winnerSign = null;

    const winChances = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    function getWinner() {
    return winnerSign;
    }
    function checkWin() {
        let board = gameBoard.getBoard();
            for (const chance of winChances) {
                    let [a,b,c] = chance;
                    if (board[a] != null && board[a] === board[b] && board[a] === board[c] ){
                        winnerSign = board[a];
                        return winnerSign;
                    }               
            }
        return false;
    }
    function resetGame() {
        gameBoard.reset();
        gameOver = false;
        roundCount = 0;
        currentPlayer = 1;
        winnerSign = null;
    }
    function update(index){
        gameBoard.updateBoard(index,players.getSign(currentPlayer));
    }
    function checkTie(){
        return roundCount >= 9 ;
    }
    function switchPlayer(){
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
    function playRound(index) {
            update(index);
            roundCount++;
            if (checkWin() || checkTie()){
                currentPlayer = 1;
                gameOver = true;
                return;
            };
            switchPlayer();
           
    }
    return { playRound, resetGame, getWinner};
})();

const displayController = (function () {
  const cells = document.querySelectorAll('.cell');
  const startBtn = document.querySelector('#startBtn');
  const resetBtn = document.querySelector('#resetBtn');
  const player1Input = document.querySelector('#player1Name');
  const player2Input = document.querySelector('#player2Name');
  const statusBar = document.querySelector('.status-bar');

  function renderBoard() {
    const board = gameBoard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index] ? board[index] : '';
    });
  }

  function updateStatus(message) {
    statusBar.textContent = message;
    statusBar.classList.add('active');
  }
  function handleCellClick(e) {
    const cell = e.target.closest('.cell');
    if (!cell) return;

    const index = parseInt(cell.dataset.index);
    const board = gameBoard.getBoard();

    if (board[index] || gameController.getWinner()) return;

    gameController.playRound(index);
    renderBoard();

    const winner = gameController.getWinner();
    if (winner) {
      updateStatus(`${winner} Wins!`);
    } else if (board.every(cell => cell !== null)) {
      updateStatus("It's a Tie!");
    }
    
  }
  function startGame() {
    const p1 = player1Input.value || 'Player 1';
    const p2 = player2Input.value || 'Player 2';
    updateStatus(`${p1}'s Turn`);
    gameBoard.reset();
    renderBoard();
  }
  function resetGame() {
    gameController.resetGame();
    renderBoard();
    updateStatus('Game reset. Ready to start again!');
  }
  cells.forEach(cell =>
    cell.addEventListener('click', handleCellClick)
  );
  startBtn.addEventListener('click', startGame);
  resetBtn.addEventListener('click', resetGame);

  renderBoard();

})();