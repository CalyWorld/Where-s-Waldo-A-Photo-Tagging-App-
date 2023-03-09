import React, { useState} from "react";
import { Waldo } from "../components/waldo";

export const GetPosition = ({data, setFirestoreData}) => {
  const [openModal, setModal] = useState(false);
  return (
    <>
      <Waldo
        openModal={openModal}
        setModal={setModal}
        data={data} 
        setFirestoreData={setFirestoreData}
      />
    </>
  );
};
