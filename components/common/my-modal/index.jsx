import React from "react";
import Modal from "react-modal";

const Index = ({ isOpen, onClose, children, screenSize, title, crossButtonShow=true }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => crossButtonShow && onClose(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: "9999",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          border: "0",
          background: "transparent",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0",
          outline: "none",
          padding: "0",
          width:
            screenSize > 1023
              ? "600px"
              : screenSize > 767
                ? "50%"
                : screenSize > 639
                  ? "70%"
                  : "90%",
          height: "max-content",
          margin: "auto",
        },
      }}
    >
      <div className="bg-white rounded-md px-5">
        <div className="flex items-center justify-between py-5 border-b">
          <div className="font-semibold text-lg text-black">
            {title}
          </div>
          {crossButtonShow && 
            <svg
              className="hover:cursor-pointer hover:fill-richElectricBlue border rounded-full p-1 hover:border-richElectricBlue"
              width="20px"
              height="20px"
              onClick={() => onClose(false)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          }
          
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default Index;
