import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Play from "./pages/Play/Play.jsx";
import Home from "./pages/HomePage/Home.jsx";
import ScribleChangeLogs from "./component/play/ScribleChangeLogs/ScribleChangeLogs.jsx";

function App() {
  const [showText, setShowText] = useState(null);
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Play />} />
        <Route path="/changelog" element={<ScribleChangeLogs />} />
      </Routes>
    </div>
  );
}

export default App;
