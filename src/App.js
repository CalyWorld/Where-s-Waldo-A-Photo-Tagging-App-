import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./pages/Header/header";
import { Waldo } from "./components/Waldo/waldo";
function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startRunning = () =>{
    window.addEventListener("load", e => setRunning(true));
  }

  // startRunning();

  const stopRunning = () =>{
    setRunning(false);
  }

  const resetTimer = () =>{
    setTime(0);
  }

  return (
    <div className="App">
      <header>
        <Header time={time} />
      </header>
      <section>
        <Waldo />
      </section>
    </div>
  );
}

export default App;
