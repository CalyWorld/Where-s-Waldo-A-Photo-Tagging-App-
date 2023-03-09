import React from "react";
export const Modal = ({
  data,
  setModal,
  clickPosition,
  checkCoord,
}) => {

  return (
    <div
      style={{
        position: "absolute",
        left: `${clickPosition.x}%`,
        top: `${clickPosition.y}%`,
        width: "25%",
        background: "white",
      }}
    >
      <span className="flex justify-end">
      <i className="fa-solid fa-xmark" onClick={()=>{setModal(false
        )}}></i>
      </span>
      {data.map((eachPhoto) => (
        <div key={eachPhoto.id}>
          <img
            src={eachPhoto.src}
            className="w-10 h-10"
            onClick={() => {
              checkCoord(eachPhoto);
            }}
            alt="drop-down"
          />
        </div>
      ))}
    </div>
  );
};
