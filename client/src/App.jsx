import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Play from "./pages/Play/Play.jsx";
import ScribleChangeLogs from "./component/play/ScribleChangeLogs/ScribleChangeLogs.jsx";
import Components from "./component/play/Components/Components.jsx";
import AnimatedDivIndexDemo from "./component/play/Demo/AnimatedIndexDevDemo/AnimatedIndexDivDemo.jsx";
import PipeAnimatedDiv from "./component/play/Demo/PipeAnimatedDiv/PipeAnimatedDiv.jsx";

function App() {
  const [showText, setShowText] = useState(null);
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Play />} />
        <Route path="/changelog" element={<ScribleChangeLogs />} />
        <Route path="/components" element={<Components />} />
        <Route
          path="/components/animatedDiv"
          element={<AnimatedDivIndexDemo />}
        />
        <Route path="/components/pipeDiv" element={<PipeAnimatedDiv />} />
      </Routes>
    </div>
  );
}

export default App;
