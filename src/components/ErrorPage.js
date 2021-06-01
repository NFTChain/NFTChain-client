import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';

const ErrorPage = ({ error }) => {
  return (
    <div className='error__page'>
      <section className='error__page-content'>
        <h1 className='error__page-title '>Oops something went wrong.</h1>
        <h3 className='error__page-message'>{error}</h3>

        <Link className='error__page-home' to='/'>
          <Button className='button--blue' text={'Go Home'}></Button>
        </Link>
      </section>
    </div>
  );
};

export default ErrorPage;
