import React from "react";
import { Timer } from "../../hooks/timer";
import waldoP from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldoP.png"
import odlaw from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/odlaw.jpg"
import wizard from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/wizard.jpeg"

export const Header = ({ time }) => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-row justify-center">
        {/* <li>
            <Timer time={time} />
        </li> */}
      </ul>
      <ul className="flex flex-row justify-around items-center">
        <li>logo</li>
        <li className="flex flex-row">
          <img className="h-10" src={waldoP} alt="left" />
          <img className="h-10" src={odlaw} alt="middle" />
          <img className="h-10" src={wizard} alt="wizard" />
        </li>
        <li>Leaderboard</li>
      </ul>
    </div>
  );
};
