import { findEmpty } from "./findEmpty";
import { isValid } from "./isValid";

export const solve = (board, listOfChanges) => {
  const find = findEmpty(board);

  if (!find) return listOfChanges;

  var [row, column] = find;

  for (let i = 1; i < 10; i++) {
    if (isValid(board, i, [row, column])) {
      board[row][column] = i;

      listOfChanges.push({
        position: [row, column],
        value: i,
        isValid: true,
        isZer: false,
      });

      if (solve(board, listOfChanges)) {
        return listOfChanges;
      }

      board[row][column] = 0;
    }
    listOfChanges.push({
      position: [row, column],
      value: i,
      isValid: false,
      isZero: false,
    });
  }
  listOfChanges.push({
    position: [row, column],
    value: 0,
    isValid: true,
    isZero: true,
  });

  return false;
};
