import React, { useEffect, useState } from "react";
import { Waldo } from "../components/waldo";

export const GetPosition = ({photoTag, setPhotoTag}) => {
  const [mousePosition, setPosition] = useState({});


  const getPosition = (e, setModal) => {
    const getX = e.clientX - e.target.offsetLeft;
    const getY = e.clientY - e.target.offsetTop;
    setPosition({ x: getX + 30, y: getY + 50 });
    setModal(true);
  };

  // console.log(mousePosition);

  const setCoordinates =  (image) => {
    setPhotoTag(
      photoTag.map((eachPhoto) =>
        eachPhoto.id === image.id
          ? { ...eachPhoto, x: mousePosition.x - 30, y: mousePosition.y - 50 }
          : eachPhoto
      )
    );
  };

  console.log(photoTag);

  // useEffect(()=>{
  //   const q = query(collection(db, "waldo"));
  //   const unsub = onSnapshot(q, (QuerySnapshot)=>{
  //     const waldoArray = [];
  //     QuerySnapshot.forEach((doc)=>{
  //       waldoArray.push({...doc.data(), id:doc.id});
  //     });
  //     setPhotoTagging(waldoArray);
  //     console.log(waldoArray);
  //   });
  //   return () => unsub();
  // }, []);


  return (
    <>
      <Waldo
        mousePosition={mousePosition}
        photoTagInfo={photoTag}
        getPosition={getPosition}
        setCoordinates={setCoordinates}
      />
    </>
  );
};
