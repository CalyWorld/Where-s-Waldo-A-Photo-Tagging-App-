import { db } from "../firebase";
import { doc, setDoc } from  "firebase/firestore";
export const sendToFireStore = async (fireStoreData) => {
    try {
      await setDoc(doc(db, "waldo", "waldoCollection"), {
        array: fireStoreData.map((data) => data),
      });
      return () => {
        console.log("succesfully store in firestore");
      };
    } catch (error) {
      console.log("not succesfuly stored in firestore", error);
    }
  };