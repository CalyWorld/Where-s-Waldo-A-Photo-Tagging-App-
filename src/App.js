import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./pages/Header/header";
import { GetPosition } from "./hooks/getPosition";
import { v4 as uuidv4 } from "uuid";
import waldoP from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldoP.png";
import odlaw from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/odlaw.jpg";
import wizard from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/wizard.jpeg";
import {db} from "./firebase";
import {collection, doc, setDoc, addDoc} from "firebase/firestore";

function App() {
  const [time, setTime] = useState(0);
  // const [running, setRunning] = useState(false);

  let data = [
    {
      src: waldoP,
      x: "",
      y: "",
      id: uuidv4(),
    },
    {
      src: odlaw,
      x: "",
      y: "",
      id: uuidv4(),
    },
    {
      src: wizard,
      x: "",
      y: "",
      id: uuidv4(),
    },
  ];

  let defaultData = [
    {
      src: waldoP,
      x: 502,
      y: 307,
      id: uuidv4(),
    },
    {
      src: odlaw,
      x: 119,
      y: 174,
      id: uuidv4(),
    },
    {
      src: wizard,
      x: 302,
      y: 175,
      id: uuidv4(),
    },
  ];

  const [photoTag, setPhotoTag] = useState(data);
  
  const sendToFireStore  = async () =>{
    await setDoc(doc(db, "waldo", "eachWaldo"),{
      array: defaultData.map((eachWaldo)=>eachWaldo)
    });
  }

  sendToFireStore()
  // useEffect(() => {
  //   let interval;
  //   if (running) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 10);
  //     }, 10);
  //   } else if (!running) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [running]);

  // const startRunning = () =>{
  //   window.addEventListener("load", e => setRunning(true));
  // }

  // // startRunning();

  // const stopRunning = () =>{
  //   setRunning(false);
  // }
  // const resetTimer = () =>{
  //   setTime(0);
  // }

  return (
    <div className="App">
      <header>
        <Header time={time} />
      </header>
      <section>
        <GetPosition photoTag={photoTag} setPhotoTag={setPhotoTag} />
      </section>
    </div>
  );
}

export default App;
