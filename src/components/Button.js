import React from 'react';

const Button = ({ onClick, style, className, text }) => {
  return (
    <div onClick={onClick} className={`main-button ${className}`} style={style}>
      {text}
    </div>
  );
};

export default Button;
