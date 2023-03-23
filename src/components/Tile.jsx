import { createSignal } from "solid-js";

function Tile(props) {
  const [tileValue, setTileValue] = createSignal("");
  const [tileColor, setTileColor] = createSignal("");
  const [tileHover, setTileHover] = createSignal("");

  const handleClick = (e) => {
    if (!tileValue()) {
      setTileValue(props.currentTurn());
      props.toggleTurn();
      setTileHover("")
      console.log(props.id)
    }
  };

  return (
    <>
      <button
        class='tile'
        onClick={handleClick}
        onmouseenter={(e) => {
          if (tileValue() === "") {
            setTileHover(props.currentTurn());
          } else {
            setTileHover("");
          }
        }}
        onmouseleave={() => setTileHover("")}
      >
        {tileHover()}
        {tileValue()}
      </button>
    </>
  );
}
export default Tile;
