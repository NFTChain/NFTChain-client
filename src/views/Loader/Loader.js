import React from 'react';

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='rect'>
        <div className='circle'>
          <span className='dot'></span>
          <span className='dot'></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
