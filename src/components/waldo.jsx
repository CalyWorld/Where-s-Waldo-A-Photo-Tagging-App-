import React, { useEffect, useRef, useState } from "react";
import { Modal } from "./modal";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg"

export const Waldo = ({openModal, setModal, photoTagInfo,  setCoordinates}) => {
  
  const [clickPosition, setClickPosition] = useState({x:0,y:0});
  const imgRef = useRef(null);

  const getPosition = (event) =>{ 
    //get coordinates in percentage
    const {clientWidth, clientHeight}  = imgRef.current;
    const {clientX, clientY} = event;
    const xPercent =(clientX/clientWidth) * 100;
    const yPercent = (clientY / clientHeight) * 100;
    setClickPosition({x:xPercent, y:yPercent});
    setModal(true);
  }

  useEffect(()=>{
    const handleResize = () =>{
      const {clientWidth, clientHeight}  = imgRef.current;
      const {x,y} = clickPosition;
      const newWidthPercent = (x/100)*clientWidth;
      const newHeightPercent = (y/100)*clientHeight;
      setClickPosition({x:(newWidthPercent/clientWidth) *100, y:(newHeightPercent/clientHeight)*100});
    }
    window.addEventListener("resize", handleResize);
    return()=> window.removeEventListener("resize", handleResize);
  },[clickPosition]);

  console.log(clickPosition);

  return (
    <div className="flex flex-row justify-center items-center relative">
      <img src={waldo} ref={imgRef} alt="background" onClick={(e)=>{getPosition(e)}}/>
      {openModal && (<Modal photoTagInfo={photoTagInfo} setModal={setModal} clickPosition={clickPosition} setCoordinates={setCoordinates}/>)}
    </div>
  );
};

