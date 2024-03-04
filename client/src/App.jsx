import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Play from "./pages/Play/Play";
import Exp from "./component/Exp/Exp";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/exp" element={<Exp />} />
      </Routes>
    </div>
  );
}

export default App;
