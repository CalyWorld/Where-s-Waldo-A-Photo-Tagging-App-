import React, { useEffect, useRef, useState } from "react";
import { Modal } from "./modal";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const Waldo = ({ openModal, setModal }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [data, setFireStoreData] = useState([]);
  const imgRef = useRef(null);

  const getPosition = (event) => {
    //get coordinates in percentage
    const { clientWidth, clientHeight } = imgRef.current;
    const { clientX, clientY } = event;
    const xPercent = (clientX / clientWidth) * 100;
    const yPercent = (clientY / clientHeight) * 100;
    setClickPosition({ x: xPercent, y: yPercent });
    setModal(true);
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

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "waldo", "waldoCollection");
      const document = await getDoc(docRef);
      let data = document.data().array;
      setFireStoreData(data);
    };
    fetchData();
  }, []);

  const checkCoordinates = (data) => {
    let xCoord = clickPosition.x;
    let yCoord = clickPosition.y;
    console.log(clickPosition.x, clickPosition.y);
    console.log(data);
    if (
      data.x - 3 <= xCoord &&
      xCoord <= data.x + 3 &&
      data.y - 3 <= yCoord &&
      yCoord <= data.y + 3
    ) {
      console.log("it matches");
    } else {
      console.log("it does not match");
    }
  };

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
          checkCoordinates={checkCoordinates}
        />
      )}
    </div>
  );
};
