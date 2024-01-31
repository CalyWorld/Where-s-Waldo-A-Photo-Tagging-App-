import { useEffect, useState, useMemo } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export const useFetchUsers = () => {
  const [fireStoreusers, setFireStoreusers] = useState([]);

  // Memoize the reference using useMemo
  const userDocRef = useMemo(() => collection(db, "users"), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(userDocRef);
        let data = querySnapshot.docs.map((doc) => doc.data());
        setFireStoreusers(data);
      } catch (error) {
        console.log("Data not successfully gotten from firestore", error);
      }
    };

    fetchData();
  }, [userDocRef]);

  return { fireStoreusers };
};
