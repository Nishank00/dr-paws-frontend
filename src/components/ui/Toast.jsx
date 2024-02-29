import React, { useEffect } from "react";

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    let timer;
    if (toast) {
      timer = setTimeout(() => {
        onClose();
      }, 5000); // Adjust the timeout value as needed
    }

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <>
      {toast && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${getBackgroundColor(
            toast.type
          )} shadow-md`}
        >
          <div>{toast.message}</div>
        </div>
      )}
    </>
  );
};

const getBackgroundColor = (type) => {
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

export default Toast;
