import React from "react";
  export const Dropdown = ({ data, setModal, clickPosition, CheckCoord, setFirestoreData, setFound, setShowMatchFound  }) => {
  let dropDownMenuStyling = {
    position: "absolute",
    left: `${clickPosition.x}%`,
    top: `${clickPosition.y}%`,
    width: "30%",
    background: "white",
    borderRadius: "0.375rem",
  };

  let dropDownMenu = data.map((eachPhoto) => (
    <div key={eachPhoto.id}>
      <img
        src={eachPhoto.src}
        className="w-10 h-10"
        onClick={() => {
          CheckCoord(eachPhoto, clickPosition.x, clickPosition.y, data, setModal, setFirestoreData, setFound, setShowMatchFound);
        }}
        alt="drop-down"
      />
    </div>
  ));

  return (
    <div style={dropDownMenuStyling}>
      <span className="flex justify-end">
        <i
          className="fa-sharp fa-solid fa-xmark-large"
          onClick={() => {
            setModal(false);
          }}
        ></i>
      </span>
      {dropDownMenu}
    </div>
  );
};
