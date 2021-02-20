export const isValid = (board, number, position) => {
  let i;
  for (i = 0; i < board[0].length; i++) {
    if (board[position[0]][i] === number && position[1] !== i) return false;
  }

  for (i = 0; i < board.length; i++) {
    if (board[i][position[1]] === number && position[0] !== i) return false;
  }

  let squareX = Math.floor(position[1] / 3);
  let squareY = Math.floor(position[0] / 3);

  for (i = squareY * 3; i < squareY * 3 + 3; i++) {
    let j;
    for (j = squareX * 3; j < squareX * 3 + 3; j++) {
      if (board[i][j] === number && [i, j] !== position) return false;
    }
  }
  return true;
};
