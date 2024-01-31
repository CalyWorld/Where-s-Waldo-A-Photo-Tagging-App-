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
  setShowMatchFound,
) => {
  console.log(xCoord, yCoord);
  console.log(eachPhoto.x, eachPhoto.y);
  if (
    eachPhoto.x - 5 <= xCoord &&
    xCoord <= eachPhoto.x + 5 &&
    eachPhoto.y - 5 <= yCoord &&
    yCoord <= eachPhoto.y + 5
  ) {
    let updatedArray = data.map((eachWaldo) =>
      eachWaldo.id === eachPhoto.id ? { ...eachPhoto, found: true } : eachWaldo,
    );
    setModal(false);
    setFirestoreData(updatedArray);
    await updateDoc(doc(db, "waldo", "waldoCollection"), {
      array: updatedArray,
    });
    setFound(true);
    setShowMatchFound(true);
  } else {
    setShowMatchFound(true);
    setFound(false);
  }
};
