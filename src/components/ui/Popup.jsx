import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

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
          <div className={`fixed text-primary inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[60] `}>
            <div ref={popupRef} className="relative z-[60] rounded-2xl mt-8">
              <div className="rounded-2xl relative z-[60] overflow-hidden">{children}</div>
              {!hideClose && (
                <span
                  className="text-black z-[60] hover:text-gray-500 text-xl absolute top-2 right-5 cursor-pointer"
                  onClick={onClose}
                >
                  <IoCloseSharp className="text-[30px] text-[#000]" />
                </span>
              )}
            </div>
          </div>,
          document.body
        )
    : null;
};

export default Popup;
