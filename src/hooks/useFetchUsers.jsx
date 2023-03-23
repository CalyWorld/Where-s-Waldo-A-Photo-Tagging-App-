import { useState } from "react";
import { getDoc } from "firebase/firestore";

export const useFetchUsers = (url) => {
  const [fireStoreusers, setFirestoreusers] = useState([]);
    const fetchData = async () => {
      try {
        const document = await getDoc(url);
        let data = document.data().users;
        setFirestoreusers(data);
      } catch (error) {
        console.log("Data not sucessfully gotten from firestore", error);
      }
    };
    fetchData();
  return { fireStoreusers};
};
