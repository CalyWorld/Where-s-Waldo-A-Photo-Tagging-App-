import React, { useState } from "react";
import { Waldo } from "../components/waldo";
import { v4 as uuidv4 } from "uuid";
import waldoP from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldoP.png";
import odlaw from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/odlaw.jpg";
import wizard from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/wizard.jpeg";

export const GetPosition = () => {
  const [mousePosition, setPosition] = useState({});

  const [photoTagInfo, setPhotoTagging] = useState([
    {
      src: waldoP,
      x: "",
      y: "",
      id: uuidv4(),
    },
    {
      src: odlaw,
      x: "",
      y: "",
      id: uuidv4(),
    },
    {
      src: wizard,
      x: "",
      y: "",
      id: uuidv4(),
    },
  ]);

  const getPosition = (e, setModal) => {
    const getX = e.clientX - e.target.offsetLeft;
    const getY = e.clientY - e.target.offsetTop;
    setPosition({ x: getX + 30, y: getY + 50 });
    setModal(true);
  };

  console.log(mousePosition);

  const setCoordinates = (image) => {
    setPhotoTagging(
      photoTagInfo.map((eachPhoto) =>
        eachPhoto.id === image.id
          ? { ...eachPhoto, x: mousePosition.x - 30, y: mousePosition.y - 50 }
          : eachPhoto
      )
    );
  };

  console.log(photoTagInfo);

  return (
    <>
      <Waldo
        mousePosition={mousePosition}
        photoTagInfo={photoTagInfo}
        getPosition={getPosition}
        setCoordinates={setCoordinates}
      />
    </>
  );
};
