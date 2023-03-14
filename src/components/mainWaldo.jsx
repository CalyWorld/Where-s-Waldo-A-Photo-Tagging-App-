import React, { useState, useEffect } from "react";
import { Dropdown } from "./dropDown";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CheckCoord } from "./checkCoord";

export const MainWaldo = ({ Header, Waldo, defaultData }) => {
  const [data, setFirestoreData] = useState([]);
  const [openModal, setModal] = useState(false);
  const [matchFound, setFound] = useState(false);
  const [showMatchFound, setShowMatchFound] = useState(false);

  //get data from firestore and store in state variable "data"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "waldo", "waldoCollection");
        const document = await getDoc(docRef);
        let data = document.data().array;
        setFirestoreData(data);
      } catch (error) {
        console.log("Data not sucessfully gotten from firestore", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <Header
          matchFound={matchFound}
          showMatchFound={showMatchFound}
          setShowMatchFound={setShowMatchFound}
          setFound={setFound}
        />
      </header>
      <section>
        <Waldo
          data={data}
          setFirestoreData={setFirestoreData}
          openModal={openModal}
          setModal={setModal}
          Dropdown={Dropdown}
          CheckCoord={CheckCoord}
          setFound={setFound}
          setShowMatchFound={setShowMatchFound}
          defaultData={defaultData}
        />
      </section>
    </div>
  );
};
