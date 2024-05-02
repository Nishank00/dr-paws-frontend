import React, { useState, useEffect } from "react";

const Toast = ({ message, type, onClose = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${getBackgroundColor()} shadow-md`}
        >
          <div>{message}</div>
        </div>
      )}
    </>
  );
};

export default Toast;
