import React from 'react';

export const H1 = ({ text, style, className }) => (
  <h1 style={style} className={`h1 ${className}`}>
    {text}
  </h1>
);

export const H3 = ({ text, style, className }) => (
  <h3 style={style} className={`h3 ${className}`}>
    {text}
  </h3>
);

export const H6 = ({ text, style, className }) => (
  <h6 style={style} className={`h6 ${className}`}>
    {text}
  </h6>
);
