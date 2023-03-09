import React, { useEffect, useRef, useState } from "react";
import { Modal } from "./modal";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const Waldo = ({ openModal, setModal, data, setFirestoreData }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

   //get coordinates in percentage
  const getPosition = (event) => {
    setModal(true);
    const { clientWidth, clientHeight } = imgRef.current;
    const { clientX, clientY } = event;
    const xPercent = (clientX / clientWidth) * 100;
    const yPercent = (clientY / clientHeight) * 100;
    setClickPosition({ x: xPercent, y: yPercent });
  };

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

  const checkCoord = async (eachData) => {
    let xCoord = clickPosition.x;
    let yCoord = clickPosition.y;
    console.log(clickPosition.x, clickPosition.y);
    console.log(eachData);
    if (
      eachData.x - 3 <= xCoord &&
      xCoord <= eachData.x + 3 &&
      eachData.y - 3 <= yCoord &&
      yCoord <= eachData.y + 3
    ) {
      let updatedArray = data.map((eachWaldo) =>
        eachWaldo.id === eachData.id ? { ...eachWaldo, found: true } : eachWaldo
      );
      setFirestoreData(updatedArray);
      await updateDoc(doc(db, "waldo", "waldoCollection"), {
        array: updatedArray,
      });
      setModal(false);
      console.log("it matches");
    } else {
      console.log("it does not match");
    }
  };


  // const isGameOver = () =>{

  // }

  console.log(data);

  return (
    <div className="flex flex-row justify-center items-center relative">
      <img
        src={waldo}
        ref={imgRef}
        alt="background"
        onClick={(e) => {
          getPosition(e);
        }}
      />
      {openModal && (
        <Modal
          data={data}
          setModal={setModal}
          clickPosition={clickPosition}
          checkCoord={checkCoord}
        />
      )}
    </div>
  );
};
