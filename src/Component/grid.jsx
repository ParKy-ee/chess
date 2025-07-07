import React, { useEffect, useRef, useState } from "react";
import Slot from "./Slot";
import Board from "../Class/Board.js";

const Grid = () => {
  const [renderKey, setRenderKey] = useState(0);

  const slot = useRef(new Board());
  useEffect(() => {
    slot.current.BoardHandle();
    slot.current.placeFigure();
  }, []);

  const [grid, setGrid] = useState(slot.current.grid);

  const handledata = (data, TARGET_CELL) => {
    if (data && TARGET_CELL) {
      slot.current.move(data.name, data.pos, TARGET_CELL);
      setGrid(...slot.current.grid);
      setRenderKey((key) => key + 1);
    }
  };

  return (
    <div className="flex  justify-center w-screen h-screen ">
      <div className="w-7/12 h-10/12 bg-amber-400 grid grid-cols-1  grid-rows-8 border mt-10">
        {grid.map((rows, index) => (
          <Slot
            className="flex"
            key={`${renderKey}-${index}`}
            cell={[...rows]}
            index={index}
            getData={handledata}
            move={slot.current.move}
            convert={slot.current.convertPos2}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
