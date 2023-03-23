import React, { useState } from "react";
import { Dropdown } from "./DropDown";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { CheckCoord } from "./checkCoord";
import { useFetchData } from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/hooks/useFetchData.jsx";

export const MainWaldo = ({ Header, Waldo, data }) => {
  const [openModal, setModal] = useState(false);
  const [matchFound, setFound] = useState(false);
  const [showMatchFound, setShowMatchFound] = useState(false);

  //get data from firestore
  const docRef = doc(db, "waldo", "waldoCollection");

  const { fireStoredata, loading, setFirestoreData } = useFetchData(docRef);

  
  if(loading){
    return (<div>Loading</div>)
  }

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
          fireStoredata={fireStoredata}
          setFirestoreData={setFirestoreData}
          openModal={openModal}
          setModal={setModal}
          Dropdown={Dropdown}
          CheckCoord={CheckCoord}
          setFound={setFound}
          setShowMatchFound={setShowMatchFound}
        />
      </section>
    </div>
  );
};
