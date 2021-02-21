const BoardItem = ({ isValid, value, isZero, position, isInitial }) => {
  const isTop =
    position[0] === 2 || position[0] === 5 || position[0] === 8 ? true : false;
  const isBottom =
    position[0] === 0 || position[0] === 3 || position[0] === 6 ? true : false;
  const isLeft =
    position[1] === 2 || position[1] === 5 || position[1] === 8 ? true : false;
  const isRight =
    position[1] === 0 || position[1] === 3 || position[1] === 6 ? true : false;

  const className = `board-item 
    ${!isValid ? "invalid current" : undefined} 
    ${isZero ? "zero" : undefined}
    ${isValid && !isInitial && !isZero ? "current" : undefined}
    ${isTop ? "top" : undefined}
    ${isBottom ? "bottom" : undefined}
    ${isLeft ? "left" : undefined}
    ${isRight ? "right" : undefined}
    ${isInitial ? "initial" : undefined}
  `;

  return <div className={className}>{value !== 0 ? value : undefined}</div>;
};

export default BoardItem;
