import React from 'react';

const Input = ({ type, id, placeholder, label }) => {
  return (
    <div>
       <input
        type={type}
        id={id}
        className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
        placeholder={placeholder}
        aria-label={label}
        />
    </div>
  );
};

export default Input;