import React from 'react';

// Right now we have class 'blue-button' and 'white-button'
const Button = ({ onClick, style, className = 'blue-button', text }) => {
  return (
    <div onClick={onClick} className={className} style={style}>
      {text}
    </div>
  );
};

export default Button;
