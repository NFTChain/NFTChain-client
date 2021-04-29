import React from 'react';

// Right now we have class 'blue-button' and 'white-button'
const Button = ({ onClick, style, className = 'blue-button', text }) => {
  return (
    <button type='button' onClick={onClick} className={className} style={style}>
      {text}
    </button>
  );
};

export default Button;
