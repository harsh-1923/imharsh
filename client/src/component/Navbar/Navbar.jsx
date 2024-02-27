import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleClick = () => {
    const vibrationButton = document.querySelector(".menu-icon");
    console.log("Doing something");

    // Check if the Vibration API is supported
    if ("vibrate" in navigator) {
      vibrationButton.addEventListener("click", function () {
        // Vibrate the device for 200 milliseconds
        navigator.vibrate(200);
      });
    } else {
      // If Vibration API is not supported, display an error message
      vibrationButton.textContent = "Vibration Not Supported";
      vibrationButton.disabled = true;
    }
  };
  return (
    <div className="navbar-wrap">
      <h1 className="navbar-name">Harsh Sharma</h1>
      <div className="menu-icon" onClick={() => handleClick()}>
        <div className="menu-icon-dot"></div>
        <div className="menu-icon-dot"></div>
        <div className="menu-icon-dot"></div>
      </div>
    </div>
  );
};

export default Navbar;
