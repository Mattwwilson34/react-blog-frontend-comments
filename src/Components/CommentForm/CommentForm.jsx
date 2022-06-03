// Utils
import React, { useState } from 'react';
// Style sheets
import './CommentForm.css';

const CommentForm = () => {
  // State
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' }),
    };
    const response = await fetch(
      'http://localhost:8080/comment',
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  const handleCommentChange = (e) => setComment(e.target.value);

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <label htmlFor='comment'></label>
      <textarea
        id='comment'
        className='CommentForm__TextArea'
        name='comment'
        value={comment}
        onChange={handleCommentChange}
        placeholder='Add your comment here'
      />
      <input className='CommentForm__Submit' type='submit' value='Submit' />
    </form>
  );
};

export default CommentForm;
