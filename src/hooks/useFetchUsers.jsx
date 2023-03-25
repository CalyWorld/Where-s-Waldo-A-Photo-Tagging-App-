import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export const useFetchUsers = () => {
  const [fireStoreusers, setFirestoreusers] = useState([]);
  const userDocRef = collection(db, "users");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(userDocRef);
        let data = querySnapshot.docs.map((doc) => doc.data());
        setFirestoreusers(data);
      } catch (error) {
        console.log("Data not sucessfully gotten from firestore", error);
      }
    };
    fetchData();  
  }, [userDocRef]);
  return { fireStoreusers};
};
