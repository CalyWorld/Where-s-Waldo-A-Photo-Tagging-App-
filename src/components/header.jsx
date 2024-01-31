import React, { useEffect } from "react";
import waldoP from "../assets/waldoP.png";
import odlaw from "../assets/odlaw.jpg";
import wizard from "../assets/wizard.jpeg";
export const Header = ({
  matchFound,
  setFound,
  showMatchFound,
  setShowMatchFound,
}) => {
  useEffect(() => {
    if (matchFound) {
      setShowMatchFound(true);
      const timeourId = setTimeout(() => {
        setShowMatchFound(false);
        setFound(false);
      }, 500);
      return () => clearTimeout(timeourId);
    }
  }, [matchFound, setShowMatchFound, setFound]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <ul className="flex">
          <li className="flex">
            <img className="h-10" src={waldoP} alt="left" />
            <img className="h-10" src={odlaw} alt="middle" />
            <img className="h-10" src={wizard} alt="wizard" />
          </li>
        </ul>
      </div>
      <div>
        {showMatchFound && (
          <div className="flex justify-center">
            {matchFound ? "Matched" : "Not Matched"}
          </div>
        )}
      </div>
    </div>
  );
};
