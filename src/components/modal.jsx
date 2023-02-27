import React from "react";
export const Modal = ({ photoTagInfo, setModal, mousePosition }) => {
  console.log(mousePosition.x, mousePosition.y);

  return (
    <div
      style={{
        position: "absolute",
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: "150px",
        background: "white"
      }}
    >
        <span className="flex justify-end"><i className="fa-solid fa-xmark w-5" onClick={()=>{setModal(false)}}></i></span>
        {photoTagInfo.map((eachPhoto)=>
        <div key={eachPhoto.id}>
            <img src={eachPhoto.src} className="w-10 h-10"/>
        </div>)}
    </div>
  );
};
