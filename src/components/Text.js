import React from 'react';

const Text = ({ style, text, className }) => {
  return (
    <div
      className={`main-text${className ? ` ${className}` : ''}`}
      style={style}
    >
      {text}
    </div>
  );
};

export default Text;
