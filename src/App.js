import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import waldoP from "./assets/waldoP.png";
import odlaw from "./assets/odlaw.jpg";
import wizard from "./assets/wizard.jpeg";
import { MainWaldo } from "./components/MainWaldo";
import { Waldo } from "./components/Waldo";
import { Header } from "./components/Header";
import { sendToFireStore } from "./components/sendToFireStore";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";

function App() {
  let data = [
    {
      src: waldoP,
      x: 52,
      y: 50,
      id: uuidv4(),
      found: false,
    },
    {
      src: odlaw,
      x: 24,
      y: 50,
      id: uuidv4(),
      found: false,
    },
    {
      src: wizard,
      x: 63,
      y: 51,
      id: uuidv4(),
      found: false,
    },
  ];

  sendToFireStore(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="Game"
            element={<MainWaldo Header={Header} Waldo={Waldo} data={data} />}
          ></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
