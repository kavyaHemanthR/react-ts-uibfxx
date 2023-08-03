import React from 'react';

function ReusableInput({
  id,
  type,
  name,
  value,
  placeholder,
  label,
  validation,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        //required
        // min="3"
        // max="5"
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        validation={validation}
        //pattern="^[\w\.-]+@[\w\.-]+\.(com|net|org|edu|gov|int|mil|arpa|aero|coop|museum|name|pro|biz|info)$"
        onChange={onChange}
      />
    </div>
  );
}

export default ReusableInput;
