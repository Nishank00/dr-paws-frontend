import React from "react";
import { useRef, useEffect } from "react";
const Popup = ({ isOpen, onClose, hideClose, children }) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div ref={popupRef} className="bg-white rounded-md relative">
        {children}
        {hideClose ?? (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 absolute -top-5 -right-2"
            onClick={onClose}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
