"use client";

const Button = ({
  type = "button",
  color = "primary",
  onClick = () => console.log("button clicked"),
  label = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-1 ${className} ${color}-btn`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
