import React, { useEffect, useRef, useState } from "react";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg";
// import { WinnerForm } from "./winnerForm";
export const Waldo = ({
  openModal,
  setModal,
  data,
  setFirestoreData,
  Dropdown,
  CheckCoord,
  setFound,
  setShowMatchFound,
}) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const isFoundTrue = data.every((obj) => obj.found);
 
  console.log(isFoundTrue);

  const game = (event) => {
    if(isFoundTrue === false){
      getCoords(event)
    }else if(isFoundTrue === true){
      console.log("Game Won");
    }
  }
  //get coordinates in percentage
  const getCoords = (event) => {
    setModal(true);
    const { clientWidth, clientHeight } = imgRef.current;
    const { clientX, clientY } = event;
    const xPercent = (clientX / clientWidth) * 100;
    const yPercent = (clientY / clientHeight) * 100;
    setClickPosition({ x: xPercent, y: yPercent });
  };

  //adjust the coordinates clicked based on window resize
  useEffect(() => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = imgRef.current;
      const { x, y } = clickPosition;
      const newWidthPercent = (x / 100) * clientWidth;
      const newHeightPercent = (y / 100) * clientHeight;
      setClickPosition({
        x: (newWidthPercent / clientWidth) * 100,
        y: (newHeightPercent / clientHeight) * 100,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clickPosition]);

  // console.log(clickPosition);
  // console.log(data);

  return (
    <div className="flex flex-row justify-center items-center relative">
          <img
            src={waldo}
            ref={imgRef}
            alt="background"
            onClick={(e) => {
              game(e);
            }}
          />
          {openModal && (
            <Dropdown
              data={data}
              setModal={setModal}
              clickPosition={clickPosition}
              CheckCoord={CheckCoord}
              setFirestoreData={setFirestoreData}
              setFound={setFound}
              setShowMatchFound={setShowMatchFound}
            />
      )}
    </div>
  );
};
