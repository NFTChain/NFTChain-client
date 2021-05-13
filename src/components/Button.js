import React from 'react';

// Right now we have default class 'button' and 'button--blue' & 'button--white' modifiers
const Button = ({ onClick, style, className = 'button', text, children }) => {
  return (
    <button type='button' onClick={onClick} className={className} style={style}>
      {children ? children : text}
    </button>
  );
};

export default Button;
