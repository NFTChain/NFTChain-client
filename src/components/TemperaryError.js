import React from 'react';

const TemperaryError = () => (
  <div className='error'>
    <h1 className='error__message'>
      Oops sorry. We are currently working on a mobile version of our app, stay
      tuned.
    </h1>
    <p className='error__instruction'>
      If you want to use our app please use a device with a laptop screen size
      or bigger. Thank you.
    </p>
  </div>
);

export default TemperaryError;
