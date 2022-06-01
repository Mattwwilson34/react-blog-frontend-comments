import './Comment.css';
import React from 'react';

const Comment = (props) => {
  const { _id, author, text, date_yyyy_mm_dd, time_hour_min } = props.comment;
  return (
    <div className='Comment' key={_id}>
      <div className='Comment__Username'>{author.username}</div>
      <div className='Comment__Text'>{text}</div>
      <div className='Comment__DateTimePublished'>
        {date_yyyy_mm_dd} at {time_hour_min}
      </div>
    </div>
  );
};

export default Comment;
