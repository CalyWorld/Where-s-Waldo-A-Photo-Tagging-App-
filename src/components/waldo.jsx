import React, { useEffect, useState } from "react";
import waldo from "../assets/waldo.jpeg";
import { isFoundTrue } from "./isFound";
import { useTimer } from "./timer";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { sendToFireStore } from "./sendToFireStore";
import { WaldoDropDown } from "./WaldoDropDown";
import { WinnerFormDialog } from "./WinnerFormDialog";

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
  let userState = {
    name: "",
    secondTimer: null,
    minuteTimer: null,
    hourTimer: null,
    id: null,
  };
  const [user, setUser] = useState(userState);
  const [userCollection, setUserCollection] = useState([]);
  let found = isFoundTrue(fireStoredata);
  const [isFound, setIsFound] = useState(false);
  //
  // console.log(typeof(found));
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
      //stop timer
      setIsRunning(false);
      //delay the winner form untill there is a match
      setTimeout(() => {
        setIsFound(true);
      }, 1000);
    } else {
      //form is not rendered when there is no match
      setIsFound(false);
    }
  }, [found, setIsRunning]);

  //get coordinates in percentage
  const getCoords = (event) => {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const width = bounds.width;
    const height = bounds.height;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    //update clickPosition state with x and y coordinates
    setClickPosition((prevClickPosition) => ({
      ...prevClickPosition,
      x: Math.floor(xPercent),
      y: Math.floor(yPercent),
    }));
    setModal(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    //update user state with input value and timer values and id value
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
    //update userCollection state with user state values and id value and send to firestore database then reset user state and send to firestore database and reset timer values and close modal
    const newUser = {
      ...user,
      name: user.name,
      secondTimer: user.secondTimer,
      minuteTimer: user.minuteTimer,
      hourTimer: user.hourTimer,
      id: user.id,
    };
    setUserCollection([...userCollection, newUser]);
    try {
      // Get the document reference for the document you want to update
      const userRef = collection(db, "users");
      await addDoc(userRef, newUser);
      console.log("successfully stored in Firestore");
    } catch (error) {
      console.log("not successfully stored in Firestore", error);
    }
    setUser(userState);
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
        <WinnerFormDialog
          isFound={isFound}
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <WaldoDropDown
        openModal={openModal}
        fireStoredata={fireStoredata}
        setModal={setModal}
        clickPosition={clickPosition}
        CheckCoord={CheckCoord}
        setFirestoreData={setFirestoreData}
        setFound={setFound}
        setShowMatchFound={setShowMatchFound}
        Dropdown={Dropdown}
      />
    </div>
  );
};
