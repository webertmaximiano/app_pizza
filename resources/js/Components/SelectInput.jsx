import React from "react";

const SelectInput = ({ id, className, options, defaultValue, onChange }) => {
  return (
    <div>
      <select
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
