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
      className={`${className} ${color}-btn`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
