import React from "react";
import Board from "../Class/Board";

const SHOW = {
  SHOWCOL: ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  SHOWROW: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"],
};

const Slot = ({ className = "", cell, index, getData, convert }) => {
  const slotPos = (slots) => {
    const slot = convert(slots);
    return slot;
  };

  const dragStart = (e) => {
    const Str_DATA = e.target.getAttribute("data-item");
    const JSON_DATA = JSON.parse(Str_DATA);
    if (JSON_DATA) {
      e.dataTransfer.setData("text/plain", JSON.stringify(JSON_DATA));
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragDrop = (e) => {
    e.preventDefault();
    const Str_DATA = e.dataTransfer.getData("text/plain");
    const JSON_DATA = JSON.parse(Str_DATA);
    getData(JSON_DATA, e.target.id);
  };

  const handlepicture = (item) => {
    let src = "";
    switch (item.Name) {
      case "B": {
        if (item.Side === "W") {
          src = "/figure_picture/LightBishop.png";
        } else if (item.Side === "B") {
          src = "/figure_picture/BlackBishop.png";
        }
        break;
      }
      case "N": {
        if (item.Side === "W") {
          src = "/figure_picture/LightKnigth.png";
        } else if (item.Side === "B") {
          src = "/figure_picture/BlackKnight.png";
        }
        break;
      }
      case "R": {
        if (item.Side === "W") {
          src = "/figure_picture/LightRook.png";
        } else if (item.Side === "B") {
          src = "/figure_picture/BlackRook.png";
        }
        break;
      }
      case "Q": {
        if (item.Side === "W") {
          src = "/figure_picture/LightQueen.png";
        } else if (item.Side === "B") {
          src = "/figure_picture/BlackQueen.png";
        }
        break;
      }
      case "K": {
        if (item.Side === "W") {
          src = "/figure_picture/LightKing.png";
        } else if (item.Side === "B") {
          src = "/figure_picture/BlackKing.png";
        }
        break;
      }
       case "P": {
        if (item.Side === "W") {
          src = "/figure_picture/LightPawn.png";
        } else if (item.Side === "B") {
          src = "/figure_picture/BlackPawn.png";
        }
        break;
      }
    }
    return src;
  };

  const handleSlotShowROW = (pos) => {
    if (SHOW.SHOWROW.includes(pos)) {
      return SHOW.SHOWROW.some((item) => pos === item);
    }
  };
  const handleSlotShowCOL = (pos) => {
    if (SHOW.SHOWCOL.includes(pos)) {
      return SHOW.SHOWCOL.some((item) => pos === item);
    }
  };

  return (
    <div className={`${className}`}>
      {cell.map((item, index2) => {
        const pos = slotPos([index, index2]);
        return index % 2 === 0 ? (
          <div
            key={index2}
            onDrop={dragDrop}
            onDragOver={dragOver}
            id={pos}
            className={` relative flex-1 flex  justify-center items-center   ${
              index2 % 2 === 0 ? "bg-amber-100" : "bg-green-700"
            }`}
          >
            {item && item.Name ? (
              <img
                id={pos}
                draggable="true"
                onDragStart={dragStart}
                data-item={JSON.stringify({
                  name: item.Name,
                  pos: item.Pos,
                  side: item.Side,
                })}
                className="w-full  h-full overflow-hidden cursor-grab"
                src={handlepicture(item)}
                alt=""
              />
            ) : null}
            {handleSlotShowROW(pos) ? (
              <p className=" absolute left-0 top-0 text-3xl  p-1 font-bold">
                {pos[1]}
              </p>
            ) : null}
            {handleSlotShowCOL(pos) ? (
              <p className=" absolute right-0 bottom-0 text-3xl  p-1 font-bold">
                {pos[0]}
              </p>
            ) : null}
          </div>
        ) : (
          <div
            key={index2}
            id={pos}
            onDrop={dragDrop}
            onDragOver={dragOver}
            className={` relative flex-1 flex justify-center items-center cursor-grab  ${
              index2 % 2 === 0 ? " bg-green-700" : "bg-amber-100"
            }`}
          >
            {item && item.Name ? (
              <img
                id={pos}
                draggable="true"
                onDragStart={dragStart}
                data-item={JSON.stringify({
                  name: item.Name,
                  pos: item.Pos,
                  side: item.Side,
                })}
                className="w-full  h-full overflow-hidden cursor-grab"
                src={handlepicture(item)}
                alt=""
              />
            ) : null}
            {handleSlotShowROW(pos) ? (
              <p className=" absolute left-0 top-0 text-3xl  p-1 font-bold">
                {pos[1]}
              </p>
            ) : null}
            {handleSlotShowCOL(pos) ? (
              <p className=" absolute right-0 bottom-0 text-3xl  p-1 font-bold">
                {pos[0]}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Slot;
