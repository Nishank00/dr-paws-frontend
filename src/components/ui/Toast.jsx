// import React, { useState, useEffect } from "react";

// const Toast = ({ message, type, onClose }) => {
//   const [progress, setProgress] = useState(100);
//   const [hovered, setHovered] = useState(false);
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     let timer;
//     if (!hovered) {
//       timer = setInterval(() => {
//         if (progress > 0) {
//           setProgress((prev) => prev - 2);
//         } else {
//           clearInterval(timer);
//           onClose();
//         }
//       }, 100);
//     }
//     return () => clearInterval(timer);
//   }, [hovered, onClose, progress]);

//   const handleMouseEnter = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   const handleClose = () => {
//     setHovered(false);
//     onClose();
//   };

//   useEffect(() => {
//     if (show) {
//       const timeout = setTimeout(() => {
//         handleClose();
//       }, 5000);

//       return () => clearTimeout(timeout);
//     }
//   }, [show]);

//   return (
//     <div
//       className={`fixed bottom-4 right-4 p-4 bg-${type}-500 text-white border rounded-md shadow-md ${
//         !show ? "hidden" : ""
//       }`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="flex justify-between items-center">
//         <div>{message}</div>
//         <button onClick={handleClose} className="focus:outline-none">
//           &times;
//         </button>
//       </div>
//       <div className="h-2 bg-white mt-2 rounded-full overflow-hidden">
//         <div
//           style={{ width: `${progress}%` }}
//           className={`h-full bg-${type}-600 transition-all`}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Toast;

import React, { useState, useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (!hovered) {
      timer = setInterval(() => {
        if (progress > 0) {
          setProgress((prev) => prev - 2);
        } else {
          clearInterval(timer);
          onClose();
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [hovered, onClose, progress]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClose = () => {
    setHovered(false);
    onClose();
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 bg-${type}-500 text-white border rounded-md shadow-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center">
        <div>{message}</div>
        <button onClick={handleClose} className="focus:outline-none">
          &times;
        </button>
      </div>
      <div className="h-2 bg-white mt-2 rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className={`h-full bg-${type}-600 transition-all`}
        ></div>
      </div>
    </div>
  );
};

const useToast = () => {
  const [toastProps, setToastProps] = useState(null);

  const showToast = (message, type = "success", duration = 5000) => {
    setToastProps({
      message,
      type,
      onClose: () => setToastProps(null),
    });

    // Automatically hide the toast after the specified duration
    setTimeout(() => {
      setToastProps(null);
    }, duration);
  };

  return {
    showToast,
    ToastComponent: toastProps && <Toast {...toastProps} />,
  };
};

export default useToast;
