import React from "react";
import "./Credits.css";
import GSAP_LOGO from "../../../../assets/images/CreditImg/GSAP_LOGO.png";
import Twingate_Logo from "../../../../assets/images/CreditImg/Twingate_Logo.png";
import LinearLogo from "../../../../assets/images/CreditImg/LinearLogo.png";
import CursorLogo from "../../../../assets/images/CreditImg/CursorLogo.png";
import RefireLogo from "../../../../assets/images/CreditImg/RefireLogo.png";
import PipeLogo from "../../../../assets/images/CreditImg/PipeLogo.png";
import LiveBlocks from "../../../../assets/images/CreditImg/LiveBlocks.png";
import DesignStudio from "../../../../assets/images/CreditImg/DesignStudio.png";

const Credits = () => {
  return (
    <div className="credits-wrap">
      <p className="tag-lines">Inspired by creators at</p>

      <div className="credit-line">
        <div className="credit-line-sec1">
          <div className="credit-logo-wrap">
            <img src={Twingate_Logo} />
          </div>
          <div className="credit-logo-wrap">
            <img src={LinearLogo} />
          </div>
        </div>
        <div className="credit-line-sec2">
          <div className="credit-logo-wrap">
            <img src={CursorLogo} />
          </div>
          <div className="credit-logo-wrap">
            <img src={Twingate_Logo} />
          </div>
        </div>
      </div>
      <div className="credit-line">
        <div className="credit-line-sec1">
          <div className="credit-logo-wrap">
            <img src={RefireLogo} />
          </div>
          <div className="credit-logo-wrap">
            <img src={PipeLogo} />
          </div>
        </div>
        <div className="credit-line-sec2">
          <div className="credit-logo-wrap">
            <img className="lb" src={LiveBlocks} />
          </div>
          <div className="credit-logo-wrap">
            <img src={DesignStudio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
