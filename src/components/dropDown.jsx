import React from "react";
  export const Dropdown = ({ fireStoredata, setModal, clickPosition, CheckCoord, setFirestoreData, setFound, setShowMatchFound  }) => {
  let dropDownMenuStyling = {
    position: "absolute",
    left: `${clickPosition.x}%`,
    top: `${clickPosition.y}%`,
    width: "20%",
    background: "white",
    borderRadius: "0.375rem",
  };

  // console.log(clickPosition.x, clickPosition.y)
  let dropDownMenu = fireStoredata.map((eachPhoto) => (
    <div key={eachPhoto.id}>
      <img
        src={eachPhoto.src}
        className="w-10 h-10"
        onClick={() => {
          CheckCoord(eachPhoto, clickPosition.x, clickPosition.y, fireStoredata, setModal, setFirestoreData, setFound, setShowMatchFound);
        }}
        alt="drop-down"
      />
    </div>
  ));

  return (
    <div style={dropDownMenuStyling}>
       <div className="flex justify-end items-center h-5"> 
        <i
          className="fa-solid fa-xmark fa-lg"
          onClick={() => {
            setModal(false);
          }}
        ></i></div>
      {dropDownMenu}
    </div>
  );
};
