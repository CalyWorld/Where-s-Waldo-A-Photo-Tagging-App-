import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const useFetchData = () => {
  const [fireStoredata, setFirestoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const waldoDocRef = doc(db, "waldo", "waldoCollection");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDoc(waldoDocRef);
        const data = querySnapshot.data().array;
        setFirestoreData(data);
        setLoading(false);
      } catch (error) {
        console.log("Data not sucessfully gotten from firestore", error);
      }
    };
    fetchData();
  }, [fireStoredata, waldoDocRef]);

  return { fireStoredata, loading, setFirestoreData };
};
