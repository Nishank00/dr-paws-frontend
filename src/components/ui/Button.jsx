"use client";

const Button = ({ type, onClick, label }) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: "primary",
  onClick: () => console.log("button clicked"),
  label: "button",
};

export default Button;
