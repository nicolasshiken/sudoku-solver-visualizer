export const renderBoard = (boardToRender) => {
  const board = [];
  for (let row = 0; row < boardToRender.length; row++) {
    const currentRow = [];
    for (let col = 0; col < boardToRender.length; col++) {
      const value = boardToRender[row][col];
      const position = [row, col];
      const isZero = boardToRender[row][col] === 0 ? true : false;
      currentRow.push(
        createBoardItem({
          position,
          value,
          isInitial: true,
          isZero,
          isValid: true,
        })
      );
    }
    board.push(currentRow);
  }
  return board;
};

const createBoardItem = ({ position, value, isInitial, isZero, isValid }) => {
  return {
    position,
    isZero,
    value,
    isInitial,
    isValid,
  };
};

export const renderChanges = (changes, renderedBoard, setTest, speed) => {
  if (changes) {
    if (speed === 0) {
      for (let i = 0; i < changes.length; i++) {
        const change = changes[i];
        const boardToSolve = renderedBoard;
        const position = change.position;
        const row = position[0];
        const column = position[1];
        const currentRow = boardToSolve[row];

        currentRow.splice(column, 1, change);
        boardToSolve.splice(row, 1, currentRow);

        setTest((test) => !test);
      }
      return;
    }

    for (let i = 0; i < changes.length; i++) {
      setTimeout(() => {
        const change = changes[i];
        const boardToSolve = renderedBoard;
        const position = change.position;
        const row = position[0];
        const column = position[1];
        const currentRow = boardToSolve[row];

        currentRow.splice(column, 1, change);
        boardToSolve.splice(row, 1, currentRow);

        setTest((test) => !test);
      }, speed * i);
    }
    return;
  }
};
