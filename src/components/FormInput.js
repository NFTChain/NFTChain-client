import React from 'react';

const FormInput = ({ style, type, onChange, value, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
      className='form-input'
    />
  );
};

export default FormInput;
