import { createSignal } from "solid-js";
import Tile from "./Tile";

const boardArr = new Array(9).fill("");

function Board() {
  const [currentTurn, setCurrentTurn] = createSignal("X");
  const [currentBoard, setCurrentBoard] = createSignal(boardArr);

  const toggleTurn = () => {
    setCurrentTurn(currentTurn() === "X" ? "O" : "X");
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <div class='gameboard'>
          {boardArr.map((_, index) => (
            <Tile
              toggleTurn={toggleTurn}
              boardState={currentBoard}
              currentTurn={currentTurn}
              id={index}
              boardSetter={setCurrentBoard}
            />
          ))}
        </div>
        <p>It is {currentTurn()}'s turn.</p>
      </div>
    </>
  );
}
export default Board;
