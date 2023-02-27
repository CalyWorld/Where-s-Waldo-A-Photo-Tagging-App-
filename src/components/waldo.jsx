import React, {useState } from "react";
import { Modal } from "./modal";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg"

export const Waldo = ({mousePosition, getPosition}) => {

  const [openModal, setModal] = useState(false);

  return (
    <div className="p-5">
      <img className="" src={waldo} alt="background" onClick={(e)=>{getPosition(e, setModal)}}/>
      {openModal && (<Modal setModal={setModal} mousePosition={mousePosition}/>)}
    </div>
  );
};

