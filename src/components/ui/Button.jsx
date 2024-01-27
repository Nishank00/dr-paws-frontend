"use client";

const Button = ({
  type = "primary",
  onClick = () => console.log("button clicked"),
  label = "button",
}) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
