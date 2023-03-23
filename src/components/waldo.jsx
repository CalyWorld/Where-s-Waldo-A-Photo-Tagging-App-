import React, { useEffect, useState } from "react";
import waldo from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldo.jpeg";
import { WinnerForm } from "./WinnerForm";
import { isFoundTrue } from "./isFound";
import { useTimer } from "./timer";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { sendToFireStore } from "./sendToFireStore";

export const Waldo = ({
  data,
  openModal,
  setModal,
  fireStoredata,
  setFirestoreData,
  Dropdown,
  CheckCoord,
  setFound,
  setShowMatchFound,
}) => {
  let { seconds, minutes, hours, setIsRunning } = useTimer();
  const [clickPosition, setClickPosition] = useState({ x: null, y: null });
  const [user, setUser] = useState({name: "",secondTimer: null,minuteTimer: null,hourTimer: null,id: null,
  });


  
  const [userCollection, setUserCollection] = useState([]);


  let found = isFoundTrue(fireStoredata);

  const [isFound, setIsFound] = useState(false);

  //renders if all found property is true
  const isGameOver = (event) => {
    if (found === false) {
      getCoords(event);
    } else {
      console.log("Game Won");
    }
  };

  useEffect(() => {
    if (found === true) {
      setIsRunning(false);
      setIsFound(true);
    } else {
      setIsFound(false);
    }
  }, [found, setIsRunning]);

  //get coordinates in percentage
  const getCoords = (event) => {
      const bounds = event.target.getBoundingClientRect();
      const x  = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const width = bounds.width;
      const height = bounds.height;
      const xPercent = (x / width) * 100;
      const yPercent = (y / height) * 100;
      setClickPosition((prevClickPosition)=> ({...prevClickPosition, x: Math.floor(xPercent), y: Math.floor(yPercent)}));
      setModal(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      secondTimer: seconds,
      minuteTimer: minutes,
      hourTimer: hours,
      id: uuidv4(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name,
      secondTimer: user.secondTimer,
      minuteTimer: user.minuteTimer,
      hourTimer: user.hourTimer,
      id: user.id,
    };
    setUserCollection([...userCollection, newUser]);

    try {
      // Get the document reference for the document you want to update
      const docRef = doc(db, "waldo", "waldoUsers");
      await updateDoc(docRef, {
        users: arrayUnion(newUser),
      });
      console.log("successfully stored in Firestore");
    } catch (error) {
      console.log("not successfully stored in Firestore", error);
    }
    setUser({
      name: "",
      secondTimer: null,
      minuteTimer: null,
      hourTimer: null,
      id: null,
    });
    sendToFireStore(data);
    setIsRunning(false);
  };


  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div>
          <img
            className={`relative ${isFound ? "blur-lg" : ""}`}
            src={waldo}
            alt="background"
            onClick={(e) => {
              isGameOver(e); // call game() function with event object as argument
            }}
          />
        {isFound && ( //render form component if all images have been found
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              height: "50%",
              background: "white",
            }}
          >
            <div style={{ position: "relative" }}>
              <WinnerForm
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        )}
      </div>
      {openModal && (
        <Dropdown
          fireStoredata={fireStoredata}
          setModal={setModal}
          clickPosition={clickPosition}
          CheckCoord={CheckCoord}
          setFirestoreData={setFirestoreData}
          setFound={setFound}
          setShowMatchFound={setShowMatchFound}
        />
      )}
    </div>
  );
};
