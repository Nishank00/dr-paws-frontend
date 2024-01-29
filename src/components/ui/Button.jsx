"use client";

const Button = ({
  type = "primary",
  onClick = () => console.log("button clicked"),
  label = "button",
}) => {
  return (
    <button className={`${type}-btn`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
