const boardSize = 4;
const players = ['X', 'O'];
let currentPlayer = 0;
let board = [];

function createBoard() {
  const boardElement = document.getElementById('board');
  for (let i = 0; i < boardSize; i++) {
    board.push(new Array(boardSize).fill(''));
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', i);
      cell.setAttribute('data-y', j);
      cell.addEventListener('click', handleCellClick);
      boardElement.appendChild(cell);
    }
  }
}

function handleCellClick(event) {
  const x = parseInt(event.target.getAttribute('data-x'));
  const y = parseInt(event.target.getAttribute('data-y'));

  if (board[x][y] === '') {
    board[x][y] = players[currentPlayer];
    event.target.textContent = players[currentPlayer];

    if (checkWin(x, y)) {
      setTimeout(() => {
        alert(`Player ${players[currentPlayer]} wins!`);
        resetGame();
      }, 100);
    } else {
      currentPlayer = (currentPlayer + 1) % players.length;
    }
  }
}

function checkWin(x, y) {
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1],
  ];

  for (const [dx, dy] of directions) {
    let count = 1;
    for (let i = 1; i < 3; i++) {
      const newX = x + dx * i;
      const newY = y + dy * i;

      if (
        newX >= 0 &&
        newX < boardSize &&
        newY >= 0 &&
        newY < boardSize &&
        board[newX][newY] === players[currentPlayer]
      ) {
        count++;
      } else {
        break;
      }
    }

    for (let i = 1; i < 3; i++) {
      const newX = x - dx * i;
      const newY = y - dy * i;

      if (
        newX >= 0 &&
        newX < boardSize &&
        newY >= 0 &&
        newY < boardSize &&
        board[newX][newY] === players[currentPlayer]
      ) {
        count++;
      } else {
        break;
      }
    }

    if (count >= 3) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  board = new Array(boardSize).fill('').map(() => new Array(boardSize).fill(''));
  currentPlayer = 0;
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.textContent = '';
  }
}

createBoard();
