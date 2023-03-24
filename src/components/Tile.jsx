import { createSignal } from "solid-js";

function Tile(props) {
  const [tileValue, setTileValue] = createSignal("");
  const [tileHover, setTileHover] = createSignal("");

  const winningTiles = [
    "0,1,2",
    "3,4,5",
    "6,7,8",
    "0,3,6",
    "1,4,7",
    "2,5,8",
    "0,4,8",
    "2,4,6",
  ];

  const checkForWinner = (boardState) => {
    return winningTiles.some((combination) => {
      const [a, b, c] = combination.split(",");
      return (
        boardState[a] === boardState[b] &&
        boardState[b] === boardState[c] &&
        boardState[a] !== ""
      );
    });
  };

  const handleClick = () => {
    if (!tileValue()) {
      setTileValue(props.currentTurn());
      props.toggleTurn();
      props.boardSetter((prevBoard) => {
        const updatedBoard = [...prevBoard];
        updatedBoard[props.id] = props.currentTurn();
        return updatedBoard;
      });
    }
  };

  return (
    <button
      class={`tile ${props.currentTurn()} ${!tileValue() ? "tile-hover" : ""}`}
      onClick={handleClick}
      onmouseenter={() => {
        if (!tileValue()) {
          setTileHover(props.currentTurn());
        }
      }}
      onmouseleave={() => setTileHover("")}
    >
      {tileHover() || tileValue()}
    </button>
  );
}

export default Tile;
