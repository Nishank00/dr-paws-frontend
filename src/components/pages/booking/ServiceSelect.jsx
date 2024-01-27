import React from "react";

const Service = ({ label, isChecked = false, onChange }) => {
  return (
    <div className="w-full">
      <label className="flex items-center justify-between">
        {label}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="ml-2 h-10 w-10 bg-white rounded border-0  "
        />
      </label>
    </div>
  );
};

export default Service;
