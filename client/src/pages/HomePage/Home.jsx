import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-wrapper">
      <h2>Jai Siya Ram</h2>
      <button onClick={() => navigate("/play")} className="button">
        Naviagte to Play
      </button>
    </div>
  );
};

export default Home;
