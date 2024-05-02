"use client";

const Button = ({
  type = "button",
  color = "primary",
  onClick,
  label = "button",
  className = "",
  disabled = false,
}) => {
  return (
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
  );
};

export default Button;
