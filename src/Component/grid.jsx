import React, { useEffect, useRef, useState } from "react";
import Slot from "./Slot";
import Board from "../Class/Board.js";

const Grid = () => {
  const [renderKey, setRenderKey] = useState(0);
  const [cuurentTurn, setCurrentTurn] = useState("W");

  const slot = useRef(new Board());

  const [grid, setGrid] = useState(slot.current.grid);
  const inCheck = slot.current.isCheck(cuurentTurn);

  useEffect(() => {
    slot.current.BoardHandle();
    slot.current.placeFigure();
    setGrid([...slot.current.grid]);
  }, []);

  const handledata = (data, TARGET_CELL) => {
    if (!data || !TARGET_CELL) return;

    if (inCheck) {
      const pos = slot.current.convertPos(TARGET_CELL);
      const row = pos[0];
      const col = pos[1];

      //เดิน k หลบ
      if (
        data.name === "K" &&
        inCheck.some((item) => item[0] === row && item[1] === col)
      ) {
        return;
      }

      // เดินมาบัง
      if (!inCheck.some((item) => item[0] === row && item[1] === col)) {
        return;
      }
    }

    if (data.name === "K") {
      if (data.side === "W" && TARGET_CELL === "g1" && data.pos === "e1") {
        const ca_w = slot.current.castle(data.name, data.pos, TARGET_CELL);
        setGrid([...slot.current.grid]);
        setRenderKey((key) => key + 1);
        if (ca_w) {
          setCurrentTurn((prev) => (prev === "W" ? "B" : "W"));
        }
        return;
      }
      if (data.side === "B" && TARGET_CELL === "g8" && data.pos === "e8") {
        const ca_b = slot.current.castle(data.name, data.pos, TARGET_CELL);
        setGrid([...slot.current.grid]);
        setRenderKey((key) => key + 1);
          if (ca_b) {
          setCurrentTurn((prev) => (prev === "W" ? "B" : "W"));
        }
        return;
      }
    }

    if (data && TARGET_CELL) {
      if (data.side === cuurentTurn) {
        var moveSucess = slot.current.move(data.name, data.pos, TARGET_CELL);
        setGrid([...slot.current.grid]);
        setRenderKey((key) => key + 1);
      } else {
        console.log("not ur trun");
        return;
      }
       if (moveSucess) {
      setCurrentTurn((prev) => (prev === "W" ? "B" : "W"));
    }
    }
   
  };

  return (
    <div className="flex  justify-center w-screen h-screen ">
      <div className="w-7/12 h-10/12 bg-amber-400 grid grid-cols-1  grid-rows-8 border mt-10">
        {grid.map((rows, index) => (
          <Slot
            className="flex"
            key={`${renderKey}-${index}`}
            cell={rows}
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
