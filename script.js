const Player = (name, token) => {
  
  return {name, token}
}

const firstPlayer = Player('First', 'X');
const secondPlayer = Player('Second', 'O');

const gameBoard =(() => {
  // board: ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'O', 'X'] // try this out later
  let board = ['', '', '', '', '', '', '', '', ''];
  const getBoard = () => board;
  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
  }
  
  return {
    getBoard,
    resetBoard
  }
})();

const gameController = (() => {
  let activePlayer = firstPlayer;
  const getActivePlayer = () => activePlayer
  const swapActivePlayer = () => {
    activePlayer = activePlayer === firstPlayer ? secondPlayer : firstPlayer;
    return activePlayer;
  }
  // win conditions
  const checkWinner = (index, board) => {
  if ((board[0] === board[1] && board[1] === board[2] && board[0] !== '') ||
  (board[3] === board[4] && board[4] === board[5] && board[3] !== '') ||
  (board[6] === board[7] && board[7] === board[8] && board[6] !== '') ||
  (board[0] === board[3] && board[3] === board[6] && board[0] !== '') ||
  (board[1] === board[4] && board[4] === board[7] && board[1] !== '') ||
  (board[2] === board[5] && board[5] === board[8] && board[2] !== '') ||
  (board[0] === board[4] && board[4] === board[8] && board[0] !== '') ||
  (board[2] === board[4] && board[4] === board[6] && board[2] !== '')) return board[index]
  else if (!board.includes('')) return 'Tie'}

  
  
  

  return {
    swapActivePlayer, getActivePlayer, checkWinner
  }
  
})();

const displayController = (() => {
  const container = document.querySelector('.container');
  const board = gameBoard.getBoard();
  let playerDisplay = document.querySelector('h1')
  
  board.forEach((element, index) => {
    const handleClick = () => {
      updateBoard(cell, index)
    }
    
    
    let winner = gameController.checkWinner(index, board)
    const cell = document.createElement('button')
    cell.textContent = element;
    cell.classList.add('cell')
    container.append(cell) 
    cell.addEventListener('click', handleClick) 

 //   return { cell, index }
    
  })
  
  
  
  const updateBoard = (cell, index) => {
    
    let activePlayer = gameController.getActivePlayer();
    if (board[index] === '') {
      board[index] = activePlayer.token
      cell.textContent = activePlayer.token;
      let winner = gameController.checkWinner(index, board)
     if (winner) {
       const cells = container.querySelectorAll('.cell')
       cells.forEach(cell => {
        cell.removeEventListener('click', handleClick())
       })
       console.log(winner)
       console.log(cells)
        //        const cells = document.querySelectorAll('.cell')
//        cells.forEach(cell => {cell.removeEventListener('click', handleClick)})
//      cells.removeEventListener('click', handleClick)
//      cells.removeEventListener('click', handleClick)
}

activePlayer = gameController.swapActivePlayer();
playerDisplay.textContent = `${activePlayer.name} player's turn`
}
//   let winner = gameController.checkWinner(index, board)
//    return winner

}  

})();  




