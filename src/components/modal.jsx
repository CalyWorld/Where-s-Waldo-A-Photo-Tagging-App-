import React from "react";
import waldoP from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldoP.png";
import odlaw from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/odlaw.jpg";
import wizard from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/wizard.jpeg";
export const Modal = ({ setModal, mousePosition }) => {
  // console.log(mousePosition.getPositionX, mousePosition.getPositionY);

  return (
    <div
      className={`absolute top-${mousePosition.getPositionY} left-${mousePosition.getPositionX}`}
    >
      <ul>
        {" "}
        <li className="flex flex-col w-40 justify-start bg-slate-50 items-start">
          <span className="flex flex-row w-40 justify-end">
            <button onClick={()=>{setModal(false)}}>X</button>
          </span>
          <img className="h-10 w-10" src={waldoP} alt="left" />
          <img className="h-10 w-10" src={odlaw} alt="middle" />
          <img className="h-10 w-10" src={wizard} alt="wizard" />
        </li>
      </ul>
    </div>
  );
};
