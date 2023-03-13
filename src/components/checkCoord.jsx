import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
export const CheckCoord = async (
  eachPhoto,
  xCoord,
  yCoord,
  data,
  setModal,
  setFirestoreData,
  setFound,
  setShowMatchFound
) => {
  console.log(eachPhoto);
  const updatePhotoRange = () => {
    const updatedDataRange = data.map((eachData) =>
      eachData.id === eachPhoto.id
        ? { ...eachData, range: window.innerWidth <= 768 ? 20 : 10 }
        : eachData
    );
    setFirestoreData(updatedDataRange);
  };
  window.addEventListener("resize", updatePhotoRange);
//   window.removeEventListener("resize", updatePhotoRange);
  if (
    eachPhoto.x - eachPhoto.range <= xCoord &&
    xCoord <= eachPhoto.x + eachPhoto.range &&
    eachPhoto.y - eachPhoto.range <= yCoord &&
    yCoord <= eachPhoto.y + eachPhoto.range
  ) {
    let updatedArray = data.map((eachWaldo) =>
      eachWaldo.id === eachPhoto.id ? { ...eachPhoto, found: true } : eachWaldo
    );
    setModal(false);
    setFirestoreData(updatedArray);
    await updateDoc(doc(db, "waldo", "waldoCollection"), {
      array: updatedArray,
    });
    setFound(true);
    setShowMatchFound(true);
  } else {
    let updatedArray = data.map((eachWaldo) =>
      eachWaldo.id === eachPhoto.id ? { ...eachPhoto, found: false } : eachWaldo
    );
    setFirestoreData(updatedArray);
    await updateDoc(doc(db, "waldo", "waldoCollection"), {
      array: updatedArray,
    });
    setShowMatchFound(true);
    setFound(false);
  }
};
