import React from 'react';

const Text = ({ style, text }) => {
  return (
    <div className='main-text' style={style}>
      {text}
    </div>
  );
};

export default Text;
