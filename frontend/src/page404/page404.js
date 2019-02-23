import React from 'react';

import GuestNav from '../components/guest_nav';

import './page404.scss';

const Page404 = (props) => {
  return (
    <div className='page-404'>
      <GuestNav />
      <div className='main'>
        <p>
          Oops! We couldn{'\''}t find page
          <code>
            {props.location.pathname}
          </code>
        </p>
      </div>
    </div>
  );
};

export default Page404;
