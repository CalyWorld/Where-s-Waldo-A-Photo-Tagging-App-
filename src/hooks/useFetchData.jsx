import { useState} from "react";
import {getDoc } from "firebase/firestore";

export const useFetchData = (url) =>{  
  const [fireStoredata, setFirestoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  //get data from firestore and store in state variable "data"
 
    const fetchData = async () => {
      try {
        const document = await getDoc(url);
        let data = document.data().array;
        setFirestoreData(data);
        setLoading(false);
      } catch (error) {
        console.log("Data not sucessfully gotten from firestore", error);
      }
    };
    fetchData();


  return {fireStoredata, loading, setFirestoreData};
}