import { useState } from "react";
import "./App.css";

function App() {
  const [showText, setShowText] = useState(null);
  return (
    <div>
      <h2>Jai Siya Ram</h2>
      <button onClick={() => setShowText(!showText)} class="btn">
        Click for a message
      </button>
      {showText ? <p>I love you Alien</p> : null}
    </div>
  );
}

export default App;
