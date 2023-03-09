import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import waldoP from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldoP.png";
import odlaw from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/odlaw.jpg";
import wizard from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/wizard.jpeg";
import { db } from "./firebase";
import { doc, setDoc} from "firebase/firestore";
import { MainWaldo } from "./hooks/mainWaldo";

function App() {
  let data = [
    {
      src: waldoP,
      x: 52,
      y: 58,
      id: uuidv4(),
      found: false,
    },
    {
      src: odlaw,
      x: 24,
      y: 56,
      id: uuidv4(),
      found: false,
    },
    {
      src: wizard,
      x: 62,
      y: 58,
      id: uuidv4(),
      found: false,
    },
  ];

  const sendToFireStore = async (fireStoreData) => {
    try {
      await setDoc(doc(db, "waldo", "waldoCollection"), {
        array: fireStoreData.map((data) => data),
      });
      return () => {
        console.log("succesfully store in firestore");
      };
    } catch (error) {
      console.log("not succesfuly stored in firestore", error);
    }
  };

  sendToFireStore(data);


  return (
    <div className="App">
      <MainWaldo/>
    </div>
  );
}

export default App;
