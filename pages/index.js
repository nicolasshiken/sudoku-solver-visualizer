import { solve } from "../functions/solve";
import { useState } from "react";
import { renderChanges, renderBoard } from "../functions/renderChanges";
import BoardItem from "../components/BoardItem";
import Options from "../components/Options";
import Nav from "../components/Nav";

export default function Home() {
  /*   const currentBoard = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7],
  ]; */

  const currentBoard = [
    [0, 1, 0, 0, 8, 5, 0, 6, 0],
    [4, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 9, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 1],
    [8, 0, 1, 4, 0, 0, 0, 5, 0],
    [6, 0, 0, 0, 0, 0, 2, 0, 0],
    [2, 5, 0, 0, 9, 0, 0, 4, 0],
    [0, 6, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 8, 6],
  ];

  const [renderedBoard, setRenderedBoard] = useState(renderBoard(currentBoard));
  const [test, setTest] = useState(false);
  const [solved, setSolved] = useState(false);
  const [speed, setSpeed] = useState(50);

  const handleReset = () => {
    setSolved(false);
    setRenderedBoard(renderBoard(currentBoard));
  };

  const handleSolve = async () => {
    /*     const changes = solve(
      [
        [7, 8, 0, 4, 0, 0, 1, 2, 0],
        [6, 0, 0, 0, 7, 5, 0, 0, 9],
        [0, 0, 0, 6, 0, 1, 0, 7, 8],
        [0, 0, 7, 0, 4, 0, 2, 6, 0],
        [0, 0, 1, 0, 5, 0, 9, 3, 0],
        [9, 0, 4, 0, 6, 0, 0, 0, 5],
        [0, 7, 0, 3, 0, 0, 0, 1, 2],
        [1, 2, 0, 0, 0, 7, 4, 0, 0],
        [0, 4, 9, 2, 0, 6, 0, 0, 7],
      ],
      []
    ); */
    const changes = await solve(
      [
        [0, 1, 0, 0, 8, 5, 0, 6, 0],
        [4, 0, 0, 3, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 9, 0, 0],
        [0, 3, 0, 0, 0, 0, 0, 0, 1],
        [8, 0, 1, 4, 0, 0, 0, 5, 0],
        [6, 0, 0, 0, 0, 0, 2, 0, 0],
        [2, 5, 0, 0, 9, 0, 0, 4, 0],
        [0, 6, 0, 0, 0, 7, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 8, 6],
      ],
      []
    );
    renderChanges(changes, renderedBoard, setTest, speed);
    setSolved(true);
  };

  return (
    <>
      <Nav />
      <Options
        solved={solved}
        handleReset={handleReset}
        handleSolve={handleSolve}
        setSpeed={setSpeed}
      />
      <div className="board">
        {renderedBoard.map((row) =>
          row.map((item, idx) => {
            const { position, isValid, isZero, value, isInitial } = item;
            return (
              <BoardItem
                key={idx}
                position={position}
                isValid={isValid}
                isZero={isZero}
                value={value}
                isInitial={isInitial}
              />
            );
          })
        )}
      </div>
    </>
  );
}
