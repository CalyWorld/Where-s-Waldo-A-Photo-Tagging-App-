import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
export const sendToFireStore = async (fireStoreData) => {
  try {
    const waldoDocRef = doc(db, "waldo", "waldoCollection");
    await setDoc(waldoDocRef, {
      array: fireStoreData.map((data) => data), //array of objects)
    });
    console.log("succesfully stored in firestore");
  } catch (error) {
    console.log("not succesfuly stored in firestore", error);
  }
};
