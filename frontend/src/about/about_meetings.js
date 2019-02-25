import React from 'react';

import './about_meetings.scss';

const meetings = [
  ['Mondays', '4pm', '6pm', 'BIT 223'],
  ['Tuesdays', '12pm', '2pm', 'BIT 235'],
  ['Wednesdays', '6pm', '8pm', 'BIT 224'],
];

const Meeting = (props) => {
  return (
    <div className='meeting'>
      <div className='day'>{props.day}</div>
      <div className='time-start'>{props.timeStart}</div>
      <div className='to'>-</div>
      <div className='time-end'>{props.timeEnd}</div>
      <div className='room'>{props.room}</div>
    </div>
  );
};

const Meetings = (props) => {
  return (
    <div className='meetings'>
      <h3>Meeting Schedule S19</h3>
      {meetings.map((meeting, index) => {
        return (
          <Meeting
            key={index}
            day={meeting[0]}
            timeStart={meeting[1]}
            timeEnd={meeting[2]}
            room={meeting[3]}
          />
        );
      })}
    </div>
  );
}

export default Meetings;
