import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import waldoP from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/waldoP.png";
import odlaw from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/odlaw.jpg";
import wizard from "/Users/cal/Where-s-Waldo-A-Photo-Tagging-App-/src/assets/wizard.jpeg";
import { MainWaldo } from "./components/MainWaldo";
import { Waldo } from "./components/Waldo";
import { Header } from "./components/Header";
import { sendToFireStore } from "./components/sendToFireStore";
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

  sendToFireStore(data);

  return (
    <div className="App">
      <MainWaldo Header={Header} Waldo={Waldo} />
    </div>
  );
}

export default App;
