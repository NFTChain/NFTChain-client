import React from 'react';
import featureData from './featureData';

const Features = () => {
  return (
    <div className='features'>
      <h2 className='heading-secondary'>NFTChain Features</h2>
      <div className='container features__content'>
        {featureData.map((feature, i) => (
          <div key={i} className='features__box'>
            <div className='features__logo-box'>
              <i className='features__logo'>{feature.icon}</i>
            </div>
            <div className='features__heading-box'>
              <h4 className='features__heading'>{feature.title}</h4>
              <p className='features__info'>{feature.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
