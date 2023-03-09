import React,{useState, useEffect} from "react";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase";
import { Header } from "../pages/Header/header";
import { GetPosition } from "./getPosition";

export const MainWaldo = () => {

  const [data, setFirestoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "waldo", "waldoCollection");
      const document = await getDoc(docRef);
      let data = document.data().array;
      setFirestoreData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <Header data={data} />
      </header>
      <section>
        <GetPosition
          data={data}
          setFirestoreData={setFirestoreData}
        />
      </section>
    </div>
  );
};
