import { createSignal } from "solid-js";
import Tile from "./Tile";
import styles from "./Board.module.css";

const boardArr = new Array(9).fill("");
;

function Board() {
  const [currentTurn, setCurrentTurn] = createSignal("X");
  const [currentBoard, setCurrentBoard] = createSignal(boardArr.map(()=>""));
  const toggleTurn = () => {
    setCurrentTurn(currentTurn() === "X" ? "O" : "X");
  };

  return (
    <>
      <div
        class={styles.center}
      >
        <div class='gameboard'>
          {boardArr.map((item, index) => (
            <Tile
              toggleTurn={toggleTurn}
              currentTurn={currentTurn}
              id={index}
              boardState={currentBoard}
              boardSetter={setCurrentBoard}
              data-value={item}
            />
          ))}
        </div>
        <p>It is {currentTurn()}'s turn.</p>
      </div>
    </>
  );
}
export default Board;

