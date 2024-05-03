"use client";

import BookingButton from "./BookingButton";

const Button = ({
  type = "button",
  color = "primary",
  onClick,
  label = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <>
      {label.toLowerCase() != "book a visit" ? (
        <button
          disabled={disabled}
          type={type}
          className={`flex items-center justify-center gap-1  ${color}-btn ${
            disabled && "cursor-not-allowed"
          } ${className}`}
          onClick={onClick}
        >
          {label}
        </button>
      ) : (
        <>
          <BookingButton
            className={`flex items-center justify-center gap-1  ${color}-btn ${
              disabled && "cursor-not-allowed"
            } ${className}`}
          />
        </>
      )}
    </>
  );
};

export default Button;
