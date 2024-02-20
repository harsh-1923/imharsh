import React from "react";
import DemoTitle from "../../DemoComponents/DemoTitle/DemoTitle";
import AnimatedModal from "../../ui/AnimatedModal/AnimatedModal";

const ModalContent = () => {
  return (
    <div className="modal-content-wrap">
      <h1 className="header">
        “Your first 10,000 photographs are your worst.”
      </h1>
    </div>
  );
};

const AnimatedModalDemo = () => {
  return (
    <div className="demo-wrapper">
      <DemoTitle
        title={"Animated Modal"}
        desc={"A modal that houses a React component"}
        details={[
          {
            detail: "Inspiration",
            link: "https://www.humaan.com/",
          },
          {
            detail: "Source Code",
            // link: "https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution",
          },
          {
            detail: "Mon 20th Feb, 2024 | Bangalore, India",
          },
        ]}
      />
      <AnimatedModal
        buttonTitle={"Open Modal"}
        modalPrimaryColor={"#1b3939"}
        modalBackgroundColor={"#f3f3e9"}
      >
        <ModalContent />
      </AnimatedModal>
    </div>
  );
};

export default AnimatedModalDemo;
