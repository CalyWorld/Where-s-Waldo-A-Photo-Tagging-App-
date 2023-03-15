import {useEffect, useState} from "react";
import {getDoc } from "firebase/firestore";

export const useFetchData = (url) =>{  
  const [data, setFirestoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //get data from firestore and store in state variable "data"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const document = await getDoc(url);
        let data = document.data().array;
        setFirestoreData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Data not sucessfully gotten from firestore", error);
        setIsLoading(false)
      }
    };
    fetchData();
  },);

  return {data, setFirestoreData, isLoading};
}