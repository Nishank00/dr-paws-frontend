import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = ({ isOpen, onClose = () => {}, hideClose, children }) => {
  const popupRef = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

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
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return isMounted
    ? isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div
              ref={popupRef}
              className=" rounded-2xl relative xl:max-h-[95vh]  mt-8  lg:max-h-[70vh] overflow-scroll"
            >
              {children}
              {!hideClose && (
                <span
                  className="text-black hover:text-gray-500 text-xl absolute top-2 right-5 cursor-pointer"
                  onClick={onClose}
                >
                  X
                </span>
              )}
            </div>
          </div>,
          document.body
        )
    : null;
};

export default Popup;
