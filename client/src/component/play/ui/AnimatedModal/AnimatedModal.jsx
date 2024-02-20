import React from "react";
import gsap from "gsap";
import "./AnimatedModal.css";

const AnimatedModal = ({
  children,
  buttonTitle,
  modalPrimaryColor,
  modalBackgroundColor,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = React.useRef(null);
  const openModal = () => {
    setIsModalOpen(true);
    gsap.to(modalRef.current, {
      top: "20vh",
      width: "95dvw",
      left: "2.5dvw",
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    gsap.to(modalRef.current, {
      top: "101dvh",
      left: 0,
      width: "100dvw",
      duration: 0.4,
    });
  };
  return (
    <div className="animated-modal-wrap">
      <button onClick={openModal}>{buttonTitle}</button>
      {isModalOpen && (
        <div onClick={closeModal} className="modal-backdrop-blur"></div>
      )}
      <div
        style={{
          backgroundColor: modalBackgroundColor,
          color: modalPrimaryColor,
        }}
        ref={modalRef}
        className="modal-ctr"
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedModal;
