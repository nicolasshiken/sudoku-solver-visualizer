export const findEmpty = (board) => {
  let row;

  for (row = 0; row < board.length; row++) {
    let column;
    for (column = 0; column < board[0].length; column++) {
      if (board[row][column] === 0) return [row, column];
    }
  }

  return false;
};
