import React from "react";
import Board from "../Class/Board";

const Slot = ({ className = "", cell, index, convert,  slotdata}) => {

  const slotPos = (slots) => {

    const slot = convert(slots)
    return slot;
  };

  const dragStart = (e) => {
    const data = e.target.getAttribute("data-item");
    const item = JSON.parse(data);
    if (item) {
      e.dataTransfer.setData("application/json", JSON.stringify(item));
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    const item = JSON.parse(data)
    const cell = e.target.id
    slotdata(item,cell)
    
  };


  // /figure_picture/BackBishop.jpg
  // /figure_picture/LightBishop.jpg
  const handlepicture = (item) => {
    let src = ""
    switch(item.Side) {
      case "W" : {
        src = "/figure_picture/LightBishop.jpg"
        break
      }
      case "B" : {
        src = "/figure_picture/BackBishop.jpg"
        break
      }  
    }

    return src;
  };

  return (
    <div className={`${className}`}>
      {
      
      cell.map((item, index2) => {
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
            {item.Name ? (
              <img
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
            ) : (
              null
            )}
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
            {item.Name ? (
              <img
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
            ) : (
               null
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slot;
