import React from "react";
import Board from "../Class/Board";

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
          src = "/figure_picture/LightBishop.jpg";
        } else if (item.Side === "B") {
          src = "/figure_picture/BackBishop.jpg";
        }
        break;
      }
    }
    return src;
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
            className={`flex-1 flex  justify-center items-center   ${
              index2 % 2 === 0 ? "bg-amber-100" : "bg-green-700"
            }`}
          >
            {item && item.Name ? (
              <img
                id={pos}
                draggable="true"
                data-item={JSON.stringify({
                  name: item.Name,
                  pos: item.Pos,
                  side: item.Side,
                })}
                onDragStart={dragStart}
                className="w-full  h-full overflow-hidden cursor-grab "
                src={handlepicture(item)}
                alt=""
              />
            ) : null}
          </div>
        ) : (
          <div
            key={index2}
            id={pos}
            onDrop={dragDrop}
            onDragOver={dragOver}
            className={`flex-1 flex justify-center items-center cursor-grab  ${
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
          </div>
        );
      })}
    </div>
  );
};

export default Slot;
