import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Play from "./pages/Play/Play.jsx";
import Home from "./pages/HomePage/Home.jsx";

function App() {
  const [showText, setShowText] = useState(null);
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Play />} />
        {/* <Route path="/play/*" element={<Play />} /> */}
      </Routes>
    </div>
  );
}

export default App;
