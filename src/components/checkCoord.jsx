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

  if (
    eachPhoto.x - 3 <= xCoord &&
    xCoord <= eachPhoto.x + 3 &&
    eachPhoto.y - 10 <= yCoord &&
    yCoord <= eachPhoto.y + 10
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
