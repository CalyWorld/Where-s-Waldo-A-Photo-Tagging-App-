import React from "react";
export const Modal = ({
  data,
  setModal,
  clickPosition,
  checkCoordinates,
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
      {data.map((eachData) => (
        <div key={eachData.id}>
          <img
            src={eachData.src}
            className="w-10 h-10"
            onClick={() => {
              checkCoordinates(eachData);
            }}
            alt="drop-down"
          />
        </div>
      ))}
    </div>
  );
};
