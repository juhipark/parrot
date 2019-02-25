import React from 'react';

import './about_officers.scss';

const officers = [
  [
    'Ryan',
    'Beck',
    'President',
    'rbeck@csumb.edu',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  ],
  [
    'Fernando',
    'Caudillo',
    'Vise President',
    'fcaudillo@csumb.edu',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  ],
  [
    'Sam',
    'Westigard',
    'Secretary',
    'swestigard@csumb.edu',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  ],
  [
    'Jake',
    'Fahy',
    'Treasurer',
    'jfahy@csumb.edu',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  ],
];

const Officer = (props) => {
  return (
    <div className='officer'>
      <img
        src={props.profileImg}
        alt={props.firstName + '_' + props.lastName}
        className='profile-img'
      />
      <div className='name'>
        <div className='first-name'>{props.firstName}</div>
        <div className='last-name'>{props.lastName}</div>
      </div>
      <div className='role'>{props.role}</div>
      <div className='email'>{props.email}</div>
    </div>
  );
};

const Officers = (props) => {
  return (
    <div className='officers'>
      {officers.map((officer, index) => {
        return (
          <Officer
            key={index}
            firstName={officer[0]}
            lastName={officer[1]}
            role={officer[2]}
            email={officer[3]}
            profileImg={officer[4]}
          />
        );
      })}
    </div>
  );
};

export default Officers;
