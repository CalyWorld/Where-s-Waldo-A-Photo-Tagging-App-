import React, {useState } from "react";
import { Modal } from "./modal";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg"

export const Waldo = ({photoTagInfo, mousePosition, getPosition, setCoordinates}) => {

  const [openModal, setModal] = useState(false);

  return (
    <div className="p-5 flex flex-row justify-center items-center">
      <img className="" src={waldo} alt="background" onClick={(e)=>{getPosition(e, setModal)}}/>
      {openModal && (<Modal photoTagInfo={photoTagInfo} setModal={setModal} mousePosition={mousePosition} setCoordinates={setCoordinates}/>)}
    </div>
  );
};

