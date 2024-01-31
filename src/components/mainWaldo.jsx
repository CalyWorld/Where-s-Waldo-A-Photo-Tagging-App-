import React, { useState } from "react";
import { Dropdown } from "./DropDown";
import { CheckCoord } from "./checkCoord";
import { useFetchData } from "../hooks/useFetchData";

export const MainWaldo = ({ Header, Waldo, data }) => {
  const [openModal, setModal] = useState(false);
  const [matchFound, setFound] = useState(false);
  const [showMatchFound, setShowMatchFound] = useState(false);

  //custom hook to fetch data from firestore and return the state and setter variable
  const { fireStoredata, loading, setFirestoreData } = useFetchData();

  //hold for rendering the winner form dialog box when all found property is true in firestore data array
  if (loading) {
    return <div>Loading</div>;
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
