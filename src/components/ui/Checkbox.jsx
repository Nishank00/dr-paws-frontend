import React from "react";

const Checkbox = ({ label, checked, onChange, data = null }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="">
      <label className=" text-primary flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-primary focus:ring focus:ring-blue-300 mr-2"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
