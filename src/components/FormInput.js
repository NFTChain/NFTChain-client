import React from 'react';

const FormInput = ({ style, type, onChange, value, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={style}
      className='form-input'
    />
  );
};

export default FormInput;
