import React, { useRef, useState } from "react";
import Slot from "./Slot";
import Board from "../Class/Board.js";

const Grid = () => {
  const [renderKey, setRenderKey] = useState(0);

  const slot = useRef(new Board())

  const handledata = (data, cell) => {
    
    if (data && cell) {
      slot.current.move(data.name, data.pos, cell);
      setRenderKey((key) => key + 1);
    }
  };

  slot.current.BoardHandle();
  slot.current.placeFigure();
  return (
    <div className="flex  justify-center w-screen h-screen ">
      <div className="w-7/12 h-10/12 bg-amber-400 grid grid-cols-1  grid-rows-8 border mt-10">
        {slot.current.grid.map((rows, index) => (
          <Slot
            className="flex"
            key={`${renderKey}-${index}`}
            cell={rows}
            index={index}
            slotdata={handledata}
            move={slot.current.move}
            convert={slot.current.convertPos2}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
